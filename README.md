# 🌍 AQI Pro: Delhi Pollution Tracker

> **Real-time Air Quality Intelligence with immersive 3D visualization.**

AQI Pro is a high-end, modern web application designed to provide citizens of Delhi NCR with accurate, real-time insights into air quality. Featuring a stunning 3D interactive globe and deep analytics, it transforms complex environmental data into actionable intelligence.

![AQI Pro Dashboard Preview](https://via.placeholder.com/800x400?text=AQI+Pro+Dashboard+Preview)

## ✨ Features

*   **🌐 Immersive 3D Visualization**: An interactive globe showing pollution hotspots across Delhi NCR using React Three Fiber.
*   **📊 Live Intelligence Hub**: Real-time AQI tracking with auto-updates every 2 minutes.
*   **🔔 Smart Health Alerts**: Automated health advisories and urgent alerts based on local AQI levels.
*   **🏛️ District-wise Breakdown**: Detailed stats for all 11 districts of Delhi (Central, North, South, East, West, etc.).
*   **📈 Historical Analytics**: Interactive charts showing pollution trends and atmospheric conditions.
*   **🔐 Enterprise-grade Security**: Secure authentication via Google OAuth, GitHub, and traditional email/password, protected by JWT.
*   **📱 Responsive Architecture**: A glassmorphic, mobile-first design that looks beautiful on any device.

## 🚀 Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **3D Engine**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Context API

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Auth**: [Passport.js](https://www.passportjs.org/) (OAuth2) & [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- **Real-time**: [Socket.io](https://socket.io/) (Planned/Integrated)
- **Scheduling**: [node-cron](https://github.com/node-cron/node-cron) for automated AQI fetching

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- Google & GitHub OAuth credentials

### 1. Clone the Repository
```bash
git clone https://github.com/amanxchaubey/delhi-pollution-tracker.git
cd delhi-pollution-tracker
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
```
Start the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```
Create a `.env` file in the `frontend` folder:
```env
VITE_API_URL=http://localhost:5000/api
```
Start the frontend:
```bash
npm run dev
```

## 🛡️ Security & Performance
- **JWT Authentication**: Secure stateless sessions.
- **Bcrypt**: Password hashing for traditional accounts.
- **Glassmorphism UI**: High-performance backdrop blurs and optimized SVGs.
- **Lazy Loading**: Components and 3D assets are loaded on demand to ensure fast TTI (Time to Interactive).
