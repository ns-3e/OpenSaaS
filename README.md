# OpenSaaS - Open Source SaaS Platform Template

OpenSaaS is an open-source platform template designed to help developers quickly launch Software-as-a-Service (SaaS) applications. Built with modern technologies and best practices, it provides essential SaaS features out of the box while maintaining flexibility for customization.

## 🎯 Current Features

- **Authentication & User Management**
  - Email-based authentication system
  - JWT-powered email verification
  - Custom user model with email as primary identifier
  - Session-based authentication with DRF support
  - Django AllAuth integration for social auth support

- **Backend Infrastructure**
  - Django 4.2 + Django REST Framework
  - PostgreSQL database with connection health checks
  - Comprehensive CORS configuration
  - Swagger/OpenAPI documentation
  - Environment-based settings with python-dotenv
  - Custom management commands for deployment

- **Frontend Framework**
  - React 18 with Node.js 18 LTS
  - Tailwind CSS for styling
  - Docker-optimized build process
  - Development and production configurations

- **Development & Deployment**
  - Docker and Docker Compose setup
  - Multi-stage build process
  - Environment variable management
  - Database wait functionality for container orchestration
  - Static file handling

## 📸 Screenshots
### Home Page
![Home Page - Dark](screenshots/Home-Dark.png)
*Home page with dark theme*

![Home Page - Light](screenshots/Home-Light.png)
*Home page with light theme*

```

> Replace the placeholder images and descriptions with your actual screenshots. For best results:
> - Use PNG format for better quality
> - Keep image sizes under 1MB
> - Use consistent dimensions (recommended: 1920x1080 or 1280x720)
> - Include captions explaining key features
> - Ensure no sensitive information is visible

## 🗺️ Roadmap Features

- **Subscription & Billing**
  - Stripe integration for payment processing
  - Subscription plan management
  - Usage-based billing
  - Invoice generation

- **Multi-tenancy**
  - Organization/team management
  - Role-based access control (RBAC)
  - Resource isolation between tenants
  - Shared vs. dedicated resource options

- **Analytics & Monitoring**
  - User activity tracking
  - Usage metrics dashboard
  - Performance monitoring
  - Error tracking and reporting

- **API & Integration**
  - WebSocket support for real-time features
  - API rate limiting
  - OAuth2 provider capabilities
  - Webhook system

## 📋 Prerequisites

- Docker and Docker Compose
- Git
- SMTP server access for email verification

## 🛠️ Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/opensaas.git
   cd opensaas
   ```

2. Create a `.env` file in the root directory:
   ```
   # Django Settings
   DJANGO_SECRET_KEY=your-secret-key
   DJANGO_DEBUG=True
   DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1

   # Database Settings
   DB_NAME=opensaas_db
   DB_USER=opensaas_user
   DB_PASSWORD=your_secure_password
   DB_HOST=db
   DB_PORT=5432

   # Email Settings
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USE_TLS=True
   EMAIL_HOST_USER=your-email@gmail.com
   EMAIL_HOST_PASSWORD=your-app-specific-password
   ```

3. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

4. Access the application:
   - Frontend App: http://localhost:3000
   - Admin Dashboard: http://localhost:8000/admin
   - API Documentation: http://localhost:8000/api/docs

## 🏗️ Project Structure

```