package com.subscribler.controller;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import com.subscribler.repository.MerchantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.subscribler.model.Merchant;

@RestController
public class MerchantController
{
    @Autowired
    MerchantRepository merchantRepository;

    // Endpoint to get all existing merchants
    @GetMapping("/merchants")
    public List<Merchant> getMerchants()
    {
        List<Merchant> merchantList = merchantRepository.findAll();
        return merchantList;
    }

    // Endpoint to get a specific merchant by id
    @GetMapping("/merchants/{merchantId}")
    public Optional<Merchant> getMerchant(@PathVariable String merchantId)
    {
        Optional<Merchant> merchant = merchantRepository.findById(merchantId);
        return merchant;
    }

    // Endpoint to update a specific merchant by id
    @PutMapping("/merchants/{merchantId}")
    public Optional<Merchant> updateMerchant(@RequestBody Merchant newMerchant, @PathVariable String merchantId)
    {
        Optional<Merchant> optionalEmp = merchantRepository.findById(merchantId);
        if (optionalEmp.isPresent()) {
            Merchant merchant = optionalEmp.get();
            merchant.setFirstName(newMerchant.getFirstName());
            merchant.setLastName(newMerchant.getLastName());
            merchant.setEmail(newMerchant.getEmail());
            merchant.setPackageList(newMerchant.getPackageList());
            merchant.setItemList(newMerchant.getItemList());
            merchantRepository.save(merchant);
        }
        return optionalEmp;
    }

    @DeleteMapping(value = "/merchants/{merchantId}", produces = "application/json; charset=utf-8")
    public String deleteMerchant(@PathVariable String merchantId) {
        Boolean result = merchantRepository.existsById(merchantId);
        merchantRepository.deleteById(merchantId);
        return "{ \"success\" : "+ (result ? "true" : "false") +" }";
    }

    @PostMapping("/merchants")
    public Merchant addMerchant(@RequestBody Merchant newMerchant)
    {
        String id = String.valueOf(new Random().nextInt());
        Merchant merchant = new Merchant(
                id,
                newMerchant.getFirstName(),
                newMerchant.getLastName(),
                newMerchant.getEmail(),
                newMerchant.getPackageList(),
                newMerchant.getItemList());
        merchantRepository.insert(merchant);
        return merchant;
    }
}
