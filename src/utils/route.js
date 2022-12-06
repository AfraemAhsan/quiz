import axios from "axios";
// internal imports
import Layout from "components/Layout";
import Error from "components/Error";
import Main from "views/Main";
import Blog from "views/Blog";
import Quizs from "views/Quiz";
import Statistics from "views/Statistics";

const api = "https://openapi.programming-hero.com/api";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: async () => await axios.get(`${api}/quiz`),
        element: <Main />,
      },
      {
        path: "/quiz/:id",
        loader: async ({ params }) =>
          await axios.get(`${api}/quiz/${params.id}`),
        element: <Quizs />,
      },
      {
        path: "/statistics",
        loader: async () => await axios.get(`${api}/quiz`),
        element: <Statistics />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
];
