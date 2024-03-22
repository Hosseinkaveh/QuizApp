import { useEffect, useState } from "react";

export default function ProgressBar({ time, onTimeOut }) {
  const [timeRemaining, setTimeRemaining] = useState(time);

  useEffect(() => {
    const timeOut = setTimeout(onTimeOut, time);
    return () => {
      clearTimeout(timeOut);
    };
  }, [time, onTimeOut]);

  useEffect(() => {
    const timeinterval = setInterval(() => {
      setTimeRemaining((pre) => pre - 10);
    }, 10);
    return () => {
      clearInterval(timeinterval);
    };
  }, []);

  return <progress id="question-time" value={timeRemaining} max={time} />;
}
