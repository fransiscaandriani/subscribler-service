package com.subscribler.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.subscribler.model.BusinessOwner;

public interface BusinessOwnerRepository extends MongoRepository<BusinessOwner, String> {
}
