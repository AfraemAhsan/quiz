import React, { useState } from "react";
import Swal from "sweetalert2";
// internal imports
import Div from "elements/Div";
import Option from "./Option";
import { cx, Eye } from "config/constants";

const Quiz = ({ item }) => {
  const [cardDisable, setCardDisable] = useState("");
  return (
    <Div className="card w-[400px] bg-base-100 relative">
      <button
        className="absolute right-2 top-5 text-xl z-50"
        onClick={() => {
          Swal.fire({
            title: "Correct answer!",
            text: item?.correctAnswer,
          });
        }}
      >
        <Eye />
      </button>
      <Div
        className={cx(
          "w-full mt-4 shadow-xl p-5 rounded-[5px] ",
          cardDisable === item?.id &&
            "cursor-not-allowed !bg-[#d14d4d75]  opacity-60"
        )}
      >
        <figure className="p-3 m-5 text-center font-extrabold text-xl">
          {item?.question}
        </figure>
        <Div className="card-body items-center text-center">
          <Div className="flex flex-col gap-4">
            <h3 className="text-left font-medium text-lg">
              Click below items for right answer:
            </h3>
            {item?.options?.map((option, i) => (
              <Option
                key={i}
                option={option}
                cursor={cardDisable}
                info={item}
                setCardDisable={setCardDisable}
              />
            ))}
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Quiz;
