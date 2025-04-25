#  React Frontend

##  Технологии

- **React** – фронтенд-библиотека
- **React Router** – маршрутизация
- **TypeScript** – типизация
- **Tailwind CSS** – стили
- **Axios** – HTTP-запросы
- **JWT** – авторизация через токен
- **Feature-based architecture** – масштабируемая структура проекта

---

##  Установка

```bash
git clone https://github.com/your-username/react-app
cd react-app

npm install

cp .env.example .env


## 🏃‍♂️ Запуск

```bash
npm start
```

---

## 🏗 Архитектура

```bash
src/
├── app/            # Точка входа (App.tsx, index.tsx)
├── features/       # Модули (auth, home и т.д.)
│   └── auth/
│       ├── components/   # Формы и подкомпоненты
│       ├── pages/        # Страницы Login, Register
│       └── context/      # AuthContext
├── shared/         # Переиспользуемые сущности
│   ├── components/     # UI-компоненты (Navbar, Button)
│   ├── hooks/          # useAuth и прочие хуки
│   ├── api/            # Axios-инстансы и запросы
│   ├── services/       # Логика общения с API
│   └── utils/          # Вспомогательные функции (например, токены)
├── router/         # React Router
├── index.css       # Tailwind стили
└── .env            # Переменные окружения
```

---

##  Авторизация

- При входе сохраняется JWT access token в `localStorage`
- Токен используется в заголовке:

```http
Authorization: Bearer <токен>
```

- Проверка авторизации — через `useAuth()`
- Защищённые маршруты — через `PrivateRoute`

---

##  Как писать код

- **Page** — для страницы (LoginPage, HomePage)
- **Form** — только за форму
- **Context** — только для хранения состояния
- **Hook** — для абстракции логики
- **Service** — для общения с API
- **Shared Component** — если переиспользуется
- **Route** — только маршруты и защита

---

##  Обновление зависимостей

После установки новой библиотеки:

```bash
npm install some-package
```

Затем обнови lock-файл:

```bash
npm install --package-lock-only
```

---

##  .env

Пример:

```env
REACT_APP_API_URL=http://localhost:5000/api
```
