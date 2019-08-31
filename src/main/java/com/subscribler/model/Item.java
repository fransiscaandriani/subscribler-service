package com.subscribler.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter

public class Item {
    @Id
    private @NonNull String id;
    private @NonNull String name;
    private @NonNull String description;
    private @NonNull String pictureUrl;
}
