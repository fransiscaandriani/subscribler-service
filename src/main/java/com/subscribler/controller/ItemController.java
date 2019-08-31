package com.subscribler.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import com.subscribler.model.Item;
import com.subscribler.repository.MerchantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.subscribler.model.Merchant;

@RestController
public class ItemController {
    @Autowired
    MerchantRepository merchantRepository;

    // Endpoint to get all existing items
    @GetMapping("/merchants/{merchantId}/items")
    public List<Item> getItems(@PathVariable String merchantId) {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if (optionalMerchant.isPresent())
            return optionalMerchant.get().getItemList();
        return new ArrayList<>();
    }

    //Endpoint to get item by id
    @GetMapping("/merchants/{merchantId}/items/{itemId}")
    public Item getItem(@PathVariable String merchantId, @PathVariable String itemId) {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if (optionalMerchant.isPresent()) {
            Merchant merchant = optionalMerchant.get();
            List<Item> itemList = merchant.getItemList();
            if (itemList == null || itemList.size() == 0)
                return null;
            for (Item item: itemList) {
                if (item.getId().equals(itemId))
                    return item;
            }
        }
        return null;
    }

    // Endpoint to add a new item
    @PostMapping("/merchants/{merchantId}/items")
    public Item createItem(@RequestBody Item newItem, @PathVariable String merchantId) {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if (optionalMerchant.isPresent()) {
            Merchant merchant = optionalMerchant.get(); //get merchant
            String itemId = String.valueOf(new Random().nextInt()); //generate random id
            Item merchantItem = new Item(
                    itemId,
                    newItem.getName(),
                    newItem.getDescription(),
                    newItem.getPictureUrl(),
                    newItem.getUnit());  //make new item object with the random id

            List<Item> itemList = merchant.getItemList(); //get existing items
            if (itemList == null)
                itemList = new ArrayList<>();
            itemList.add(merchantItem); //add the newly created item to the list
            merchant.setItemList(itemList);
            merchantRepository.save(merchant);
            return merchantItem;
        }
        return null;
    }

    //Endpoint to update an item
    @PutMapping("/merchants/{merchantId}/items/{itemId}")
    public Item updateItem(@RequestBody Item newItem, @PathVariable String merchantId, @PathVariable String itemId) {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if (optionalMerchant.isPresent()) {
            Merchant merchant = optionalMerchant.get();
            List<Item> itemList = merchant.getItemList();
            if (itemList == null || itemList.size() == 0)
                return null;
            for (Item item : itemList) {
                if (item.getId().equals(itemId)) {
                    item.setName(newItem.getName());
                    item.setDescription(newItem.getDescription());
                    item.setPictureUrl(newItem.getPictureUrl());
                    item.setUnit(newItem.getUnit());
                    merchantRepository.save(merchant);
                    return item;
                }
            }
        }
        return null;
    }

    //Endpoint to delete item
    @DeleteMapping("/merchants/{merchantId}/items/{itemId}")
    public String deleteItem(@PathVariable String merchantId, @PathVariable String itemId) {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        boolean result = false;
        if (optionalMerchant.isPresent()) {
            Merchant merchant = optionalMerchant.get();
            List<Item> itemList = merchant.getItemList();
            if (itemList != null && itemList.size() > 0) {
                for (int i = 0; i < itemList.size(); i++) {
                    Item item = itemList.get(i);
                    if (item.getId().equals(itemId)) {
                        result = true;
                        itemList.remove(i);
                        merchantRepository.save(merchant);
                    }
                }
            }
        }
        return "{ \"success\" : "+ (result ? "true" : "false") +" }";
    }
}
