package com.mishal.QuizApp.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonProperty("id")
	private int id;
  @JsonProperty("category")
  String category;
  @JsonProperty("difficulty_level")
  String difficultyLevel;
  @JsonProperty("option1")
  String option1;
  @JsonProperty("option2")
  String option2;
  @JsonProperty("option3")
  String option3;
  @JsonProperty("option4")
  String option4;
  @JsonProperty("question_title")
  String questionTitle;
  @JsonProperty("right_answer")
  String rightAnswer;
	
	
	
}
