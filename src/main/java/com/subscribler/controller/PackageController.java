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
    public List<Package> getPackages(@PathVariable String merchantId) {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if (optionalMerchant.isPresent())
            return optionalMerchant.get().getPackageList();
        return new ArrayList<>();
    }

    //Endpoint to get package by id
    @GetMapping("/merchants/{merchantId}/packages/{packageId}")
    public Package getPackage(@PathVariable String merchantId, @PathVariable String packageId) {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if (optionalMerchant.isPresent()) {
            Merchant merchant = optionalMerchant.get();
            List<Package> packageList = merchant.getPackageList();
            if (packageList == null || packageList.size() == 0)
                return null;
            for (Package p : packageList) {
                if (p.getId().equals(packageId))
                    return p;
            }
        }
        return null;
    }

    // Endpoint to add a new package
    @PostMapping("/merchants/{merchantId}/packages")
    public Package createPackage(@RequestBody Package newPackage, @PathVariable String merchantId) {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if (optionalMerchant.isPresent()) {
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

    //Endpoint to update a package
    @PutMapping("/merchants/{merchantId}/packages/{packageId}")
    public Package updatePackage(@RequestBody Package newPackage, @PathVariable String merchantId, @PathVariable String packageId) {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if (optionalMerchant.isPresent()) {
            Merchant merchant = optionalMerchant.get();
            List<Package> packageList = merchant.getPackageList();
            if (packageList == null || packageList.size() == 0)
                return null;
            for (Package p : packageList) {
                if (p.getId().equals(packageId)) {
                    p.setName(newPackage.getName());
                    p.setDescription(newPackage.getDescription());
                    p.setCyclePeriod(newPackage.getCyclePeriod());
                    p.setItemQuantityList(newPackage.getItemQuantityList());
                    p.setSubscriptionPlanList(newPackage.getSubscriptionPlanList());
                    merchantRepository.save(merchant);
                    return p;
                }
            }
        }
        return null;
    }

    //Endpoint to delete package
    @DeleteMapping("/merchants/{merchantId}/packages/{packageId}")
    public String deletePackage(@PathVariable String merchantId, @PathVariable String packageId) {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        boolean result = false;
        if (optionalMerchant.isPresent()) {
            Merchant merchant = optionalMerchant.get();
            List<Package> packageList = merchant.getPackageList();
            if (packageList != null && packageList.size() > 0) {
                for (int i = 0; i < packageList.size(); i++) {
                    Package p = packageList.get(i);
                    if (p.getId().equals(packageId)) {
                        result = true;
                        packageList.remove(i);
                        merchantRepository.save(merchant);
                    }
                }
            }
        }
        return "{ \"success\" : "+ (result ? "true" : "false") +" }";
    }
}