import React, { useContext } from "react";
import toast from "react-hot-toast";
// imternal imports
import QuizContext from "context/Quizapp";
import { cx } from "config/constants";

const Option = ({ option, cursor, setCardDisable, info }) => {
  const { right, wrong, setRight, setWrong } = useContext(QuizContext);

  const handleClick = (e) => {
    const { name, value, id } = e.target;
    setCardDisable(id);

    if (name === value) {
      setRight((value) => value + 1);
      toast.success("Correct answer.");
      localStorage.setItem("rightAnswer", right + 1);
    } else if (name !== value) {
      setWrong((value) => value + 1);
      toast.error("Wrong answer!");
      localStorage.setItem("worongAnswer", wrong + 1);
    }
  };
  return (
    <button
      disabled={cursor}
      className={cx(
        "w-full h-fit p-3 rounded-[10px] shadow-xl bg-[#eeeef1]",
        cursor && "cursor-not-allowed opacity-60"
      )}
      value={info?.correctAnswer}
      id={info?.id}
      name={option}
      onClick={(e) => handleClick(e)}
    >
      {option}
    </button>
  );
};

export default Option;
