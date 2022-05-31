package com.devsuperior.moview.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.moview.entities.Score;

public interface ScoreRepository extends JpaRepository<Score, Long> {
	
}
