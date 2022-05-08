package com.feeder.data.controller;

import com.feeder.data.model.FeederData;
import com.feeder.data.service.FeederDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/feeder")
public class FeederDataController {

    @Autowired
    private FeederDataService feederDataService;

    @GetMapping(path = "/fetch")
    public List<FeederData> getFeederData() {
        return feederDataService.fetchDuckFeedingInfo();
    }

    @PostMapping(path="/save")
    public void saveFeederData(@RequestBody FeederData feederData) {
        feederDataService.saveFeederData(feederData);
    }
}
