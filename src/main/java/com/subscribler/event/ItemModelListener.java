package com.subscribler.event;

import com.subscribler.model.Item;
import com.subscribler.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

@Component
public class ItemModelListener extends AbstractMongoEventListener<Item> {

    private SequenceGeneratorService sequenceGenerator;

    @Autowired
    public ItemModelListener(SequenceGeneratorService sequenceGenerator) {
        this.sequenceGenerator = sequenceGenerator;
    }

    @Override
    public void onBeforeConvert(BeforeConvertEvent<Item> event) {
        event.getSource().setId(String.valueOf(sequenceGenerator.generateSequence(Item.SEQUENCE_NAME)));
    }


}
