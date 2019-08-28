package com.subscribler.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.subscribler.model.Merchant;

public interface MerchantRepository extends MongoRepository<Merchant, String> {
}
