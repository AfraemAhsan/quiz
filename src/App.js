import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// internal imports
import Main from "views/Main";
import { routes } from "utils/route";
import { Quizapp } from "context/Quizapp";

const route = createBrowserRouter(routes);

const App = () => {
  return (
    <Quizapp>
      <RouterProvider router={route}>
        <Main />
      </RouterProvider>
    </Quizapp>
  );
};

export default App;
