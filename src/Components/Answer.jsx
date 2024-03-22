import { useRef } from "react";

export default function Answer({
  Questions,
  activeQuestionIndex,
  selectAnswer,
  onSelectAnswer,
  answerState,
}) {
  const ShuffledAnswers = useRef();
  if (!ShuffledAnswers.current) {
    ShuffledAnswers.current = [...Questions[activeQuestionIndex].answers];
    ShuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {ShuffledAnswers.current.map((answer) => {
        const isSelected = selectAnswer === answer;
        let cssClass = "";
        if (answerState === "answerd" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "wrong" || answerState === "correct") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelectAnswer(answer)} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
