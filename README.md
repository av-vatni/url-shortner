# 🚀 Advanced URL Shortener

A **production-ready, enterprise-grade** full-stack URL shortener application showcasing modern development practices, DevOps automation, and scalable architecture.

## ✨ Advanced Features & Modern Tech Stack

### 🏗️ **Architecture & Infrastructure**
- **Microservices Architecture**: Separate backend API and frontend services
- **Container Orchestration**: Multi-container Docker setup with Docker Compose
- **Database**: MongoDB with Mongoose ODM for scalable data management
- **API-First Design**: RESTful API with proper error handling and validation

### 🚀 **Frontend (React + Vite)**
- **Modern React 18+**: Built with latest React features and hooks
- **Vite Build Tool**: Lightning-fast development and optimized production builds
- **Responsive Design**: Mobile-first, modern UI/UX
- **Component Architecture**: Reusable, maintainable React components

### ⚡ **Backend (Node.js + Express)**
- **Node.js 20**: Latest LTS version with enhanced performance
- **Express.js**: Fast, unopinionated web framework
- **MongoDB Integration**: Robust database operations with Mongoose
- **ShortID Generation**: Secure, collision-resistant URL shortening
- **Analytics Tracking**: Visit counting and analytics endpoints

### 🐳 **DevOps & CI/CD**
- **GitHub Actions**: Automated CI/CD pipeline with comprehensive testing
- **Docker Multi-Container**: Isolated, reproducible environments
- **Automated Testing**: Integrated test suite with npm scripts
- **Build Automation**: Automated Docker image building and validation
- **Quality Gates**: Automated validation of Docker Compose configurations

### 🔧 **Development Experience**
- **Hot Reload**: Nodemon for backend, Vite for frontend
- **Environment Management**: Docker-based development environment
- **Dependency Management**: Optimized npm workflows with caching
- **Code Quality**: ESLint configuration for frontend code standards

## 🚀 Getting Started

### Prerequisites
- **Node.js 20+** (Latest LTS)
- **Docker & Docker Compose** (for containerized development)
- **npm** (Node package manager)
- **Git** (for version control)

### 🐳 **Quick Start with Docker (Recommended)**
```bash
# Clone the repository
git clone <repo-url>
cd URL-Shortner

# Start all services with Docker Compose
docker-compose up -d

# Access the application:
# Frontend: http://localhost:5173
# Backend API: http://localhost:8001
# MongoDB: localhost:27017
```

### 🔧 **Traditional Development Setup**

#### Backend Setup
```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Backend runs on http://localhost:8001
```

#### Frontend Development
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Frontend runs on http://localhost:5173
```

## 🏗️ **Project Structure**
```
URL-Shortner/
├── .github/workflows/          # GitHub Actions CI/CD
├── controllers/                 # Express route controllers
├── models/                     # Mongoose data models
├── routes/                     # API route definitions
├── frontend/                   # React application
│   ├── src/                   # React source code
│   ├── public/                # Static assets
│   └── Dockerfile             # Frontend container
├── Dockerfile                  # Backend container
├── docker-compose.yml          # Multi-service orchestration
└── package.json                # Backend dependencies
```

## 🔌 **API Endpoints**

### Core Functionality
- `POST /url` — Create short URL
  - **Body**: `{ "url": "https://example.com" }`
  - **Response**: `{ "shortId": "abc123", "originalUrl": "...", "createdAt": "..." }`

- `GET /:shortId` — Redirect to original URL
  - **Behavior**: 302 redirect with visit tracking

- `GET /url/analytics/:shortId` — Get URL analytics
  - **Response**: `{ "shortId": "abc123", "visits": 42, "createdAt": "...", "lastVisited": "..." }`

## 🚀 **CI/CD Pipeline**

Our GitHub Actions workflow automatically:
1. **Code Quality**: Validates YAML syntax and structure
2. **Dependency Management**: Installs dependencies with npm ci
3. **Testing**: Runs comprehensive test suite
4. **Container Building**: Builds both backend and frontend Docker images
5. **Validation**: Verifies Docker Compose configuration
6. **Quality Gates**: Ensures all builds pass before deployment

## 🐳 **Docker Architecture**

### Multi-Container Setup
- **Backend Container**: Node.js 20 API server
- **Frontend Container**: React development server
- **MongoDB Container**: Persistent database storage
- **Network Isolation**: Secure inter-service communication

### Benefits
- **Reproducible Environments**: Same setup across all machines
- **Easy Scaling**: Horizontal scaling capabilities
- **Development Consistency**: Eliminates "works on my machine" issues
- **Production Ready**: Containerized deployment ready

## 🧪 **Testing & Quality Assurance**

- **Automated Testing**: npm test script for validation
- **Docker Validation**: Automated container build verification
- **Configuration Validation**: Docker Compose syntax checking
- **CI/CD Integration**: Automated quality gates on every commit

## 🚀 **Deployment Options**

### Docker Compose (Development)
```bash
docker-compose up -d
```

### Production Deployment
```bash
# Build production images
docker build -t url-shortener-backend:latest .
docker build -t url-shortener-frontend:latest ./frontend

# Run with production environment variables
docker-compose -f docker-compose.prod.yml up -d
```

## 🔧 **Development Commands**

```bash
# Backend
npm start          # Start production server
npm run dev        # Start development server with hot reload
npm test           # Run test suite

# Frontend
cd frontend
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## 🌟 **Why This Project is Advanced**

This URL shortener demonstrates **enterprise-level development practices**:

✅ **Modern Architecture**: Microservices with proper separation of concerns  
✅ **DevOps Automation**: Complete CI/CD pipeline with GitHub Actions  
✅ **Container Orchestration**: Multi-container Docker setup  
✅ **Quality Assurance**: Automated testing and validation  
✅ **Scalability**: Designed for horizontal scaling  
✅ **Production Ready**: Docker-based deployment strategy  
✅ **Modern Tech Stack**: Latest Node.js, React, and development tools  
✅ **Best Practices**: Industry-standard project structure and workflows  

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using modern development practices and enterprise-grade architecture**

