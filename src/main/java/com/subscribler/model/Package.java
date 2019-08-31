package com.subscribler.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Getter @Setter
public class Package {
    @Transient
    public static final String SEQUENCE_NAME = "packages_sequence";

    @Id
    private @NonNull String id;
    private @NonNull String name;
    private @NonNull String description;
    private @NonNull int cyclePeriod; //in days
    private @NonNull List<ItemQuantity> itemQuantityList;
    private @NonNull List<SubscriptionPlan> subscriptionPlanList;
}
