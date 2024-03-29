package com.subscribler.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter

public class BankAccount {
    private @NonNull String name;
    private @NonNull String accountNumber;
    private @NonNull String bankName;
}
