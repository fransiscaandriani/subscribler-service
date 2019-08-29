package com.subscribler.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import com.subscribler.model.Package;
import com.subscribler.repository.MerchantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.subscribler.model.Merchant;

@RestController
public class PackageController {
    @Autowired
    MerchantRepository merchantRepository;

    // Endpoint to get all existing packages
    @GetMapping("/merchants/{merchantId}/packages")
    public List<Package> getPackages(@PathVariable String merchantId)
    {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if(optionalMerchant.isPresent())
            return optionalMerchant.get().getPackageList();
        return new ArrayList<>();
    }

    //Endpoint to get package by id
    @GetMapping("/merchants/{merchantId}/package/{packageId}")
    public Package getPackage(@PathVariable String merchantId, @PathVariable String packageId){
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if (optionalMerchant.isPresent()){
            Merchant merchant = optionalMerchant.get();
            List<Package> packageList = merchant.getPackageList();
            for(Package p : packageList){
                if (p.getId()==packageId)
                    return p;
            }
        }
        return null;
    }

    // Endpoint to add a new package
    @PostMapping("/merchants/{merchantId}/packages")
    public Package createPackage(@RequestBody Package newPackage, @PathVariable String merchantId){
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if(optionalMerchant.isPresent()){
            Merchant merchant = optionalMerchant.get(); //get merchant
            String packageId = String.valueOf(new Random().nextInt()); //generate random id
            Package merchantPackage = new Package(
                    packageId,
                    newPackage.getName(),
                    newPackage.getDescription(),
                    newPackage.getCyclePeriod(),
                    newPackage.getItemQuantityList(),
                    newPackage.getSubscriptionPlanList());  //make new package object with the random id

            List<Package> packageList = merchant.getPackageList(); //get existing packages
            if (packageList == null)
                packageList = new ArrayList<>();
            packageList.add(merchantPackage); //add the newly created package to the list
            merchant.setPackageList(packageList);
            merchantRepository.save(merchant);
            return merchantPackage;
        }
        return null;
    }

}
