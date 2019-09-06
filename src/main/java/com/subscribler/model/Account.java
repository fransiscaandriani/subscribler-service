package com.subscribler.model;

import com.mongodb.lang.Nullable;
import lombok.*;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Account {
    private @NonNull String firstName;
    private @NonNull String lastName;
    private @NonNull String email;
    private @NonNull String password;
    private @Nullable String address;
    private @Nullable String phoneNumber;

    public static void updateAccount(Account currentAccount, Account newAccount) {
        currentAccount.setFirstName(newAccount.getFirstName());
        currentAccount.setLastName(newAccount.getLastName());
        currentAccount.setEmail(newAccount.getEmail());
        currentAccount.setPassword(newAccount.getPassword());
        currentAccount.setAddress(newAccount.getAddress());
        currentAccount.setPhoneNumber(newAccount.getPhoneNumber());
    }

}
