package com.subscribler.controller;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import com.subscribler.repository.BusinessOwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.subscribler.model.BusinessOwner;

@RestController
public class BusinessOwnerController
{
    @Autowired
    BusinessOwnerRepository businessOwnerRepository;

    @GetMapping(value = "/healthcheck", produces = "application/json; charset=utf-8")
    public String getHealthCheck()
    {
        return "{ \"isWorking\" : true }";
    }

    @GetMapping("/business_owners")
    public List<BusinessOwner> getBusinessOwners()
    {
        List<BusinessOwner> businessOwnerList = businessOwnerRepository.findAll();
        return businessOwnerList;
    }

    @GetMapping("/business_owners/{id}")
    public Optional<BusinessOwner> getBusinessOwner(@PathVariable String id)
    {
        Optional<BusinessOwner> businessOwner = businessOwnerRepository.findById(id);
        return businessOwner;
    }

    @PutMapping("/business_owners/{id}")
    public Optional<BusinessOwner> updateBusinessOwner(@RequestBody BusinessOwner newEmployee, @PathVariable String id)
    {
        Optional<BusinessOwner> optionalEmp = businessOwnerRepository.findById(id);
        if (optionalEmp.isPresent()) {
            BusinessOwner businessOwner = optionalEmp.get();
            businessOwner.setFirstName(newEmployee.getFirstName());
            businessOwner.setLastName(newEmployee.getLastName());
            businessOwner.setEmail(newEmployee.getEmail());
            businessOwnerRepository.save(businessOwner);
        }
        return optionalEmp;
    }

    @DeleteMapping(value = "/business_owners/{id}", produces = "application/json; charset=utf-8")
    public String deleteBusinessOwner(@PathVariable String id) {
        Boolean result = businessOwnerRepository.existsById(id);
        businessOwnerRepository.deleteById(id);
        return "{ \"success\" : "+ (result ? "true" : "false") +" }";
    }

    @PostMapping("/business_owners")
    public BusinessOwner addBusinessOwner(@RequestBody BusinessOwner newBusinessOwner)
    {
        String id = String.valueOf(new Random().nextInt());
        BusinessOwner businessOwner = new BusinessOwner(id, newBusinessOwner.getFirstName(), newBusinessOwner.getLastName(), newBusinessOwner.getEmail());
        businessOwnerRepository.insert(businessOwner);
        return businessOwner;
    }
}
