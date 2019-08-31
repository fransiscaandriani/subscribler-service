package com.subscribler.event;

import com.subscribler.model.SubscriptionPlan;
import com.subscribler.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;


@Component
public class SubscriptionPlanModelListener extends AbstractMongoEventListener<SubscriptionPlan> {

    private SequenceGeneratorService sequenceGenerator;

    @Autowired
    public SubscriptionPlanModelListener(SequenceGeneratorService sequenceGenerator) {
        this.sequenceGenerator = sequenceGenerator;
    }

    @Override
    public void onBeforeConvert(BeforeConvertEvent<SubscriptionPlan> event) {
        event.getSource().setId(String.valueOf(sequenceGenerator.generateSequence(SubscriptionPlan.SEQUENCE_NAME)));
    }


}

