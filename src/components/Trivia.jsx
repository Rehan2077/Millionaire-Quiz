import { useEffect, useState } from "react";

const Trivia = ({ data, setStop, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("option");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("option active");
    delay(2000, () =>
      setClassName(a.correct ? "option correct" : "option wrong")
    );
    delay(6000, () =>{
        if(a.correct){
            setQuestionNumber(prev=>prev+1);
            setSelectedAnswer(null)
        }
        else {
            setStop(true);
        }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="options">
        {question?.options.map((option) => {
          return (
            <div
              onClick={() => handleClick(option)}
              key={option.text}
              className={selectedAnswer === option ? className : "option"}
            >
              {option.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trivia;
