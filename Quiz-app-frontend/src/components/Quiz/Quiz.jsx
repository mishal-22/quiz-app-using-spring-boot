import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const { id } = useParams();
  function showQuiz() {
    fetch(`http://localhost:8080/quiz/get/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
          setQuiz(data);
          console.log(data)
      });
  }
  useEffect(() => {
    showQuiz();
  }, []);
  if(!quiz){
    <h1>Loading...</h1>
}
  const quizElement=quiz.map((q) => (
    <div key={q.id} className="custom-quiz-box">
    <h1 className="custom-quiz-title">{q.questionTitle}</h1>
    <p className="custom-quiz-option">Option 1: {q.option1}</p>
    <p className="custom-quiz-option">Option 2: {q.option2}</p>
    <p className="custom-quiz-option">Option 3: {q.option3}</p>
    <p className="custom-quiz-option">Option 4: {q.option4}</p>
  </div>
  ))
  return (
    <div className="custom-quiz-container">
      {quizElement}
    </div>
  );
}

export default Quiz;
