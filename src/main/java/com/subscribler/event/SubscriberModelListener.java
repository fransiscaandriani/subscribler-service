package com.subscribler.event;

import com.subscribler.model.Subscriber;
import com.subscribler.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

@Component
public class SubscriberModelListener extends AbstractMongoEventListener<Subscriber> {

    private SequenceGeneratorService sequenceGenerator;

    @Autowired
    public SubscriberModelListener(SequenceGeneratorService sequenceGenerator) {
        this.sequenceGenerator = sequenceGenerator;
    }

    @Override
    public void onBeforeConvert(BeforeConvertEvent<Subscriber> event) {
        event.getSource().setId(String.valueOf(sequenceGenerator.generateSequence(Subscriber.SEQUENCE_NAME)));
    }


}
