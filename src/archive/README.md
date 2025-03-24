# Архив компонентов

В этой папке хранятся архивные версии компонентов проекта FADS.

## CookieConsent

Файл `CookieConsent.20250324.tsx` - это архивная версия компонента для управления согласием на использование cookie в соответствии с требованиями GDPR и других законов о конфиденциальности.

### Описание компонента

Компонент `CookieConsent` предоставляет:
- Баннер для получения согласия на использование cookie
- Управление различными категориями cookie:
  - Essential (обязательные)
  - Analytics (аналитические)
  - Marketing (маркетинговые)
  - Preferences (пользовательские предпочтения)
- Интеграцию с Google Tag Manager (GTM) и Google Analytics 4
- Сохранение предпочтений пользователя в localStorage
- Блокирование несущественных cookie до получения согласия

### Интеграция с Google Tag Manager

Компонент отправляет события и данные в dataLayer для управления согласием:
- `cookie_consent_update` - при обновлении статуса согласия
- `cookie_consent_accepted` - при принятии всех cookie
- `cookie_consent_declined` - при отказе от cookie
- `cookie_settings_opened` - при открытии настроек cookie

Атрибуты согласия в dataLayer:
- `cookieConsent.analytics` (`granted`/`denied`)
- `cookieConsent.marketing` (`granted`/`denied`)
- `cookieConsent.preferences` (`granted`/`denied`)
- `cookieConsent.essential` (всегда `granted`)

### Дата архивирования

24 марта 2025 года 