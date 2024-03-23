import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import ComplateImg from "../assets/quiz-complete.png";
import Questions from "./Questions";

const Time = 10000;
export default function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const activeQuestionIndex = selectedAnswer.length;

  const handelSelectAnswer = useCallback(
    (answer) => {
      setSelectedAnswer((preAnswer) => {
        return [...preAnswer, answer];
      });
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
        onSkip={handelSkipQuestion}
        onSelectAnswer={handelSelectAnswer}
        time={Time}
      />
    </div>
  );
}
