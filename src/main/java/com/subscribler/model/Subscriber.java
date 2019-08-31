package com.subscribler.model;

import com.mongodb.lang.Nullable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.List;


@AllArgsConstructor
@Getter
@Setter
public class Subscriber {
    @Id
    private @NonNull String id;
    private @NonNull String firstName;
    private @NonNull String lastName;
    private @NonNull String email;
    private @NonNull String password;
    private @Nullable String address;
    private @Nullable String phoneNumber;
    private @Nullable List<PackageSubscriptionPlan> packageSubscriptionPlanList;
}
