import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import ComplateImg from "../assets/quiz-complete.png";
import Questions from "./Questions";

const Time = 10000;
export default function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const activeQuestionIndex =
    answerState === "" ? selectedAnswer.length : selectedAnswer.length - 1;

  const handelSelectAnswer = useCallback(
    (answer) => {
      setAnswerState("answerd");
      setSelectedAnswer((preAnswer) => {
        return [...preAnswer, answer];
      });
      setTimeout(() => {
        if (QUESTIONS[activeQuestionIndex].answers[0] === answer) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handelSkipQuestion = useCallback(function () {
    handelSelectAnswer(null);
  }, []);
  const QuestionsIsCompleat = QUESTIONS.length === activeQuestionIndex;
  if (QuestionsIsCompleat) {
    return (
      <div id="summary">
        <img src={ComplateImg} alt="Trophy icon" />
        <h2>Quiz Compleated!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Questions
      key={activeQuestionIndex}
        activeIdex={activeQuestionIndex}
        onSkip={handelSelectAnswer}
        time={Time}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answer={QUESTIONS}
        selectAnswer={selectedAnswer[activeQuestionIndex]}
        onSelectAnswer={handelSelectAnswer}
        answerState={answerState}
      />
    </div>
  );
}
