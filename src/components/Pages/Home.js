import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";

const Home = () => {
  const languages = useLoaderData();
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {languages.map((language, index) => (
        <Cards key={index} language={language}>
          {language.name}
        </Cards>
      ))}
    </div>
  );
};

export default Home;
