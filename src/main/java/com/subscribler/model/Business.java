package com.subscribler.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter

public class Business {
    private @NonNull String name;
    private @NonNull String type;
    private @NonNull String description;
}
