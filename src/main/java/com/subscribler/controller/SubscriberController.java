package com.subscribler.controller;

import com.subscribler.model.Account;
import com.subscribler.model.Subscriber;
import com.subscribler.repository.SubscriberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class SubscriberController {
    @Autowired
    SubscriberRepository subscriberRepository;

    @GetMapping("/subscribers")
    public List<Subscriber> getSubscribers() {
        return subscriberRepository.findAll();
    }

    @GetMapping("/subscribers/{subscriberId}")
    public Optional<Subscriber> getSubscriber(@PathVariable String subscriberId) {
        return subscriberRepository.findById(subscriberId);
    }

    @PostMapping("/subscribers")
    public Subscriber addSubscriber(@RequestBody Subscriber newSubscriber) {
        Account account = new Account(
                newSubscriber.getAccount().getFirstName(),
                newSubscriber.getAccount().getLastName(),
                newSubscriber.getAccount().getEmail(),
                newSubscriber.getAccount().getPassword());

        Subscriber subscriber = new Subscriber(account);
        subscriberRepository.insert(subscriber);
        return subscriber;
    }

    @PutMapping("/subscribers/{subscriberId}")
    public Optional<Subscriber> updateSubscriber(@RequestBody Subscriber newSubscriber, @PathVariable String subscriberId) {
        Optional<Subscriber> optionalSubscriber = subscriberRepository.findById(subscriberId);
        if (optionalSubscriber.isPresent()) {
            Subscriber subscriber = optionalSubscriber.get();
            Account.updateAccount(subscriber.getAccount(), newSubscriber.getAccount());
            subscriber.setSubscriptionList(newSubscriber.getSubscriptionList());
            subscriberRepository.save(subscriber);
        }
        return optionalSubscriber;
    }

    @DeleteMapping(value = "/subscribers/{subscriberId}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String deleteSubscriber(@PathVariable String subscriberId) {
        boolean result = subscriberRepository.existsById(subscriberId);
        subscriberRepository.deleteById(subscriberId);
        return "{ \"success\" : " + (result ? "true" : "false") + " }";
    }

}
