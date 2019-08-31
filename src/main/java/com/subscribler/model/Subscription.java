package com.subscribler.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.lang.Nullable;

@AllArgsConstructor
@Getter
@Setter
public class Subscription {
    private @NonNull String merchantId;
    private @NonNull String packageId;
    private @NonNull String subscriptionPlanId;
}