import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Questions from "./Questions";
import Summary from "./Summary";

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
     <Summary selectAnswer={selectedAnswer}/>
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
