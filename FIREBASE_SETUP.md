# 🔥 Настройка Firebase для локальной разработки

## Проблема
Ошибка "Missing or insufficient permissions" возникает из-за правил безопасности Firestore.

## Решения

### Вариант 1: Firebase Emulator (Рекомендуется)

#### 1. Установка Firebase CLI
```bash
# Установка через npm
npm install -g firebase-tools

# Или через curl (macOS/Linux)
curl -sL https://firebase.tools | bash
```

#### 2. Инициализация проекта
```bash
cd monk-main_v.2
firebase login
firebase init
```

При инициализации выберите:
- ✅ Firestore
- ✅ Hosting
- ✅ Emulators

#### 3. Запуск эмулятора
```bash
firebase emulators:start
```

Это запустит:
- 🔥 Firestore Emulator: http://localhost:8080
- 🌐 Hosting: http://localhost:5000
- 🎛️ Emulator UI: http://localhost:4000

#### 4. Тестирование
Откройте: http://localhost:5000/test-firebase-emulator.html

### Вариант 2: Обновление правил безопасности

#### 1. Откройте Firebase Console
https://console.firebase.google.com/project/studio-8703515322-12e3a

#### 2. Перейдите в Firestore Database > Rules

#### 3. Замените правила на:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Разрешить запись в коллекции форм
    match /offer-requests/{document} {
      allow create: if true;
    }
    
    match /contact-requests/{document} {
      allow create: if true;
    }
    
    match /test/{document} {
      allow read, write: if true;
    }
  }
}
```

#### 4. Нажмите "Publish"

### Вариант 3: Быстрое тестирование (временно)

Для быстрого тестирования можно временно открыть доступ:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    allow read, write: if true;
  }
}
```

⚠️ **ВНИМАНИЕ**: Не используйте это в продакшене!

## Текущие файлы

- `firebase.json` - конфигурация Firebase
- `firestore.rules` - правила безопасности
- `test-firebase-emulator.html` - тестирование эмулятора
- `test-firebase.html` - тестирование продакшена

## Команды для разработки

```bash
# Запуск эмулятора
firebase emulators:start

# Запуск только Firestore
firebase emulators:start --only firestore

# Деплой правил
firebase deploy --only firestore:rules

# Деплой сайта
firebase deploy --only hosting
```

## Проверка статуса

1. **Эмулятор работает**: http://localhost:4000
2. **Сайт через эмулятор**: http://localhost:5000
3. **Текущий сайт**: http://localhost:8000/src/
4. **Тест продакшена**: http://localhost:8000/test-firebase.html

## Отладка

Если возникают проблемы:

1. Проверьте консоль браузера (F12)
2. Проверьте логи Firebase CLI
3. Убедитесь, что порты свободны
4. Перезапустите эмулятор

```bash
# Проверка портов
lsof -i :4000
lsof -i :5000
lsof -i :8080

# Остановка процессов
firebase emulators:stop
```