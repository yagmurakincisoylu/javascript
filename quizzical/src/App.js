import React from "react";
import Opening from "./components/Opening";
import Question from "./components/Question";

function App() {
  const [showQuiz, setShowQuiz] = React.useState(false);
  const [quizData, setQuizData] = React.useState([]);

  function getQuizData() {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => setQuizData(data.results.map(result => (
        {
          question: result.question,
          correct_answer: result.correct_answer,
          options: [result.correct_answer, ...result.incorrect_answers].sort(() => Math.random() - 0.5)
        }
      ))))

      setShowQuiz(true);
  }

  return (
    <div className="container">
      <div className="top-blob"></div>
      <div className="bottom-blob"></div>

      {showQuiz && <Question quizData={quizData} getQuizData={getQuizData} />}
      {!showQuiz && <Opening getQuizData= {getQuizData} />}
      
    </div>
  );
}

export default App;