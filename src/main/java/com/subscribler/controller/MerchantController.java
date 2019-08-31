package com.subscribler.controller;

import com.subscribler.model.Merchant;
import com.subscribler.repository.MerchantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MerchantController
{
    @Autowired
    MerchantRepository merchantRepository;

    // Endpoint to get all existing merchants
    @GetMapping("/merchants")
    public List<Merchant> getMerchants()
    {
        return merchantRepository.findAll();
    }

    // Endpoint to get a specific merchant by id
    @GetMapping("/merchants/{merchantId}")
    public Optional<Merchant> getMerchant(@PathVariable String merchantId)
    {
        return merchantRepository.findById(merchantId);
    }

    // Endpoint to update a specific merchant by id
    @PutMapping("/merchants/{merchantId}")
    public Optional<Merchant> updateMerchant(@RequestBody Merchant newMerchant, @PathVariable String merchantId)
    {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if (optionalMerchant.isPresent()) {
            Merchant merchant = optionalMerchant.get();
            merchant.setFirstName(newMerchant.getFirstName());
            merchant.setLastName(newMerchant.getLastName());
            merchant.setEmail(newMerchant.getEmail());
            merchant.setPackageList(newMerchant.getPackageList());
            merchant.setItemList(newMerchant.getItemList());
            merchantRepository.save(merchant);
        }
        return optionalMerchant;
    }

    @DeleteMapping(value = "/merchants/{merchantId}", produces = "application/json; charset=utf-8")
    public String deleteMerchant(@PathVariable String merchantId) {
        boolean result = merchantRepository.existsById(merchantId);
        merchantRepository.deleteById(merchantId);
        return "{ \"success\" : "+ (result ? "true" : "false") +" }";
    }

    @PostMapping("/merchants")
    public Merchant addMerchant(@RequestBody Merchant newMerchant)
    {
        Merchant merchant = new Merchant(
                "Placeholder ID",
                newMerchant.getFirstName(),
                newMerchant.getLastName(),
                newMerchant.getEmail());
        merchantRepository.insert(merchant);
        return merchant;
    }
}
