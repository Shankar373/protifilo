# BookEase — Portfolio Case Study

## The business problem
Appointment-based businesses often manage bookings through phone calls, WhatsApp messages or spreadsheets. That creates duplicate slots, missed requests and poor visibility for staff.

## The solution
BookEase is a self-created full-stack demonstration showing how a small business can accept appointment requests through a responsive web experience and manage them from an internal dashboard.

## User journey
1. Visitor reviews services.
2. Visitor selects a service, date and time.
3. Visitor submits contact details.
4. Backend validates the request and prevents an occupied time slot from being booked.
5. Staff can review bookings and change their status.

## Technical implementation
- React + Vite frontend
- Java 21 + Spring Boot backend
- MongoDB persistence
- REST API
- Bean Validation
- Docker development environment
- GitHub Actions CI

## Engineering decisions
### Duplicate booking protection
The API checks existing bookings for the selected date/time before saving a request. This keeps the demonstration focused on a real business rule instead of only presenting a visual mockup.

### Responsive-first interface
The customer flow is designed for mobile as well as desktop because appointment traffic commonly arrives from phones.

### Clear scope
This repository is explicitly a portfolio demonstration, not claimed client work. Production additions such as authentication, role-based access, notifications, payments and cloud deployment are tracked separately rather than being presented as completed.

## What this demonstrates to a prospective client
- Ability to translate a business workflow into software
- Frontend and backend integration
- Database-backed CRUD operations
- Validation and business-rule handling
- Responsive UI implementation
- Practical project documentation

## Next production extensions
- JWT authentication and role-based access
- Business profile and staff accounts
- Availability/working-hours management
- Customer booking history and cancellation
- Email/WhatsApp notifications
- Payment integration where required
- Automated integration tests
- Production deployment and monitoring
