import React, { useEffect, useState } from "react";


function ShowQuestions() {
  const [questions, setQuestions] = useState([]);
  function fetchAllQuestions() {
    fetch("http://localhost:8080/question/allQuestions")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }
  useEffect(() => {
    fetchAllQuestions();
  }, []);
  function handleDelete(id) {
    fetch(`http://localhost:8080/question/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      fetchAllQuestions();
    });
  }
 
  var count=0
  return (
    <div className="all-questions-container">
      {questions.map((question) => (
        <div key={question.id} className="allQuestions">
          <p>
            <span>Question:{count+=1} </span>
          </p>
          <p>
            <span>Category: </span>
            {question.category}
          </p>
          <p>
            <span>Difficulty Level :</span> {question.difficulty_level}
          </p>
          <p className="question">
            <span>?</span> {question.question_title}
          </p>
          <p>
            <span>Option 1:</span> {question.option1}
          </p>
          <p>
            <span>Option 2:</span> {question.option2}
          </p>
          <p>
            <span>Option 3:</span> {question.option3}
          </p>
          <p>
            <span>Option 4:</span> {question.option4}
          </p>
          <p>
            <span>Right Answer:</span> {question.right_answer}
          </p>
          <div className="action-buttons">
            {/* <button onClick={() => handleUpdate(question.id)}>Update</button> */}
            <button onClick={() => handleDelete(question.id)}>Delete</button>
          </div>
        
        </div>
      ))}
    </div>
  );
}

export default ShowQuestions;
