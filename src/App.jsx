import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
import data from "../data";

export default function App() {
  const [quizData, setQuizData] = useState(data.results);

  return <div>{<Quiz quiz={quizData} />}</div>;
}
