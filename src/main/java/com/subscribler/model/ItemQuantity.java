package com.subscribler.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter

@Document(collection = "item_quantities")
public class ItemQuantity {
    @Id
    private @NonNull String id;
    private @NonNull Item item;
    private @NonNull int quantity;
}
