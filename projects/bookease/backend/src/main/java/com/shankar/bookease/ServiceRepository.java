package com.shankar.bookease;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ServiceRepository extends MongoRepository<Service, String> {
    List<Service> findByActiveTrueOrderByNameAsc();
}
