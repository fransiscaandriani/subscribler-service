package com.subscribler.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter

public class ItemQuantity {
    private @NonNull String itemId;
    private @NonNull int quantity;
}
