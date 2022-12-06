import React from "react";
// internal imports
import Div from "elements/Div";

const Blog = () => {
  return (
    <Div className="p-5 m-2 flex flex-col ">
      <Div className="flex flex-col p-3">
        <h2 className="text-2xl font-semibold text-red">
          Question: What is the purpose of using React Router?
        </h2>
        <h3 className="text-2xl font-mediu">
          <b>Answer:</b> React Router is a standard library for routing in
          React. It enables the navigation among views of various components in
          a React Application, allows changing the browser URL, and keeps the UI
          in sync with the URL
        </h3>
      </Div>
      <Div className="flex flex-col p-3">
        <h2 className="text-2xl font-semibold text-red">
          Question: How does Context Api works?
        </h2>
        <h3 className="text-2xl font-mediu">
          <b>Answer:</b> The React Context API is a way for a React app to
          effectively produce global variables that can be passed around. This
          is the alternative to "prop drilling" or moving props from grandparent
          to child to parent, and so on. Context is also touted as an easier,
          lighter approach to state management using Redux.
        </h3>
      </Div>
      <Div className="flex flex-col p-3">
        <h2 className="text-2xl font-semibold text-red">
          Question: What is useRef in React?
        </h2>
        <h3 className="text-2xl font-mediu">
          <b>Answer:</b> The useRef Hook allows you to persist values between
          renders. It can be used to store a mutable value that does not cause a
          re-render when updated. It can be used to access a DOM element
          directly.
        </h3>
      </Div>
    </Div>
  );
};

export default Blog;
