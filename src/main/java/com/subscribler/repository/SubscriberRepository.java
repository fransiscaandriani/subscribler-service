package com.subscribler.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.subscribler.model.Subscriber;

public interface SubscriberRepository extends MongoRepository<Subscriber, String> {
}
