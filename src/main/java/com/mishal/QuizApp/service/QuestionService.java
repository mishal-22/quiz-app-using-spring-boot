package com.mishal.QuizApp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.mishal.QuizApp.Dao.QuestionDao;
import com.mishal.QuizApp.model.Question;

@Service
public class QuestionService {

	@Autowired
	QuestionDao questionDao;

	public ResponseEntity<List<Question>> getAllQuestions() {
		try {

			return new ResponseEntity<>(questionDao.findAll(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<List<Question>> getQuestionsByCategory(String category) {
		try {
			return new ResponseEntity<List<Question>>(questionDao.findByCategory(category), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<List<Question>>(new ArrayList<>(), HttpStatus.BAD_GATEWAY);

	}

	public ResponseEntity<String> addQuestion(Question question) {
		questionDao.save(question);
		return new ResponseEntity<>("Success", HttpStatus.CREATED);
	}

	public ResponseEntity<String> deleteQuestion(Integer id) {
		questionDao.deleteById(id);
		return new ResponseEntity<String>("deleted successfully", HttpStatus.ACCEPTED);
	}

	public ResponseEntity<String> updateQuestion(Question question) {
		Integer id = question.getId();
		if (questionDao.existsById(id)) {
			questionDao.save(question);
			return new ResponseEntity<String>("Successfully updated", HttpStatus.ACCEPTED);
		} else {

			return new ResponseEntity<String>("No Such Element", HttpStatus.NOT_FOUND);
		}
	}

}
