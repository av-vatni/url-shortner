# URL Shortener

A simple full-stack URL shortener application built with Node.js, Express, MongoDB, and React (Vite).

## Features
- Shorten long URLs to easy-to-share short links
- Track visit analytics for each short URL
- Simple and clean React frontend
- MongoDB for persistent storage

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm
- MongoDB (local or cloud instance)

### Backend Setup
1. Clone the repository and navigate to the project directory:
   ```sh
   git clone <repo-url>
   cd URL Shortner
   ```
2. Install backend dependencies:
   ```sh
   npm install
   ```
3. Start MongoDB (if running locally).
4. Build the frontend and start the backend server:
   ```sh
   npm run dev
   ```
5. The backend will run on [http://localhost:8001](http://localhost:8001)

### Frontend Development
If you want to develop the frontend separately:
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install frontend dependencies:
   ```sh
   npm install
   ```
3. Start the frontend dev server:
   ```sh
   npm run dev
   ```
4. The frontend will run on [http://localhost:5173](http://localhost:5173)

## API Endpoints
- `POST /url` — Create a new short URL. Body: `{ "url": "https://example.com" }`
- `GET /:shortId` — Redirect to the original URL
- `GET /url/analytics/:shortId` — Get analytics for a short URL

## License
MIT