package com.subscribler.event;

import com.subscribler.model.Package;
import com.subscribler.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

@Component
public class PackageModelListener extends AbstractMongoEventListener<Package> {

    private SequenceGeneratorService sequenceGenerator;

    @Autowired
    public PackageModelListener(SequenceGeneratorService sequenceGenerator) {
        this.sequenceGenerator = sequenceGenerator;
    }

    @Override
    public void onBeforeConvert(BeforeConvertEvent<Package> event) {
        event.getSource().setId(String.valueOf(sequenceGenerator.generateSequence(Package.SEQUENCE_NAME)));
    }


}
