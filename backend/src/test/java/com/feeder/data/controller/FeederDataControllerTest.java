package com.feeder.data.controller;

import com.feeder.data.DataApplication;
import com.feeder.data.model.FeederData;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(classes = DataApplication.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class FeederDataControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @LocalServerPort
    private int port;

    @Test
    public void testFetch() {

        ResponseEntity<String> responseEntity = this.restTemplate
                .getForEntity("http://localhost:"+ port + "/feeder/fetch", String.class);
        assertEquals(200, responseEntity.getStatusCodeValue());
    }

    @Test
    public void testSave() {
        FeederData feederData = new FeederData();
        feederData.setFoodWeight(3.4);
        feederData.setNumberOfDucks(3);
        feederData.setPlace("pond");
        ResponseEntity<String> responseEntity = this.restTemplate
                .postForEntity("http://localhost:"+ port + "/feeder/save", feederData, String.class);
        assertEquals(200, responseEntity.getStatusCodeValue());
    }
}
