package com.subscribler.model;

import com.mongodb.lang.Nullable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class DeliveryAddress {
    private @Nullable
    String address;
    private @Nullable
    String note;
    private @Nullable
    String label;
}
