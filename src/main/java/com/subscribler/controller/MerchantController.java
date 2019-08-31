package com.subscribler.controller;

import com.google.zxing.WriterException;
import com.subscribler.model.Merchant;
import com.subscribler.repository.MerchantRepository;
import com.subscribler.service.QRGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
public class MerchantController {
    @Autowired
    MerchantRepository merchantRepository;

    // Endpoint to get all existing merchants
    @GetMapping("/merchants")
    public List<Merchant> getMerchants() {
        return merchantRepository.findAll();
    }

    // Endpoint to get a specific merchant by id
    @GetMapping("/merchants/{merchantId}")
    public Optional<Merchant> getMerchant(@PathVariable String merchantId) {
        return merchantRepository.findById(merchantId);
    }

    @PostMapping("/merchants")
    public Merchant addMerchant(@RequestBody Merchant newMerchant) {
        Merchant merchant = new Merchant(
                newMerchant.getFirstName(),
                newMerchant.getLastName(),
                newMerchant.getEmail(),
                newMerchant.getPassword());
        merchantRepository.insert(merchant);
        return merchant;
    }

    // Endpoint to update a specific merchant by id
    @PutMapping("/merchants/{merchantId}")
    public Optional<Merchant> updateMerchant(@RequestBody Merchant newMerchant, @PathVariable String merchantId) {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if (optionalMerchant.isPresent()) {
            Merchant merchant = optionalMerchant.get();
            merchant.setFirstName(newMerchant.getFirstName());
            merchant.setLastName(newMerchant.getLastName());
            merchant.setEmail(newMerchant.getEmail());
            merchant.setPassword(newMerchant.getPassword());
            merchant.setAddress(newMerchant.getAddress());
            merchant.setPhoneNumber(newMerchant.getPhoneNumber());
            merchant.setBusiness(newMerchant.getBusiness());
            merchant.setBankAccount(newMerchant.getBankAccount());
            merchant.setPackageList(newMerchant.getPackageList());
            merchant.setItemList(newMerchant.getItemList());
            merchantRepository.save(merchant);
        }
        return optionalMerchant;
    }

    @DeleteMapping(value = "/merchants/{merchantId}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String deleteMerchant(@PathVariable String merchantId) {
        boolean result = merchantRepository.existsById(merchantId);
        merchantRepository.deleteById(merchantId);
        return "{ \"success\" : " + (result ? "true" : "false") + " }";
    }

    @GetMapping(value = "/merchants/{merchantId}/embed/{url}", produces = MediaType.TEXT_PLAIN_VALUE)
    public String getEmbedCode(@PathVariable String merchantId, @PathVariable String url) {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if (!optionalMerchant.isPresent()) {
            return null;
        }
        String embedString = String.format("<a href=\"%s\"><div style=\"border: 5px solid #9000FF;\n  display: inline-block;\n  padding: 5px 10px;\n  border-radius: 10px;\n  margin: 5px 10px;\n  background-color: #9000FF;\n  color: white;\n  cursor: pointer;\">\n  Subscribe Now\n</div>\n</a>", url);
        return embedString;
    }

    @GetMapping(value = "/merchants/{merchantId}/qrcode/{url}", produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] getQrCode(@PathVariable String merchantId, @PathVariable String url) throws IOException, WriterException {
        Optional<Merchant> optionalMerchant = merchantRepository.findById(merchantId);
        if (!optionalMerchant.isPresent()) {
            return null;
        }
        byte[] qrData = QRGeneratorService.getQRCodeImage(url);
        return qrData;
    }
}
