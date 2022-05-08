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
//        List<FeederData> feederDataList = new ArrayList<>();
//        FeederData feederData1 = new FeederData();
//        feederData1.setNumberOfDucks(2);
//        feederData1.setFeedTime(LocalDateTime.now());
//        feederData1.setFood("Grains");
//        feederData1.setFoodType("Duck Food");
//        feederData1.setFoodWeight(2);
//        feederData1.setPlace("Pond");
//        feederDataList.add(feederData1);
//        FeederData feederData2 = new FeederData();
//        feederData2.setNumberOfDucks(5);
//        feederData2.setFeedTime(LocalDateTime.now());
//        feederData2.setFood("Grains");
//        feederData2.setFoodType("Duck Food");
//        feederData2.setFoodWeight(2.5);
//        feederData2.setPlace("Pond");
//        feederDataList.add(feederData2);
//        return feederDataList;
        return feederDataRepository.findAll();
    }
}
