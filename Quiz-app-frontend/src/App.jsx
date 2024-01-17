import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import QuestionsLayout from "./components/Questions/QuestionsLayout";
import ShowQuestions from "./components/Questions/ShowQuestions";
import ShowQuestionsByCategory from "./components/Questions/ShowQuestionsByCategory";
import AddQuestions from "./components/Questions/AddQuestions";
import QuizLayout from "./components/Quiz/QuizLayout";
import ShowQuiz from "./components/Quiz/ShowQuiz";
import CreateQuiz from "./components/Quiz/CreateQuiz";
import Quiz from "./components/Quiz/Quiz";


function App() {
  return (
    <div className="pages">
      <BrowserRouter>
        <Routes className="components">
          <Route element={<Layout />} path="/">
            <Route element={<QuestionsLayout />} path="questions">
              <Route element={<ShowQuestions />}  index />
              <Route
                element={<ShowQuestionsByCategory/>}
                path="showQuestionsByCategory/:category"
              />
              {/* <Route element={<UpdateQuestions />} path="update" /> */}
              <Route element={<AddQuestions />} path="add" />
            
            </Route>
            <Route element={<QuizLayout/>} path='quiz'>
              <Route element={<ShowQuiz/>} index/>
              <Route element={<Quiz/>} path=":id"/>
                
              
              <Route element={<CreateQuiz/>} path="create"/>
              </Route> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
