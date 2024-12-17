# Travel Planner - Frontend

Welcome to the **Travel Planner** frontend project! 🚀 This is a React-based web application that helps users explore detailed information about countries, plan trips, and manage user access with roles like `user` and `admin`.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Folder Structure](#folder-structure)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Overview

This **Travel Planner** project provides a user-friendly platform for travelers to:
- Explore country-specific details (e.g., capital, population, languages, currencies, etc.)
- Manage user login and registration
- Enable admin functionalities for managing country data

The frontend communicates with the backend API at: `https://travelplannerapi.omertech.dk/api`.
The backend application can be found at: `https://github.com/qmer05/travel_planner_backend`.

---

## Features

✅ **Browse Countries**
- Display a list of all countries, including their details and flags.

✅ **Authentication**
- Login, register, and role-based access management (`admin` and `user` roles).

✅ **Admin Dashboard**
- Create, update, and delete country information (accessible for `admin` users only).

✅ **Interactive UI**
- Modern UI designed with React and `styled-components`.

✅ **API Documentation Page**
- Provides a clear overview of backend API endpoints and example responses.

✅ **Role-Based Rendering**
- Conditionally render routes or navigation options depending on user roles.

---

## Technologies Used

### Frontend:
- **React 18.3**
- **React Router DOM** (v6.28) - For routing and navigation
- **styled-components** - For dynamic and scoped styling
- **Vite** - For development build and preview

### Development Tools:
- **ESLint** - For linting and code quality
- **Vite Preview** - For production preview during testing
- **LocalStorage** - For handling JWT tokens

---

## Project Setup

To run the project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/travel-planner-frontend.git
   cd travel-planner-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

   This will start a development server at `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the production build**
   ```bash
   npm run preview
   ```

---

## Folder Structure

```
travel-planner-frontend/
├── public/                     # Static assets
├── src/                        # Source files
│   ├── components/             # Shared React components
│   ├── layouts/                # Layout components
│   ├── pages/                  # Page components (e.g., Home, Countries, Admin)
│   ├── util/                   # Utility functions (e.g., apiFacade)
│   ├── App.jsx                 # Main App component
│   ├── main.jsx                # Vite entry point
│   └── index.css               # Global styles
├── .eslintrc                   # ESLint configuration
├── vite.config.js              # Vite configuration file
├── package.json                # NPM dependencies
└── README.md                   # Project documentation
```

---

## API Documentation

The backend API endpoints and example responses are clearly outlined in the **API Documentation** page within the app. Here are the primary endpoints:

| Endpoint                      | Method | Description                       | Authentication       |
|-------------------------------|--------|-----------------------------------|-----------------------|
| `/api/countries`              | `GET`  | Retrieve all countries            | None                 |
| `/api/countries/:id`          | `GET`  | Retrieve a country by ID          | Admin token required |
| `/api/countries`              | `POST` | Create a new country              | Admin token required |
| `/api/countries/:id`          | `PUT`  | Update an existing country        | Admin token required |
| `/api/countries/:id`          | `DELETE`| Delete a country                 | Admin token required |

### Example Response:
```json
{
    "id": 39,
    "name": "Norway",
    "currencies": ["Norwegian krone"],
    "capital": "Oslo",
    "languages": ["Norwegian Nynorsk", "Norwegian Bokmål", "Sami"],
    "borders": ["FIN", "SWE", "RUS"],
    "area": 323802,
    "googleMaps": "https://goo.gl/maps/htWRrphA7vNgQNdSA",
    "population": 5379475,
    "flagPng": "https://flagcdn.com/w320/no.png"
}
```

---

## Screenshots

### 1. Home Page
![Home Page](public/screenshots/homepage.png)

### 2. Countries Page
![Countries Page](public/screenshots/countries.png)

### 3. Admin Dashboard
![Admin Dashboard](public/screenshots/admin.png)

---

## Future Improvements
- Add dark mode support 🌙
- Enhance error handling and validation ✅
- Implement advanced search and filtering options for countries 🔍
- Deploy the frontend on popular hosting platforms like Vercel, Netlify, or GitHub Pages 🚀

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute!

---

Thank you for checking out **Travel Planner**! 🌎✨

If you have questions, contributions, or feature suggestions, feel free to create an issue or submit a pull request. 🤝

**Happy Traveling!** 🎒🌍