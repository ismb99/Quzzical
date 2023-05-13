import he from "he";

export default function Quiz(props) {
  const quizElements = props.quiz.map((q, index) => {
    const decodedString = he.decode(q.question);
    console.log(decodedString);

    return (
      <div key={`${index}-${q.question}`}>
        <h1>{decodedString}</h1>
        <button>{q.correct_answer}</button>
        <button>{q.incorrect_answers[0]}</button>
        <button>{q.incorrect_answers[1]}</button>
        <button>{q.incorrect_answers[2]}</button>
        <hr />
      </div>
    );
  });
  console.log(quizElements);

  return <>{quizElements}</>;
}
