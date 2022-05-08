package com.feeder.data.repository;

import com.feeder.data.model.FeederData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeederDataRepository extends JpaRepository<FeederData, Long> {
}
