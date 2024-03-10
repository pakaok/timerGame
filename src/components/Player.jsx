import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName]=useState("");
  let playerName = useRef();
  function handleUserName(playerName){
    setEnteredPlayerName(playerName.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName: "Unknown"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={()=>handleUserName(playerName)} >Set Name</button>
      </p>
    </section>
  );
}
