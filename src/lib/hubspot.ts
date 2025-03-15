// Функция для создания нового контакта в HubSpot
export async function createContact(
  properties: Record<string, string>
): Promise<{ success: boolean; message: string; data?: unknown }> {
  const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
  
  // Проверяем наличие токена доступа
  if (!accessToken) {
    console.warn('HUBSPOT_ACCESS_TOKEN не настроен');
    return { 
      success: false, 
      message: 'Интеграция с HubSpot не настроена' 
    };
  }

  try {
    // Проверяем, есть ли email в свойствах
    if (!properties.email) {
      console.warn('Email обязателен для создания контакта');
      return {
        success: false,
        message: 'Email обязателен для создания контакта'
      };
    }

    console.log('Создаем новый контакт в HubSpot с email:', properties.email);
    
    // Фильтруем свойства, оставляя только стандартные свойства HubSpot
    const standardProperties: Record<string, string> = {};
    const standardHubSpotProperties = [
      'email', 'firstname', 'lastname', 'phone', 'website', 'company',
      'address', 'city', 'state', 'zip', 'country', 'jobtitle', 'message',
      'subject'
    ];
    
    // Добавляем только стандартные свойства
    for (const key of standardHubSpotProperties) {
      if (properties[key] !== undefined) {
        standardProperties[key] = properties[key];
      }
    }
    
    // Всегда включаем email
    standardProperties.email = properties.email;
    
    // Добавляем уникальный идентификатор для предотвращения конфликтов
    // Используем timestamp и случайное число для уникальности
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 10000);
    standardProperties.hs_additional_emails = `${properties.email}.${timestamp}.${random}@no-reply.com`;
    
    // Отправляем запрос в HubSpot для создания нового контакта
    const response = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ 
          properties: standardProperties,
          // Явно указываем, что нужно создать новый контакт
          createNewContactForNewEmail: true,
          // Используем дополнительный email как идентификатор для создания нового контакта
          idProperty: "hs_additional_emails"
        })
      }
    );
    
    // Получаем ответ
    let responseData;
    try {
      responseData = await response.json();
    } catch (parseError) {
      console.error('Ошибка при разборе ответа HubSpot:', parseError);
      return {
        success: false,
        message: `Не удалось разобрать ответ HubSpot: ${parseError instanceof Error ? parseError.message : 'Неизвестная ошибка'}`,
        data: { statusCode: response.status, statusText: response.statusText }
      };
    }
    
    // Проверяем успешность запроса
    if (!response.ok) {
      console.error('Ошибка API HubSpot:', responseData);
      
      // Если получаем ошибку конфликта (409), пробуем создать контакт через прямой API
      if (response.status === 409) {
        console.log('Получен конфликт, пробуем создать контакт через альтернативный метод...');
        
        // Изменяем email для создания нового контакта
        const uniqueEmail = `${properties.email.split('@')[0]}+${timestamp}@${properties.email.split('@')[1]}`;
        standardProperties.email = uniqueEmail;
        
        // Повторяем запрос с измененным email
        const retryResponse = await fetch(
          'https://api.hubapi.com/crm/v3/objects/contacts',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({ 
              properties: standardProperties,
              createNewContactForNewEmail: true
            })
          }
        );
        
        try {
          const retryData = await retryResponse.json();
          
          if (!retryResponse.ok) {
            console.error('Повторная ошибка API HubSpot:', retryData);
            return {
              success: false,
              message: `Ошибка API HubSpot при повторной попытке: ${retryData.message || retryResponse.statusText}`,
              data: retryData
            };
          }
          
          console.log('Контакт успешно создан через альтернативный метод:', retryData);
          return {
            success: true,
            message: 'Контакт успешно создан (альтернативный метод)',
            data: retryData
          };
        } catch (retryError) {
          console.error('Ошибка при разборе ответа повторного запроса:', retryError);
          return {
            success: false,
            message: `Ошибка при повторной попытке: ${retryError instanceof Error ? retryError.message : 'Неизвестная ошибка'}`,
            data: { statusCode: retryResponse.status, statusText: retryResponse.statusText }
          };
        }
      }
      
      return {
        success: false,
        message: `Ошибка API HubSpot: ${responseData.message || response.statusText}`,
        data: responseData
      };
    }
    
    console.log('Контакт успешно создан:', responseData);
    return {
      success: true,
      message: 'Контакт успешно создан',
      data: responseData
    };
  } catch (error) {
    console.error('Ошибка при отправке данных в HubSpot:', error);
    return {
      success: false,
      message: `Ошибка при отправке данных в HubSpot: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`
    };
  }
}

// Функция для сохранения данных формы в HubSpot
export async function saveFormToHubSpot(
  formType: 'contact' | 'newsletter',
  formData: Record<string, string>
): Promise<{ success: boolean; message: string; data?: unknown }> {
  try {
    console.log(`Сохраняем данные формы ${formType} в HubSpot:`, formData);
    
    // Подготавливаем свойства контакта
    const contactProperties: Record<string, string> = {
      email: formData.email
    };
    
    // Добавляем имя и фамилию в зависимости от типа формы
    if (formType === 'contact') {
      // Для контактной формы используем firstName и lastName напрямую
      if (formData.firstName) contactProperties.firstname = formData.firstName;
      if (formData.lastName) contactProperties.lastname = formData.lastName;
      
      // Для обратной совместимости проверяем наличие поля name
      if (!formData.firstName && !formData.lastName && formData.name) {
        const nameParts = formData.name.split(' ');
        contactProperties.firstname = nameParts[0] || '';
        contactProperties.lastname = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
      }
      
      // Добавляем другие поля контактной формы
      if (formData.phone) contactProperties.phone = formData.phone;
      if (formData.message) contactProperties.message = formData.message;
      if (formData.subject) contactProperties.subject = formData.subject;
    } else {
      // Для формы подписки используем firstName и lastName напрямую
      if (formData.firstName) contactProperties.firstname = formData.firstName;
      if (formData.lastName) contactProperties.lastname = formData.lastName;
    }
    
    // Создаем контакт в HubSpot
    return await createContact(contactProperties);
  } catch (error) {
    console.error(`Ошибка при сохранении формы ${formType} в HubSpot:`, error);
    return {
      success: false,
      message: `Ошибка при сохранении формы: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`
    };
  }
} 