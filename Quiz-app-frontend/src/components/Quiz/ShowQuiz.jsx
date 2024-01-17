import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ShowQuiz() {
    const[quiz,setQuiz]=useState([])
    function showQuiz(){
        fetch("http://localhost:8080/quiz/get",{
            method:"GET",
            headers:{"Content-Type":"application/json"}
        })
        .then(res=>res.json())
        .then(data=>{
            setQuiz(data)
        })
       
    }
    useEffect(()=>{
        showQuiz();
    },[])
    if(!quiz){
        <h1>Loading...</h1>
    }
    const quizElement=quiz.map((q)=>(
        <Link key={q.id} to={`${q.id}`} className="quiz-box-link">
      <div className="quiz-box">
        <h2 className="quiz-title">{q.title}</h2>
        <p className="quiz-info">Category: {q.category}</p>
        <p className="quiz-info">Total questions: {q.numQ}</p>
      </div>
    </Link>
    ))
  return (
    <div className="quiz-list">
     {quizElement}
    </div>
  )
}

export default ShowQuiz