import React from "react";
import { useLoaderData } from "react-router-dom";
// internal imports
import Div from "elements/Div";
import Card from "./components/Card";
import SubHeader from "./components/SubHeader";

const Main = () => {
  const { data } = useLoaderData();
  return (
    <Div className="flex flex-col">
      <SubHeader />
      <Div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
        {data?.data?.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </Div>
    </Div>
  );
};

export default Main;
