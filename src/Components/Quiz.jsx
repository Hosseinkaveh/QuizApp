import { useState } from "react";
import QUESTIONS from "../questions";
import ComplateImg from '../assets/quiz-complete.png'
export default function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const activeQuestionIndex = selectedAnswer.length;

  const handelSelectAnswer =(answer)=>{
    setSelectedAnswer(preAnswer =>{
        return [...preAnswer,answer]
    })

}
    const QuestionsIsCompleat = QUESTIONS.length === activeQuestionIndex
    if(QuestionsIsCompleat){
        return(
            <div id="summary">
                <img src={ComplateImg} alt="Trophy icon" />
                <h2>Quiz Compleated!</h2>
            </div>
        )
    }
    const ShuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    ShuffledAnswers.sort(()=> Math.random()-0.5)
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {ShuffledAnswers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={()=>handelSelectAnswer(answer)}>{answer}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
