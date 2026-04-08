import { useState } from 'react'

import "./App.css";

function App() {
  const [userChoice,setUserChoice]=useState("");
  const [computerChoice,setcomputerChoice]=useState("");
  const [result,setResult]=useState("");
  const [score, setScore] = useState({ user: 0, computer: 0 });
  const choices=["rock","paper","scissor"];

  const getComputerChoice=()=>{
    const randomIndex=Math.floor(Math.random()*3);
    return choices[randomIndex];
  }
  const determineWinner=(user,computer)=>{
    if(user===computer){
      return "It's a Draw Brother 😒"
    }
    if((user=="rock" && computer=="scissor")||(user=="scissor" && computer=="paper")||(user=="paper" && computer=="rock")){
      setScore((prev) => ({ ...prev, user: prev.user + 1 }));
      return "Atta boy! kiddo!! You Win 🎉";
    }
    else {
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
      return "Congratulations The Computer Wins 🤖";
    }

  };
  const handleClick=(choice)=>{
    const compChoice=getComputerChoice();
    setUserChoice(choice);
    setcomputerChoice(compChoice);
    const resultText=determineWinner(choice,compChoice)
    setResult(resultText);

  };


  return (
    <div className='app'>
        <h1>Rock Paper Scissors ✊📄✂️</h1>
        <div className="buttons">
        <button onClick={() => handleClick("rock")}>✊ Rock</button>
        <button onClick={() => handleClick("paper")}>📄 Paper</button>
        <button onClick={() => handleClick("scissor")}>✂️ Scissors</button>
      </div>
      <div className="results">
        <p>Your Choice: {userChoice || "—"}</p>
        <p>Computer Choice: {computerChoice || "—"}</p>
        <h2>{result}</h2>
      </div>
      <div className="score">
        <h3>Score</h3>
        <p>You: {score.user}</p>
        <p>Computer: {score.computer}</p>
      </div>
    </div>
  )
}

export default App
