import React, { useContext } from "react";
import { Link } from "react-router-dom";
// internal imports
import Div from "elements/Div";
import QuizContext from "context/Quizapp";

const Card = ({ item }) => {
  const { id, name, logo, total } = item;
  // context
  const { setSingQuiz } = useContext(QuizContext);

  return (
    <Div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <img
        className="object-cover w-full h-48 bg-gray-400"
        src={logo}
        alt={name}
      />
      <Div className="p-4">
        <h4 className="flex items-center">
          <span className="font-bold ">Name:</span>{" "}
          <span className="p-2 text-xl font-semibold tracking-tight text-primary">
            {name}
          </span>
        </h4>
        <h4 className="flex items-center">
          <span className="font-bold ">Total quizes:</span>
          <span className="p-2 text-xl font-semibold tracking-tight text-primary">
            {total}
          </span>
        </h4>
        <Link
          to={`/quiz/${id}`}
          className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
          onClick={() => setSingQuiz(item)}
        >
          Start quiz
        </Link>
      </Div>
    </Div>
  );
};

export default Card;
