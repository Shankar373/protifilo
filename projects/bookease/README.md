# BookEase — Service Booking Platform

**BookEase** is a portfolio-grade full-stack appointment booking application designed around a realistic small-business workflow. It demonstrates how I would build a booking product for clinics, salons, consultants, repair services, coaching centers and other appointment-based businesses.

## Current implementation

### Customer experience
- Responsive landing page
- Service selection
- Customer details form
- Date and time selection
- Booking request submission
- Confirmation feedback
- Recent booking visibility for the demo workflow

### Backend
- Java 21 + Spring Boot 3
- REST API under `/api/bookings`
- MongoDB persistence
- Request validation
- Duplicate time-slot protection
- Booking status updates
- Environment-based MongoDB configuration
- CORS configuration for local React development
- Spring Security baseline configuration

### Infrastructure
- Docker Compose MongoDB service
- Backend Dockerfile
- Environment variables for deployment

## Run locally

### 1. Start MongoDB
```bash
docker compose up mongodb -d
```

### 2. Start the API
```bash
cd backend
mvn spring-boot:run
```

API: `http://localhost:8080`

### 3. Start the React frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend: `http://localhost:5173`

## Example API

`POST /api/bookings`

```json
{
  "service": "Dental Consultation",
  "customerName": "Alex Morgan",
  "email": "alex@example.com",
  "phone": "+91 9876543210",
  "date": "2030-05-15",
  "time": "10:00"
}
```

## Architecture

```text
React + Vite
     |
     | HTTP / JSON
     v
Spring Boot REST API
     |
     v
MongoDB
```

## Portfolio positioning

This project is a **self-created portfolio demonstration**, not claimed client work. Its purpose is to show prospective clients that I can turn a business requirement into a usable full-stack product.

## Roadmap

- JWT login and role-based authorization
- Business/admin dashboard
- Availability management
- Customer booking history and cancellation
- Automated tests
- CI/CD
- Production deployment
- Live demo
