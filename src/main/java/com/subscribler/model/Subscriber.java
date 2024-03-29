package com.subscribler.model;

import com.mongodb.lang.Nullable;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@RequiredArgsConstructor
@Getter
@Setter
@Document(collection = "subscribers")
public class Subscriber {
    @Transient
    public static final String SEQUENCE_NAME = "subscribers_sequence";
    private @NonNull String id;
    private @NonNull String firstName;
    private @NonNull String lastName;
    private @NonNull String email;
    private @NonNull String password;
    private @Nullable
    List<DeliveryAddress> deliveryAddresses;
    private @Nullable
    String phoneNumber;
    private @Nullable
    List<Subscription> subscriptionList;
}
