# Настройка переменных в Google Tag Manager

После обновления компонента CookieConsent.tsx необходимо изменить JavaScript-переменные в Google Tag Manager. Вот как это сделать:

## 1. Войдите в интерфейс Google Tag Manager

1. Откройте https://tagmanager.google.com
2. Выберите ваш контейнер GTM-K48CG77

## 2. Обновите JavaScript-переменные

### cookieConsent_Analytics

1. Перейдите в раздел "Переменные"
2. Найдите переменную "cookieConsent_Analytics" (или создайте новую, если ее нет)
3. Установите тип: "Переменная уровня данных"
4. В поле "Имя переменной уровня данных" укажите: `cookieConsent.analytics`
5. Значение по умолчанию: `denied`
6. Сохраните переменную

### cookieConsent_Marketing

1. Найдите переменную "cookieConsent_Marketing" (или создайте новую)
2. Тип: "Переменная уровня данных"
3. Имя переменной уровня данных: `cookieConsent.marketing`
4. Значение по умолчанию: `denied`
5. Сохраните переменную

### cookieConsent_Preferences

1. Найдите переменную "cookieConsent_Preferences" (или создайте новую)
2. Тип: "Переменная уровня данных"
3. Имя переменной уровня данных: `cookieConsent.preferences`
4. Значение по умолчанию: `denied`
5. Сохраните переменную

## 3. Настройте тестовую переменную для отладки

1. Создайте новую переменную "Consent_Debug"
2. Тип: "Пользовательский JavaScript"
3. Код:
```javascript
function() {
  return {
    "analytics": {{cookieConsent_Analytics}},
    "marketing": {{cookieConsent_Marketing}}, 
    "preferences": {{cookieConsent_Preferences}},
    "method": {{Cookie Consent Method}}
  };
}
```
4. Сохраните переменную

## 4. Создайте переменную для метода согласия

1. Создайте новую переменную "Cookie Consent Method"
2. Тип: "Переменная уровня данных"
3. Имя переменной уровня данных: `cookie_consent_method`
4. Сохраните переменную

## 5. Обновите триггеры

### Триггер для аналитики:
- Имя: `Analytics Consent Granted`
- Тип триггера: Пользовательское событие
- Имя события: `cookie_consent_update`
- Этот триггер срабатывает по: `Некоторые пользовательские события`
- Условие: `cookieConsent_Analytics equals granted`

### Триггер для маркетинга:
- Имя: `Marketing Consent Granted`
- Тип триггера: Пользовательское событие
- Имя события: `cookie_consent_update`
- Этот триггер срабатывает по: `Некоторые пользовательские события`
- Условие: `cookieConsent_Marketing equals granted`

### Триггер для предпочтений:
- Имя: `Preferences Consent Granted`
- Тип триггера: Пользовательское событие
- Имя события: `cookie_consent_update`
- Этот триггер срабатывает по: `Некоторые пользовательские события`
- Условие: `cookieConsent_Preferences equals granted`

## 6. Создайте тег для отладки

1. Создайте новый тег "Consent Debug Logger"
2. Тип: Пользовательский HTML
3. HTML:
```html
<script>
console.log("Cookie Consent Status:");
console.log("Analytics:", {{cookieConsent_Analytics}});
console.log("Marketing:", {{cookieConsent_Marketing}});
console.log("Preferences:", {{cookieConsent_Preferences}});
console.log("Method:", {{Cookie Consent Method}});
</script>
```
4. Триггеры: Все страницы + Cookie Consent Update + Cookie Consent Accepted

## 7. Проверка

1. Опубликуйте версию контейнера
2. Включите режим предпросмотра
3. Откройте сайт с параметром ?gtm_debug=x в URL
4. Откройте консоль разработчика
5. Убедитесь, что переменные правильно считываются и журналируются
6. Проверьте срабатывание триггеров при изменении статуса согласия 