package com.feeder.data.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "FEEDER_DATA")
public class FeederData {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private LocalDateTime feedTime;

    private String food;

    private String place;

    private int numberOfDucks;

    private String foodType;

    private double foodWeight;
}
