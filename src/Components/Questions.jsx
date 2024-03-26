import Answer from "./Answer";
import ProgressBar from "./ProgressBar";
import QUESTIONS from "../questions.js";
import { useState } from "react";

export default function Questions({
  onSelectAnswer,
  activeIdex,
  onSkip,
  time,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  const handelSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[activeIdex].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };
  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answerd";
  }
  return (
    <div id="question">
      <ProgressBar
        onTimeOut={answer.selectedAnswer === "" ? onSkip : null}
        time={time}
      />
      <h2>{QUESTIONS[activeIdex].text}</h2>
      <Answer
        Questions={QUESTIONS}
        activeQuestionIndex={activeIdex}
        selectAnswer={answer.selectedAnswer}
        onSelectAnswer={handelSelectAnswer}
        answerState={answerState}
      />
    </div>
  );
}
