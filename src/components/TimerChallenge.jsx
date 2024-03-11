import { useState, useRef } from "react";
import { ResultModal } from "./ResultModal";
export default function TimerChallenge({ title, targetTime }) {
  //   const [timerExpired, setTimeExpired] = useState(false);
  //   const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const timer = useRef();
  const dialog = useRef();

  if(timeRemaining <= 0){
    clearInterval(timer.current)
    dialog.current.open()
  }
  function resetTimer(){
    setTimeRemaining(targetTime*1000)
  }
  function handleClick() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        return prevTime - 100;
      });
    }, 100);

  }
 
  function handleStart() {
    clearInterval(timer.current);
    dialog.current.open()
  }

  return (
    <>
      <ResultModal  targetTime={targetTime} ref={dialog} remainingTime={timeRemaining} onReset={resetTimer}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? handleStart : handleClick}>
            {timerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
