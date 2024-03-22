import Answer from "./Answer";
import ProgressBar from "./ProgressBar";

export default function Questions({answerState,onSelectAnswer,selectAnswer,activeIdex,onSkip,time,questionText,answer}){
    
    return(
        <div id="question">
        <ProgressBar
          onTimeOut={onSkip}
          time={time}
        />
        <h2>{questionText}</h2>
        <Answer
          Questions={answer}
          activeQuestionIndex={activeIdex}
          selectAnswer={selectAnswer}
          onSelectAnswer={onSelectAnswer}
          answerState={answerState}
        />
      </div>
    )
}