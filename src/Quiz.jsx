import he from "he";
import React, { useState, useEffect } from "react";

export default function Quiz(props) {
  const quizElements = props.quiz.map((q, index) => {
    const decodedString = he.decode(q.question);

    return (
      <div key={`${index}-${q.question}`}>
        <h1>{decodedString}</h1>
        <button onClick={(event) => props.handleClick(event)}>
          {q.correct_answer}
        </button>
        <button onClick={(event) => props.handleClick(event)}>
          {q.incorrect_answers[0]}
        </button>
        <button onClick={(event) => props.handleClick(event)}>
          {q.incorrect_answers[1]}
        </button>
        <button onClick={(event) => props.handleClick(event)}>
          {q.incorrect_answers[2]}
        </button>
        <hr />
      </div>
    );
  });

  return <>{quizElements}</>;
}
