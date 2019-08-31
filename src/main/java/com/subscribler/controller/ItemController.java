package com.subscribler.controller;

import com.subscribler.model.Item;
import com.subscribler.model.Merchant;
import com.subscribler.repository.MerchantRepository;
import com.subscribler.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class ItemController {
    @Autowired
    MerchantRepository merchantRepository;

    @Autowired
    private SequenceGeneratorService sequenceGenerator;

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
            for (Item item : itemList) {
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
        String itemId = String.valueOf(sequenceGenerator.generateSequence(Item.SEQUENCE_NAME));
        if (optionalMerchant.isPresent()) {
            Merchant merchant = optionalMerchant.get(); //get merchant
            Item merchantItem = new Item(
                    newItem.getName(),
                    newItem.getDescription(),
                    newItem.getImageUrl(),
                    newItem.getUnit());  //make new item object with the random id

            List<Item> itemList = merchant.getItemList(); //get existing items
            if (itemList == null)
                itemList = new ArrayList<>();
            merchantItem.setId(itemId);
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
                    item.setImageUrl(newItem.getImageUrl());
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
        return "{ \"success\" : " + (result ? "true" : "false") + " }";
    }
}
