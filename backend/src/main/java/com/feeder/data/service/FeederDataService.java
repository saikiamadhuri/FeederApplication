package com.feeder.data.service;

import com.feeder.data.model.FeederData;
import com.feeder.data.repository.FeederDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class FeederDataService {

    @Value("classpath:data/FeederData.json")
    Resource resourceFile;

    @Autowired
    private FeederDataRepository feederDataRepository;

    public void saveFeederData(FeederData feederData) {
        feederDataRepository.save(feederData);
    }

    public List<FeederData> fetchDuckFeedingInfo() {
        return feederDataRepository.findAll();
    }
}
