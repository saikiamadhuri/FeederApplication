package com.feeder.data.scheduler;

import com.feeder.data.model.FeederData;
import com.feeder.data.service.FeederDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class FeedingScheduler {

    @Autowired
    private FeederDataService feederDataService;

    @Scheduled(cron = "0 25 22 * * *")
    public void scheduleFeed() {
        FeederData feederData = new FeederData();
        feederData.setPlace("By the pond");
        feederData.setFeedTime(LocalDateTime.now());
        feederData.setFoodType("Duck food");
        feederData.setNumberOfDucks(5);
        feederData.setFoodWeight(3.5);
        feederDataService.saveFeederData(feederData);
    }
}
