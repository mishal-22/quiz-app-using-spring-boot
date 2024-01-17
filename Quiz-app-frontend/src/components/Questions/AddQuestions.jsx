import React, { useState } from 'react'

function AddQuestions() {
    const[formData,setFormData]=useState({
        category:"",
        difficulty_level:"",
        question_title:"",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        right_answer:""
    })
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData((preData)=>({
            ...preData,
            [name]:value,
        }));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/question/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res)=>res.text()).then(data=>{
        console.log("Question added successfully",data)
        alert("Question added successfully",);
        setFormData({
            category: "",
            difficulty_level: "",
            question_title: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            right_answer: "",
          });
    })
    }
  return (
    <div className='add-form'>
        <form onSubmit={handleSubmit}>
        <label>
        <span>  Category:</span>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder='java/python'
            required
          />
        </label>
        <label>
        <span>   Difficulty:</span>
          <input
            type="text"
            name="difficulty_level"
            value={formData.difficulty_level}
            onChange={handleChange}
            placeholder='Easy/Medium/Difficult'
            required
          />
        </label>
        <label>
        <span>   Question:</span>
          <input
            type="text"
            name="question_title"
            value={formData.question_title}
            onChange={handleChange}
            placeholder='Add the question'
            required
          />
        </label>
        <label>
        <span>  Option 1:</span>
          <input
            type="text"
            name="option1"
            value={formData.option1}
            onChange={handleChange}
            placeholder='Provide option 1'
            required
          />
        </label>
        <label>
        <span>  Option 2:</span>
          <input
            type="text"
            name="option2"
            value={formData.option2}
            onChange={handleChange}
            placeholder='Provide option 2'
            required
          />
        </label>
        <label>
        <span>   Option 3:</span>
          <input
            type="text"
            name="option3"
            value={formData.option3}
            onChange={handleChange}
            placeholder='Provide option 3'
            required
          />
        </label>
        <label>
       <span> Option 4:</span>
          <input
            type="text"
            name="option4"
            value={formData.option4}
            onChange={handleChange}
            placeholder='Provide option 4'
            required
          />
        </label>
        <label>
        <span>   Answer:</span>
          <input
            type="text"
            name="right_answer"
            value={formData.right_answer}
            onChange={handleChange}
            placeholder='Give the answer'
            required
          />
        </label>
        <button type="submit">Add Question</button>
        </form>


    </div>
  )
}

export default AddQuestions