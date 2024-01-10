package com.mishal.QuizApp.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mishal.QuizApp.model.Question;
import com.mishal.QuizApp.model.Quiz;

public interface QuizDao extends JpaRepository<Quiz, Integer> {

}
