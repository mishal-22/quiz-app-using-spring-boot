package com.mishal.QuizApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mishal.QuizApp.model.Question;
import com.mishal.QuizApp.model.QuestionWrapper;
import com.mishal.QuizApp.model.QuizInfo;
import com.mishal.QuizApp.model.Response;
import com.mishal.QuizApp.service.QuizService;

@RestController
@RequestMapping("quiz")
@CrossOrigin
public class QuizController {

	@Autowired
	QuizService quizService;

	@PostMapping("create")
	public ResponseEntity<String> createQuiz(@RequestParam String category, @RequestParam int numQ,
			@RequestParam String title) {
		return quizService.createQuiz(category, numQ, title);
	}

	@GetMapping("get/{id}")
	public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable Integer id) {
     return quizService.getQuizQuestions(id);
	}
	@PostMapping("submit/{id}")
	public ResponseEntity<Integer> submitQuiz(@PathVariable Integer id ,@RequestBody List<Response> responses){
		return quizService.calculateResult(id,responses);
	}
	@GetMapping("get")
	public ResponseEntity<List<QuizInfo>> fetchQuiz(){
		return quizService.fetchQuiz();
	}
	@DeleteMapping("delete/{id}")
	public ResponseEntity<String> deleteQuiz(@PathVariable Integer id){
		return quizService.deleteQuiz(id);
		
	}
	
}
