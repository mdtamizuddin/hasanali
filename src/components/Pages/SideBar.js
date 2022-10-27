import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SideBar = () => {
  const languages = useLoaderData();

  return (
    <div className="flex flex-col gap-3 lg:mr-8">
      {languages.map((language, index) => (
        <Link
          to={`/language/${language.id}`}
          className="rounded-lg px-4 py-2 text-lg font-semibold hover:bg-neutral hover:text-slate-300 bg-[#2980b9] text-white"
          key={index}
        >
          {language.name}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
