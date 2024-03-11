import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
export const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const modal = useRef();
  const result = remainingTime <= 0;
  const timeFormatted = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="result-modal" ref={modal}>
      {result && <h2>You Lost</h2>}
      {!result && <h2>Your Score : {score}</h2>}
      <p>
        Target Time was <strong>{targetTime}seconds.</strong>
      </p>
      <p>
        You stopped timer with <strong>{timeFormatted} seconds left.</strong>
      </p>
      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  ,document.getElementById("modal"));
});
