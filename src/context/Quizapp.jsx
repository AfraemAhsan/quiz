import React, { createContext, useState } from "react";

const QuizContext = createContext();

export function Quizapp({ children }) {
  const [singleQuiz, setSingQuiz] = useState();
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  return (
    <QuizContext.Provider
      value={{
        singleQuiz,
        setSingQuiz,
        right,
        setRight,
        wrong,
        setWrong,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export default QuizContext;
