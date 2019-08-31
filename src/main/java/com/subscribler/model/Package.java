package com.subscribler.model;

import com.mongodb.lang.Nullable;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import java.util.List;

@RequiredArgsConstructor
@Getter
@Setter
public class Package {
    @Transient
    public static final String SEQUENCE_NAME = "packages_sequence";

    @Id
    private @Nullable
    String id;
    private @NonNull String name;
    private @NonNull String description;
    private @NonNull int cyclePeriod; //in days
    private @NonNull List<ItemQuantity> itemQuantityList;
    private @NonNull List<SubscriptionPlan> subscriptionPlanList;
}
