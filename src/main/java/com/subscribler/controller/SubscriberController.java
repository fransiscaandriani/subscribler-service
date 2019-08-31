package com.subscribler.controller;

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
        Subscriber subscriber = new Subscriber(
                "Placeholder ID",
                newSubscriber.getFirstName(),
                newSubscriber.getLastName(),
                newSubscriber.getEmail(),
                newSubscriber.getPassword());
        subscriberRepository.insert(subscriber);
        return subscriber;
    }

    @PutMapping("/subscribers/{subscriberId}")
    public Optional<Subscriber> updateSubscriber(@RequestBody Subscriber newSubscriber, @PathVariable String subscriberId) {
        Optional<Subscriber> optionalSubscriber = subscriberRepository.findById(subscriberId);
        if (optionalSubscriber.isPresent()) {
            Subscriber subscriber = optionalSubscriber.get();
            subscriber.setFirstName(newSubscriber.getFirstName());
            subscriber.setLastName(newSubscriber.getLastName());
            subscriber.setEmail(newSubscriber.getEmail());
            subscriber.setPassword(newSubscriber.getPassword());
            subscriber.setAddress(newSubscriber.getAddress());
            subscriber.setPhoneNumber(newSubscriber.getPhoneNumber());
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
