package com.shankar.bookease;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "http://localhost:5173")
public class ServiceController {
    private final ServiceRepository repository;
    public ServiceController(ServiceRepository repository) { this.repository = repository; }

    @GetMapping public List<Service> active() { return repository.findByActiveTrueOrderByNameAsc(); }
    @GetMapping("/all") public List<Service> all() { return repository.findAll(); }
    @PostMapping @ResponseStatus(HttpStatus.CREATED) public Service create(@Valid @RequestBody Service input) { return repository.save(input); }
    @PutMapping("/{id}") public Service update(@PathVariable String id, @Valid @RequestBody Service input) {
        return repository.save(new Service(id, input.name(), input.description(), input.durationMinutes(), input.price(), input.active()));
    }
    @DeleteMapping("/{id}") @ResponseStatus(HttpStatus.NO_CONTENT) public void delete(@PathVariable String id) { repository.deleteById(id); }
}
