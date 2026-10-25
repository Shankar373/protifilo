package com.shankar.bookease;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "services")
public record Service(@Id String id, @NotBlank String name, @NotBlank String description, @Positive int durationMinutes, @Min(0) double price, boolean active) {}
