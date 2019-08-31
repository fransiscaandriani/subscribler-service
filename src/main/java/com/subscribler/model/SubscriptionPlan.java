package com.subscribler.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter
public class SubscriptionPlan {
    @Transient
    public static final String SEQUENCE_NAME = "subscription_plans_sequence";

    @Id
    private @NonNull String id;
    private @NonNull int billingPeriod; //in cycle
    private @NonNull double price;
}
