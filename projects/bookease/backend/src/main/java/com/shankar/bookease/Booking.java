package com.shankar.bookease;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;

@Document(collection = "bookings")
public record Booking(@Id String id, @NotBlank String service, @NotBlank String customerName,
                      @Email @NotBlank String email, @NotBlank String phone,
                      @NotNull @FutureOrPresent LocalDate date, @NotBlank String time,
                      String status) {}
