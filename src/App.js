import { useEffect, useMemo, useState } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";

const App = () => {
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$0");
  const [questionNumber, setQuestionNumber] = useState(1);

  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$100" },
      { id: 2, amount: "$200" },
      { id: 3, amount: "$300" },
      { id: 4, amount: "$500" },
      { id: 5, amount: "$1000" },
      { id: 6, amount: "$2000" },
      { id: 7, amount: "$4000" },
      { id: 8, amount: "$8000" },
      { id: 9, amount: "$16000" },
      { id: 10, amount: "$32000" },
      { id: 11, amount: "$64000" },
      { id: 12, amount: "$125000" },
      { id: 13, amount: "$250000" },
      { id: 14, amount: "$500000" },
      { id: 15, amount: "$1000000" },
    ].reverse(), []);

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: [
        { text: "Madrid", correct: false },
        { text: "Berlin", correct: false },
        { text: "Paris", correct: true },
        { text: "London", correct: false },
      ],
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      id: 3,
      question: "What is the largest mammal in the world?",
      options: [
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Lion", correct: false },
      ],
    },
    {
      id: 4,
      question:
        "Which gas do plants absorb from the atmosphere during photosynthesis?",
      options: [
        { text: "Oxygen", correct: false },
        { text: "Carbon dioxide", correct: true },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false },
      ],
    },
    {
      id: 5,
      question: "Who painted the Mona Lisa?",
      options: [
        { text: "Leonardo da Vinci ", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Vincent van Gogh", correct: false },
        { text: "Michelangelo", correct: false },
      ],
    },
    {
      id: 6,
      question: "Which of the following is the largest democracy in the world?",
      options: [
        { text: "India", correct: true },
        { text: "China", correct: false },
        { text: "United States", correct: false },
        { text: "Brazil", correct: false },
      ],
    },
    {
      id: 7,
      question: "What is the largest organ in the human body?",
      options: [
        { text: "Heart", correct: false },
        { text: "Brain", correct: false },
        { text: "Skin ", correct: true },
        { text: "Liver", correct: false },
      ],
    },
    {
      id: 8,
      question: "What is the chemical symbol for water?",
      options: [
        { text: "O2", correct: false },
        { text: "H2O ", correct: true },
        { text: "CO2", correct: false },
        { text: "NaCl", correct: false },
      ],
    },
    {
      id: 9,
      question: "Which continent is known as the 'Land Down Under'?",
      options: [
        { text: "Europe", correct: false },
        { text: "Africa", correct: false },
        { text: "Asia", correct: false },
        { text: "Australia", correct: true },
      ],
    },
    {
      id: 10,
      question: "What is the capital of Japan?",
      options: [
        { text: "Beijing", correct: false },
        { text: "Tokyo", correct: true },
        { text: "Seoul", correct: false },
        { text: "Bangkok", correct: false },
      ],
    },
    {
      id: 11,
      question: "What is the largest planet in our solar system?",
      options: [
        { text: "Earth", correct: false },
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false },
      ],
    },
    {
      id: 12,
      question: "Which famous scientist is known for his theory of gravity?",
      options: [
        { text: "Albert Einstein", correct: false },
        { text: "Isaac Newton", correct: true },
        { text: "Charles Darwin", correct: false },
        { text: "Galileo Galilei", correct: false },
      ],
    },
    {
      id: 13,
      question:
        "What is the process by which plants make their food using sunlight?",
      options: [
        { text: "Respiration", correct: false },
        { text: "Digestion", correct: false },
        { text: "Photosynthesis", correct: true },
        { text: "Fermentation", correct: false },
      ],
    },
    {
      id: 14,
      question: "Which of these animals is a marsupial?",
      options: [
        { text: "Kangaroo", correct: true },
        { text: "Zebra", correct: false },
        { text: "Elephant", correct: false },
        { text: "Cheetah", correct: false },
      ],
    },
    {
      id: 15,
      question: "Which gas is responsible for the green color in plants?",
      options: [
        { text: "Oxygen", correct: false },
        { text: "Carbon dioxide", correct: false },
        { text: "Chlorine", correct: false },
        { text: "Chlorophyll", correct: true },
      ],
    },
  ];

  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="endTask">You earned {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer"><Timer questionNumber={questionNumber} setStop={setStop} /></div>
            </div>
            <div className="bottom">
              <Trivia
                data={quizQuestions}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((item) => {
            return (
              <li
                key={item.id}
                className={
                  questionNumber === item.id
                    ? "active moneyListItem"
                    : "moneyListItem"
                }
              >
                <span className="moneyListItemNumber">{item.id}</span>
                <span className="moneyListItemAmount">{item.amount}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
