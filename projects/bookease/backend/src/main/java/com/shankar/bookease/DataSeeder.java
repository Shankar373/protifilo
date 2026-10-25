package com.shankar.bookease;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {
    @Bean
    CommandLineRunner seedServices(ServiceRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new Service(null, "Dental Consultation", "Initial consultation and assessment.", 30, 500, true));
                repository.save(new Service(null, "General Check-up", "Routine health check-up.", 45, 750, true));
                repository.save(new Service(null, "Specialist Consultation", "One-to-one specialist consultation.", 60, 1200, true));
            }
        };
    }
}
