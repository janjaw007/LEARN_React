import React, { useState } from "react";

export default function App() {
  const [numQuest, setNumQuest] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [score, setScore] = useState(0);

  function handleQuestion(isCorrect) {
    // if (numQuest > 2) return setIsFinish(true);

    // setNumQuest(numQuest + 1);
    // setScore(score + 1);
    // console.log(score);

    if (isCorrect) setScore(score + 1);
    const nextQuestion = numQuest + 1;
    if (nextQuestion < questions.length) {
      setNumQuest(nextQuestion);
    } else {
      setIsFinish(true);
    }
  }

  function handleReset() {
    setIsFinish(false);
    setNumQuest(0);
    setScore(0);
  }

  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {isFinish ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={handleReset}>RESET</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {numQuest + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[numQuest].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[numQuest].answerOptions.map((obj, i) => (
              <Button obj={obj} onQuestion={handleQuestion} key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Button({ obj, onQuestion }) {
  return (
    <button onClick={() => onQuestion(obj.isCorrect)}>{obj.answerText}</button>
  );
}
