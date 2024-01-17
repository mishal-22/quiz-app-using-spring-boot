package com.mishal.QuizApp.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;

import com.mishal.QuizApp.model.Question;
import com.mishal.QuizApp.model.Quiz;
import com.mishal.QuizApp.model.QuizInfo;


public interface QuizDao extends JpaRepository<Quiz, Integer> {


	

}
