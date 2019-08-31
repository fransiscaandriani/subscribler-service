package com.subscribler.model;

import com.mongodb.lang.Nullable;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@RequiredArgsConstructor
@Getter @Setter
@Document(collection = "merchants")
public class Merchant {
    @Transient
    public static final String SEQUENCE_NAME = "merchants_sequence";

    @Id
    private @NonNull String id;
    private @NonNull String firstName;
    private @NonNull String lastName;
    private @NonNull String email;
    private @Nullable List<Package> packageList;
    private @Nullable List<Item> itemList;
}
