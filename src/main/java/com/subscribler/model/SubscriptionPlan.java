package com.subscribler.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter

@Document(collection = "subscription_plans")
public class SubscriptionPlan {
    @Id
    private @NonNull String id;
    private @NonNull int billingPeriod; //in cycle
    private @NonNull double price;
}
