import React, { useEffect, useState } from "react";
import "./Quiz.css";

const Quiz = () => {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(true);
  const [time, setTime] = useState(25); // Initial time set to 5 for testing
  const [showData, setShowData] = useState(true);

  const questions = [
    {
      questionText: "Question1: Hansı yaddaş qurğusudur?",
      answerOptions: [
        { answer: "monitor", isCorrect: false },
        { answer: "CPU", isCorrect: false },
        { answer: "Keyboard", isCorrect: false },
        { answer: "CD", isCorrect: true },
      ],
    },
    {
      questionText: "Question2: Əməli yaddaşın tutumu nə ilə ölçülür?",
      answerOptions: [
        { answer: "baytla", isCorrect: true },
        { answer: "proqramla", isCorrect: false },
        { answer: "emrle", isCorrect: false },
        { answer: "faylla", isCorrect: false },
      ],
    },
    {
      questionText:
        "Question3:İnternetdə sırf faylların ötürülməsi üçün istifadə edilən protokol hansıdır? ",
      answerOptions: [
        { answer: "TCP//IP", isCorrect: false },
        { answer: "HTTP", isCorrect: false },
        { answer: "POP3", isCorrect: false },
        { answer: "FTP", isCorrect: true },
      ],
    },
    {
      questionText:
        "Question4:Çıxış informasiyası üçün olmayan qurğunu göstərin: ",
      answerOptions: [
        { answer: "Printer", isCorrect: false },
        { answer: "Proyektor", isCorrect: false },
        { answer: "Klaviatura", isCorrect: true },
        { answer: "Plotter", isCorrect: false },
      ],
    },
  ];

  const handleAnswer = (isCorrect) => {
    console.log(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
    setCount(count + 1);
    if (count >= questions.length - 1) {
      setShow(false);
    }
  };

  const showFunc = () => {
    setShowData(false);
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          // setShowData(true); // Show start button after time runs out
          setShow(false);
         
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  };

  const startAgain = () => {
    setCount(0);
    setScore(0);
   setShow(true);
     setTime(25); // Reset time to initial value (5 for testing)
  //   setShowData(false);
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          // setShowData(true); // Show start button after time runs out
          setShow(false); 
          return prevTime;  
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  };

  // };

  // useEffect(() => {
  //   if (!showData && time > 0) {
  //     const interval = setInterval(() => {
  //       setTime((prevTime) => {
  //         if (prevTime == 0) {
  //           clearInterval(interval);
  //           setShowData(true); // Show start button after time runs out
  //         alert("Vaxt bitdi");   // Alert when time runs out
  //           return prevTime;
  //         }
  //         return prevTime - 1;
  //       });
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }
  // }, [showData, time]);

  return (
    <>
      <h1>Welcome to the Quiz!</h1>
      {showData ? (
        <button onClick={showFunc} className="StartButton">
          Start
        </button>
      ) : (
        <>
          {show ? (
            <div className="container">
              <p>{questions[count].questionText}</p>
              {questions[count].answerOptions.map((item, index) => (
                <button key={index} onClick={() => handleAnswer(item.isCorrect)}>
                  {item.answer}
                </button>
              ))}
              <p>Time: {time}</p>
            </div>
          ) : (
            <div className="footer-content">
              <h1>
                Score: {questions.length} questions, {score} correct answers!
              </h1>
              <button onClick={startAgain} className="StartButton">
                Start again
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Quiz;
