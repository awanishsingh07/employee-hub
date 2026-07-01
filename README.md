# 👨‍💼 Employee Hub

A modern full-stack Employee Management System built using **React**, **Spring Boot**, and **PostgreSQL**. The application provides a responsive dashboard for managing employee records with complete CRUD functionality, real-time search, validation, and a clean user interface.

---

## 📸 Preview

> Add screenshots of your application here after deployment.

| Dashboard |
|------------|
| ![Dashboard](screenshots/dashboard.png) |

---

# ✨ Features

- 📋 View all employees
- ➕ Add new employees
- ✏️ Update employee details
- 🗑️ Delete employees with confirmation modal
- 🔍 Real-time employee search
- ✅ Frontend & Backend validation
- 🔔 Toast notifications
- ⏳ Loading states
- 🎨 Responsive modern UI
- ✨ Framer Motion animations
- 📦 RESTful API architecture
- 🛡️ Global exception handling
- 🌐 Global CORS configuration

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Framer Motion
- React Icons
- React Hot Toast

## Backend

- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- Bean Validation

## Database

- PostgreSQL

---

# 🏗️ Project Architecture

```
React Frontend
        │
        │ Axios
        ▼
Spring Boot REST API
        │
        ▼
Service Layer
        │
        ▼
Repository Layer (JPA)
        │
        ▼
PostgreSQL Database
```

---

# 📂 Project Structure

```
EmployeeManagementSystem
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── exception
│   └── config
│
└── frontend
    ├── components
    ├── services
    ├── assets
    └── pages
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/awanishsingh07/employee-management-system.git
```

---

## Backend Setup

Navigate to backend folder

```bash
cd backend
```

Configure PostgreSQL in

```properties
application.properties
```

Example

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/employee_db
spring.datasource.username=postgres
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```

Run the application

```bash
mvn spring-boot:run
```

Backend will start on

```
http://localhost:8080
```

---

## Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run

```bash
npm run dev
```

Frontend will start on

```
http://localhost:5173
```

---

# 🔗 REST API Endpoints

| Method | Endpoint | Description |
|----------|------------------------|----------------|
| GET | /api/employees | Get All Employees |
| GET | /api/employees/{id} | Get Employee By ID |
| POST | /api/employees | Add Employee |
| PUT | /api/employees/{id} | Update Employee |
| DELETE | /api/employees/{id} | Delete Employee |

---

# 🧪 Validation

### Frontend

- Required field validation
- Email validation
- Salary validation
- Loading indicators
- Toast notifications

### Backend

- Bean Validation
- Global Exception Handling
- Custom ResourceNotFoundException

---

# 📈 Future Improvements

- JWT Authentication
- Role-Based Access Control
- Pagination
- Sorting
- Department Filter
- Export Employee Data
- Docker Deployment
- AWS Deployment

---

# 👨‍💻 Author

**Awanish Kumar Singh**

- GitHub: https://github.com/awanishsingh07
- LinkedIn: https://linkedin.com/in/awanishsingh07

---

# ⭐ If you found this project useful

Give it a ⭐ on GitHub.

---