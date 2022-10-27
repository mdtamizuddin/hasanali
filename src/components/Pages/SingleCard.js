import React, { useEffect, useState } from "react";
import {useLoaderData } from "react-router-dom";

const SingleCard = () => {
  const data = useLoaderData();
  const [mode, setMode] = useState('')
  useEffect(() => {
    setMode(localStorage.getItem("mode"))
  }, []);
  return (
    <div>
      <section className={`${mode ==="light" ? " text-black" : "text-gray-100"} mt-5 min-h-[80vh]`}>
        <div className="container flex flex-col mx-auto lg:flex-row">

        <img className="w-96 h-96 sm:mx-auto shadow-lg p-3" src={data.picture} alt="details" />

          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <h2 className="text-3xl font-semibold leading-none">
              {data.title}
            </h2>
            <div className="flex justify-between mt-5">
                <p className="py-2 text-red-600">Category: {data.name}</p>
                <h1 className="text-xl text-red-600 font-semibold">Price: {data.balance}</h1>
            </div>
            <p className="mt-4 mb-8 ">
              {data.about}
            </p>
            <a className="self-start px-5 py-3 text-lg font-medium rounded-2x bg-blue-300" href={data.pdfURL}>Download PDF</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleCard;
