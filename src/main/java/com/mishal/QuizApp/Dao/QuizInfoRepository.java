package com.mishal.QuizApp.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mishal.QuizApp.model.QuizInfo;

public interface QuizInfoRepository extends JpaRepository<QuizInfo, Integer>{

}
