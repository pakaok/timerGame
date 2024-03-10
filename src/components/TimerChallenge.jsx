import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimeExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  let timer = useRef();
  function handleClick() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      setTimerStarted(false);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStart() {
    console.log(timer);
    clearTimeout(timer.current);
  }
  return (
    <>
    {timerExpired && <ResultModal result={"Lost"} targetTime={targetTime} />}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStart : handleClick}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
