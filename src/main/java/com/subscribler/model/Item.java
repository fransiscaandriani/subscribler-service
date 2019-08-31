package com.subscribler.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter

public class Item {
    @Transient
    public static final String SEQUENCE_NAME = "items_sequence";

    @Id
    private @NonNull String id;
    private @NonNull String name;
    private @NonNull String description;
    private @NonNull String pictureUrl;
    private @NonNull String unit;
}
