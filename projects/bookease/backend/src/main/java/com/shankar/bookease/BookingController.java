package com.shankar.bookease;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {
    private final BookingRepository repository;
    public BookingController(BookingRepository repository) { this.repository = repository; }

    @GetMapping public List<Booking> all() { return repository.findAll(); }
    @GetMapping("/date/{date}") public List<Booking> byDate(@PathVariable LocalDate date) { return repository.findByDateOrderByTimeAsc(date); }
    @GetMapping("/customer/{email}") public List<Booking> byCustomer(@PathVariable String email) { return repository.findByEmailOrderByDateDesc(email); }
    @PostMapping @ResponseStatus(HttpStatus.CREATED)
    public Booking create(@Valid @RequestBody Booking input) {
        if (repository.findByDateOrderByTimeAsc(input.date()).stream().anyMatch(b -> b.time().equals(input.time()))) {
            throw new IllegalStateException("That time slot is already booked.");
        }
        return repository.save(new Booking(null, input.service(), input.customerName(), input.email(), input.phone(), input.date(), input.time(), "PENDING"));
    }
    @PatchMapping("/{id}/status")
    public Booking status(@PathVariable String id, @RequestParam String value) {
        Booking b = repository.findById(id).orElseThrow();
        return repository.save(new Booking(b.id(), b.service(), b.customerName(), b.email(), b.phone(), b.date(), b.time(), value.toUpperCase()));
    }
    @DeleteMapping("/{id}") @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) { repository.deleteById(id); }
}
