package com.subscribler.model;

import com.mongodb.lang.Nullable;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import java.util.List;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Package {
    @Transient
    public static final String SEQUENCE_NAME = "packages_sequence";

    @Id
    private @Nullable String id;
    private @Nullable String name;
    private @Nullable String description;
    private @Nullable int cyclePeriod; //in days
    private @Nullable List<ItemQuantity> items;
    private @Nullable List<SubscriptionPlan> subscriptionPlans;
    private @Nullable String imageUrl;

    public Package(@Nullable String name,
                   @Nullable String description,
                   int cyclePeriod,
                   @Nullable List<ItemQuantity> items,
                   @Nullable List<SubscriptionPlan> subscriptionPlans,
                   @Nullable String imageUrl) {
        this.name = name;
        this.description = description;
        this.cyclePeriod = cyclePeriod;
        this.items = items;
        this.subscriptionPlans = subscriptionPlans;
        this.imageUrl = imageUrl;
    }
}
