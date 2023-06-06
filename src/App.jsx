import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
import data from "../data";

export default function App() {
  const answers = data.results.map((answer) => {
    return answer.correct_answer;
  });

  const handleClick = (event) => {
    const value = event.target.textContent;
    let inputs = [...btnValue, value];

    setBtnValue(inputs);

    console.log("Iputs -> ", inputs);
  };

  const [quizData, setQuizData] = useState(data.results);
  const [btnValue, setBtnValue] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(answers);
  // const [wrongtAnswers, setWrongAnswers] = useState([]);

  // om btnValue == correctAnswer => 1 poäng
  //

  useEffect(() => {}, [btnValue]);
  // console.log("btnValue -> ", btnValue);

  // console.log("-> ", correctAnswers);

  return <>{<Quiz quiz={quizData} handleClick={handleClick} />}</>;
}
