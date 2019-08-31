package com.subscribler.event;


import com.subscribler.model.Merchant;
import com.subscribler.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;


@Component
public class MerchantModelListener extends AbstractMongoEventListener<Merchant> {

    private SequenceGeneratorService sequenceGenerator;

    @Autowired
    public MerchantModelListener(SequenceGeneratorService sequenceGenerator) {
        this.sequenceGenerator = sequenceGenerator;
    }

    @Override
    public void onBeforeConvert(BeforeConvertEvent<Merchant> event) {
        if (event.getSource().getId() == null) {
            event.getSource().setId(String.valueOf(sequenceGenerator.generateSequence(Merchant.SEQUENCE_NAME)));
        }
    }
}
