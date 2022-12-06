import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
// internal imports
import Div from "elements/Div";
import QuizContext from "context/Quizapp";
import Quiz from "./compotents/Quiz";

const Quizs = () => {
  const { data } = useLoaderData();
  const [quizInfo, setQuizInfo] = useState(data?.data);
  const [questions, setQuestion] = useState(data?.data?.questions);

  // context
  const { right, wrong } = useContext(QuizContext);

  return (
    <Div className="p-4 flex flex-col flex-wrap">
      <Div className="flex items-center justify-center relative">
        <h1 className="text-4xl text-center font-semibold text-primary">
          Welcome to quiz for{" "}
          <span className="font-extrabold text-[40px]">{quizInfo?.name} </span>
          questions
        </h1>
        <Div className="absolute left-0 top-12">
          <span className="font-bold text-red">Right answer:</span> {right} /
          {quizInfo?.total}
        </Div>
        <Div className="absolute right-0 top-12">
          <span className="font-bold text-red">Wrong answer:</span> {wrong} /
          {quizInfo?.total}
        </Div>
      </Div>
      <Div className="flex flex-col m-16 p-4 items-center relative">
        <Div className="">
          <span className="font-medium text-primary">
            Total quiz: {quizInfo?.total}
          </span>
        </Div>
        <Div className="overflow-y-auto max-h-[500px] w-[70%] flex items-center flex-col">
          {questions?.map((item, i) => (
            <Quiz item={item} key={i} />
          ))}
        </Div>
      </Div>
    </Div>
  );
};

export default Quizs;
