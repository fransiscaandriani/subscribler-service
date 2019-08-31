package com.subscribler.model;

import com.mongodb.lang.Nullable;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

@RequiredArgsConstructor
@Getter
@Setter

public class Item {
    @Transient
    public static final String SEQUENCE_NAME = "items_sequence";

    @Id
    private @Nullable
    String id;
    private @NonNull String name;
    private @NonNull String description;
    private @NonNull String imageUrl;
    private @NonNull String unit;
}
