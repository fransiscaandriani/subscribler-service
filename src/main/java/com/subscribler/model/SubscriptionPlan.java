package com.subscribler.model;

import com.mongodb.lang.Nullable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

@AllArgsConstructor
@Getter
@Setter
public class SubscriptionPlan {
    @Transient
    public static final String SEQUENCE_NAME = "subscription_plans_sequence";

    @Id
    private @Nullable
    String id;
    private @Nullable
    String name;
    private @Nullable
    String description;
    private @Nullable
    int cycles; //in cycle
    private @Nullable
    double price;
}
