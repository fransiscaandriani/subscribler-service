package com.subscribler.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter

@Document(collection = "payment_plans")
public class PaymentPlan {
    @Id
    private @NonNull String id;
    private @NonNull int billingPeriod; //in cycle
    private @NonNull double price;
}
