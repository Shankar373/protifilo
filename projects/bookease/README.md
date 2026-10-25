# BookEase — Service Booking Platform

**BookEase** is a portfolio-grade full-stack appointment booking application designed around a realistic small-business workflow. It demonstrates how I would build a booking product for clinics, salons, consultants, repair services, coaching centers and other appointment-based businesses.

## Current implementation

### Customer experience
- Responsive landing page
- Service catalogue loaded from MongoDB through the API
- Customer details form with validation
- Future date and time selection
- Booking request submission
- Success and API error feedback

### Business dashboard
- Total, pending and confirmed booking metrics
- Recent booking table
- Confirm booking action
- Cancel booking action
- Refresh data from the API

### Backend
- Java 21 + Spring Boot 3
- REST APIs for services and bookings
- MongoDB persistence
- Bean validation
- Duplicate date/time protection
- Consistent 400/409 API error responses
- Demo service seed data
- CORS configuration for local React development

### Infrastructure
- Docker-ready MongoDB/backend setup
- Environment-based API URL
- GitHub Actions build workflow

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

## Main API

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/services` | Active services |
| GET | `/api/services/all` | All services |
| POST | `/api/services` | Create service |
| PUT | `/api/services/{id}` | Update service |
| DELETE | `/api/services/{id}` | Delete service |
| GET | `/api/bookings` | List bookings |
| GET | `/api/bookings/date/{date}` | Bookings for a date |
| GET | `/api/bookings/customer/{email}` | Customer history |
| POST | `/api/bookings` | Create booking |
| PATCH | `/api/bookings/{id}/status?value=CONFIRMED` | Change booking status |
| DELETE | `/api/bookings/{id}` | Delete booking |

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

## Production enhancements

For a real client deployment, the next layer would include authentication/authorization, real calendar integration, email/SMS notifications, payments, audit logs, rate limiting, monitoring and cloud deployment.
