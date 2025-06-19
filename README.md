# 🏡 Luxury Homes — React + TypeScript проект по продаже недвижимости

Проект представляет собой лендинг/SPA-приложение по продаже элитной недвижимости в США.  
Реализован на **React + TypeScript**, с упором на интерактивный UI, управление состоянием и работу с localStorage.

## 🔍 Функциональность

- 📄 Главная страница со списком недвижимости
- 🏷 Карточки домов (с картинкой, ценой, адресом)
- ➕ Кнопка **«Подробнее»** — переход на страницу дома
- ⭐ Добавление/удаление домов в **избранное**
- 📂 Страница **"Favorites"**
- 👤 Кнопка **"Entry / Get out"** с сохранением состояния
- 🌗 **Переключение светлой/тёмной темы**
- 💾 Хранение состояния в `localStorage`

## 💻 Стек технологий

- **React 18**
- **TypeScript**
- **React Router**
- **CSS Modules**
- **localStorage**
- Чистая структура компонентов и страниц

## 📸 Скриншоты

![Luxury-homes-1](https://github.com/user-attachments/assets/bd9e09dd-a20c-40db-b9b3-45fc7fee1fff)
![Luxury-homes-2](https://github.com/user-attachments/assets/1c9990e4-6617-4426-913f-a00e3f49d011)
![Luxury-homes-3](https://github.com/user-attachments/assets/cdde47c0-6297-4c63-82ef-d2d5709a8f76)

## 🧱 Структура проекта

```bash
src/
├── img/                 # Картинки
├── components/          # UI-компоненты (Header, Footer, PropertyCard)
├── mock/                # Данные домов
├── pages/               # Страницы: Home, Favorites, PropertyPage
├── types/               # Типизация (property.ts)
├── utils/               # Работа с избранным (favorites.ts)
├── App.tsx / index.tsx  # Точка входа

