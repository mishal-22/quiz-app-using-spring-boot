package com.mishal.QuizApp.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.mishal.QuizApp.Dao.QuestionDao;
import com.mishal.QuizApp.Dao.QuizDao;
import com.mishal.QuizApp.model.Question;
import com.mishal.QuizApp.model.QuestionWrapper;
import com.mishal.QuizApp.model.Quiz;
import com.mishal.QuizApp.model.Response;

@Service
public class QuizService {
	@Autowired
	QuizDao quizDao;
	@Autowired
	QuestionDao questionDao;

	public ResponseEntity<String> createQuiz(String category, int numQ, String title) {

		List<Question> questions = questionDao.findRandomQuestionsByCategory(category, numQ);

		Quiz quiz = new Quiz();
		quiz.setTitle(title);
		quiz.setQuestions(questions);
		quizDao.save(quiz);

		return new ResponseEntity<String>("success", HttpStatus.OK);
	}

	public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
		Optional<Quiz> quiz = quizDao.findById(id);
		List<Question> questionsfromDB=quiz.get().getQuestions();
		List<QuestionWrapper> questionForUser=new ArrayList<QuestionWrapper>();
		for(Question q:questionsfromDB) {
			QuestionWrapper questionWrapper=new QuestionWrapper(q.getId(), q.getQuestionTitle(), q.getOption1(), q.getOption2(), q.getOption3(), q.getOption4());
		     questionForUser.add(questionWrapper);
		}
		return new ResponseEntity<List<QuestionWrapper>>(questionForUser,HttpStatus.OK);
	}

	public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
		Quiz quiz=quizDao.findById(id).get();
		List<Question> questions=quiz.getQuestions();
		Set<String> correctAnswers=new HashSet<>();
		for(Question question:questions) {
			correctAnswers.add(question.getRightAnswer());
		}
		int right=0;
	
		for(Response response:responses) {
			if(correctAnswers.contains(response.getResponse())) {
				right++;
			}
		
		}
		return new ResponseEntity<Integer>(right,HttpStatus.OK);
				
	}
}
