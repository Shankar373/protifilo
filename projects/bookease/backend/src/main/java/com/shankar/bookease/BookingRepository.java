package com.shankar.bookease;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.time.LocalDate;
import java.util.List;

public interface BookingRepository extends MongoRepository<Booking, String> {
    List<Booking> findByDateOrderByTimeAsc(LocalDate date);
    List<Booking> findByEmailOrderByDateDesc(String email);
}
