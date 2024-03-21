import { useState } from "react";
import QUESTIONS from "../questions";
export default function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const activeQuestionIndex = selectedAnswer.length;

  const handelSelectAnswer =(answer)=>{
    setSelectedAnswer(preAnswer =>{
        return [...preAnswer,answer]
    })

  }
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => {
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
