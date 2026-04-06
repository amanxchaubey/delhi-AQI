# 🌫️ Delhi Pollution Tracker

**Real-time air quality monitoring, interactive mapping & data visualization for Delhi**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Vercel-000?style=for-the-badge)](https://delhi-aqi-olive.vercel.app)
[![Backend API](https://img.shields.io/badge/⚡_API-Render-46E3B7?style=for-the-badge)](https://delhi-aqi-1.onrender.com)

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

</div>

---

## 📖 About

Delhi Pollution Tracker is a full-stack MERN application that provides real-time AQI (Air Quality Index) monitoring for Delhi. It features interactive maps, 3D globe visualization, data analytics, health advisories, and a smart alert system — all wrapped in a sleek, dark-themed UI.

---

## ✨ Features

### 🗺️ Interactive Visualizations
- **Live Heatmap** — Pollution heatmap of Delhi using Leaflet / Mapbox GL
- **3D Globe** — Interactive Three.js globe showing pollution data
- **Analytics Dashboard** — Charts and graphs powered by Recharts

### 📊 Real-Time Data
- **AQI Dashboard** — Live air quality metrics with auto-refresh
- **Cron-based Fetcher** — Automatically fetches AQI data from OpenWeatherMap API
- **Historical Analytics** — Trend analysis and data comparisons

### 🏥 Health & Safety
- **Health Advisory** — Dynamic health recommendations based on current AQI levels
- **Smart Alerts** — Configurable email alerts when AQI exceeds thresholds
- **Push Notifications** — Web push notifications for critical pollution events

### 👤 User Management
- **Authentication** — JWT-based auth with email/password registration
- **Social Login** — Google & GitHub OAuth integration via Passport.js
- **User Profiles** — Personalized settings and alert preferences
- **Admin Panel** — Admin-only dashboard for user and data management

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| React Router v7 | Client-side routing |
| Recharts | Data visualization / charts |
| Leaflet + React Leaflet | Interactive maps |
| Mapbox GL | Map tiles |
| Three.js + React Three Fiber | 3D globe visualization |
| Framer Motion | Animations |
| Lucide React | Icons |
| Axios | HTTP client |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database |
| Passport.js | OAuth (Google, GitHub) |
| JSON Web Tokens | Authentication |
| Nodemailer | Email alerts |
| node-cron | Scheduled AQI data fetching |
| web-push | Push notifications |
| bcrypt.js | Password hashing |

---

## 📁 Project Structure

```
delhi-AQI/
├── backend/
│   ├── config/          # Passport OAuth strategies
│   ├── cron/            # Scheduled AQI data fetcher
│   ├── middleware/       # Auth middleware
│   ├── models/          # Mongoose schemas (User, AQI)
│   ├── routes/          # API routes (auth, AQI)
│   ├── services/        # Email, AQI & alert services
│   ├── server.js        # Express entry point
│   └── .env             # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   │   ├── Auth/    # Login, Register, Social Login
│   │   │   ├── Dashboard/ # Dashboard widgets
│   │   │   └── Layout/  # Navbar, Sidebar, Footer
│   │   ├── contexts/    # React Context (Auth, Theme)
│   │   ├── pages/       # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── DelhiMap.jsx
│   │   │   ├── Analytics.jsx
│   │   │   ├── HealthAdvisory.jsx
│   │   │   ├── Globe.jsx
│   │   │   ├── Alerts.jsx
│   │   │   ├── AdminPanel.jsx
│   │   │   └── ...
│   │   ├── api.js       # API base URL config
│   │   └── App.jsx      # Root component & routing
│   └── .env             # Frontend environment variables
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ 
- **MongoDB** (local or Atlas)
- **OpenWeatherMap API Key** — [Get one here](https://openweathermap.org/api)

### 1. Clone the repository

```bash
git clone https://github.com/amanxchaubey/delhi-pollution-tracker.git
cd delhi-pollution-tracker
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENWEATHER_API_KEY=your_openweather_api_key
NODE_ENV=development

# Email (for alerts)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587

# OAuth (optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Start the server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
VITE_MAPBOX_TOKEN=your_mapbox_token
```

Start the dev server:

```bash
npm run dev
```

The app will be running at **http://localhost:5173** 🎉

---

## 🌐 Deployment

| Service | Platform |
|---|---|
| Frontend | [Vercel](https://delhi-aqi-olive.vercel.app) |
| Backend | [Render](https://delhi-aqi-1.onrender.com) |
| Database | MongoDB Atlas |

---

## 📡 API Endpoints

### Auth
| Method | Route | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login with email/password |
| `GET` | `/api/auth/me` | Get current user |
| `PUT` | `/api/auth/profile` | Update user profile |
| `GET` | `/api/auth/google` | Google OAuth |
| `GET` | `/api/auth/github` | GitHub OAuth |

### AQI
| Method | Route | Description |
|---|---|---|
| `GET` | `/api/aqi/current` | Get current AQI data |
| `GET` | `/api/aqi/history` | Get historical AQI data |
