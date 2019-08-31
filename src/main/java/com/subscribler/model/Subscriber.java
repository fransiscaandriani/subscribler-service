package com.subscribler.model;

import com.mongodb.lang.Nullable;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@RequiredArgsConstructor
@Getter
@Setter
@Document(collection = "subscribers")
public class Subscriber {
    @Id
    private @NonNull String id;
    private @NonNull String firstName;
    private @NonNull String lastName;
    private @NonNull String email;
    private @NonNull String password;
    private @Nullable String address;
    private @Nullable String phoneNumber;
    private @Nullable List<Subscription> subscriptionList;
}
