# Little Lemon Frontend (React)

This is the frontend for the Little Lemon web application, built using React and Vite. The application interacts with a Django REST Framework (DRF) backend to provide restaurant-related features like menu display and table booking.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [API Integration](#api-integration)

---

## Features
- Displays menu items fetched from the backend API.
- Allows users to book tables via a booking form.
- Fully responsive design.
- React Router-based navigation.

---

## Tech Stack
- **Frontend Framework:** React (with Vite)
- **Styling:** CSS (external stylesheets)
- **HTTP Client:** Axios

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <https://github.com/Xerx81/LittleLemon-Frontend>
   cd LittleLemon-Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser at:
   ```
   http://localhost:5173
   ```

---

## Folder Structure
```plaintext
littlelemon-frontend/
├── public/                # Static files
│   ├── favicon.ico
├── src/                   # Main source code
│   ├── assets/            # Images and assets
│   ├── components/        # Reusable React components
│   ├── pages/             # Page components for routes
│   ├── styles/            # CSS files
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
```

---

## Scripts
- **Start Development Server:**
  ```bash
  npm run dev
  ```
- **Build for Production:**
  ```bash
  npm run build
  ```
- **Preview Production Build:**
  ```bash
  npm run preview
  ```

---

## API Integration
The frontend communicates with the backend through RESTful APIs. Ensure the backend is running before starting the frontend.

### Example API Endpoints:
- **Menu Items:** `GET /restaurant/menu/items/`
- **Single Menu Item:** `GET /restaurant/menu/items/:id/`
- **Bookings:** `POST /restaurant/booking/tables/`

Update the base URL in Axios if necessary:
```javascript
axios.defaults.baseURL = 'http://127.0.0.1:8000';
```
