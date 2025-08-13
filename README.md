# 🚀 DevOps Portfolio Project: Advanced CI/CD Pipeline

A **production-ready, enterprise-grade** demonstration of modern DevOps practices, automated CI/CD workflows, and container orchestration - built around a URL shortener application.

## 🎯 **Project Focus: DevOps Excellence**

This project showcases **advanced DevOps skills** including:
- **Complete CI/CD Pipeline** with GitHub Actions
- **Multi-Container Docker Architecture** with automated builds
- **Docker Hub Integration** with smart versioning
- **Production-Ready Deployment** strategies
- **Modern Development Workflows** and best practices

*The URL shortener functionality serves as the application layer to demonstrate these DevOps capabilities.*

## 🛠️ **DevOps Tech Stack & Tools**

### **CI/CD & Automation**
- **GitHub Actions**: Complete workflow automation with conditional jobs
- **Docker Buildx**: Multi-platform container builds with caching
- **Docker Hub**: Automated image publishing and registry management
- **Build Caching**: GitHub Actions cache for optimized builds

### **Container Orchestration**
- **Multi-Container Setup**: Backend, Frontend, and Database services
- **Docker Compose**: Development environment orchestration
- **Network Isolation**: Secure inter-service communication
- **Volume Management**: Persistent data storage

### **Application Stack**
- **Backend**: Node.js 20 + Express + MongoDB + Mongoose
- **Frontend**: React 18 + Vite + Modern Hooks
- **Database**: MongoDB with persistent storage
- **Architecture**: Microservices with API-first design

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

## 🚀 **Advanced CI/CD Pipeline (GitHub Actions)**

Our **enterprise-grade CI/CD workflow** demonstrates modern DevOps practices:

### **🔄 Two-Stage Pipeline Architecture**

#### **Stage 1: Build & Test (All Branches)**
- **Code Quality**: YAML validation and syntax checking
- **Dependency Management**: Optimized npm ci with caching
- **Automated Testing**: Comprehensive test suite execution
- **Local Container Builds**: Docker image creation for validation
- **Docker Compose Validation**: Configuration syntax verification

#### **Stage 2: Production Deployment (Main Branch Only)**
- **Docker Hub Authentication**: Secure credential management
- **Multi-Platform Builds**: Docker Buildx for architecture compatibility
- **Smart Image Tagging**: Automatic versioning (latest, main, commit SHA)
- **Automated Publishing**: Direct push to Docker Hub registry
- **Build Caching**: GitHub Actions cache for faster builds

### **🎯 Key DevOps Features**
- **Conditional Execution**: Different jobs for different triggers
- **Dependency Management**: Jobs wait for previous stages to complete
- **Secret Management**: Secure handling of Docker Hub credentials
- **Multi-Container Strategy**: Both backend and frontend images
- **Production Readiness**: Images ready for immediate deployment

## 🐳 **Enterprise Docker Architecture**

### **🏗️ Multi-Container Microservices Design**
- **Backend Container**: Node.js 20 API server with optimized layers
- **Frontend Container**: React development server with hot reload
- **MongoDB Container**: Persistent database with volume management
- **Network Isolation**: Secure inter-service communication with custom networks

### **🚀 DevOps Benefits & Best Practices**
- **Reproducible Environments**: Identical setup across development, staging, and production
- **Horizontal Scaling**: Easy replication and load balancing
- **Development Consistency**: Eliminates "works on my machine" issues
- **Production Readiness**: Containerized deployment with health checks
- **Version Control**: Immutable images with proper tagging strategy
- **Resource Management**: Optimized container sizes and resource allocation

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
# Pull from Docker Hub (automatically updated by CI/CD)
docker pull yourusername/url-shortener-backend:latest
docker pull yourusername/url-shortener-frontend:latest

# Or use Docker Compose with production images
docker-compose -f docker-compose.prod.yml up -d
```

## 🐳 **Advanced Docker Hub Integration & Registry Management**

### **🚀 Automated Image Publishing**
- **CI/CD Triggered**: Images automatically pushed on main branch commits
- **Multi-Platform Support**: Optimized builds for ARM64, AMD64 architectures
- **Build Caching**: GitHub Actions cache for faster, more efficient builds
- **Parallel Processing**: Simultaneous backend and frontend image builds

### **🏷️ Smart Versioning & Tagging Strategy**
- **Latest Tag**: Always points to the most recent stable build
- **Branch Tags**: `main`, `develop` for different environments
- **Commit Tags**: `main-sha123` for precise version tracking
- **Semantic Versioning**: Ready for production release management

### **🔒 Security & Access Control**
- **Secret Management**: Secure Docker Hub credentials via GitHub Secrets
- **Authentication**: Automated login and token-based access
- **Registry Security**: Private/public image management capabilities
- **Audit Trail**: Complete build and push history tracking

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

## 🌟 **DevOps Skills Demonstrated**

This project showcases **enterprise-level DevOps expertise**:

### **🚀 CI/CD & Automation Mastery**
✅ **Complete GitHub Actions Pipeline**: Multi-stage workflows with conditional execution  
✅ **Automated Testing & Validation**: Quality gates at every commit  
✅ **Smart Build Strategies**: Caching, parallel processing, and optimization  

### **🐳 Container & Orchestration Expertise**
✅ **Multi-Container Architecture**: Microservices with proper isolation  
✅ **Docker Hub Integration**: Automated publishing and version management  
✅ **Production Deployment**: Ready-to-deploy containerized applications  

### **🏗️ Modern Development Practices**
✅ **Infrastructure as Code**: Docker Compose and workflow definitions  
✅ **Secret Management**: Secure credential handling in CI/CD  
✅ **Multi-Platform Support**: ARM64/AMD64 compatibility and optimization  

### **💼 Industry-Ready Capabilities**
✅ **Scalable Architecture**: Horizontal scaling and load balancing ready  
✅ **Monitoring & Observability**: Built-in health checks and logging  
✅ **Security Best Practices**: Network isolation and access control  

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

