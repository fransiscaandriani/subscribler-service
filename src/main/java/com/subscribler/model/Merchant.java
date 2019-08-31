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
@Document(collection = "merchants")
public class Merchant {
    @Transient
    public static final String SEQUENCE_NAME = "merchants_sequence";

    @Id
    private @NonNull String id;
    private @NonNull String firstName;
    private @NonNull String lastName;
    private @NonNull String email;
    private @NonNull List<Package> packageList;
    private @NonNull List<Item> itemList;
}
