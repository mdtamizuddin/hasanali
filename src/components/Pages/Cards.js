import React from "react";
import { Link } from "react-router-dom";

const Cards = ({language}) => {
    
  return (
    <div className="w-full h-full">
      <div className="card bg-base-100 shadow-xl">
        <figure className="shadow">
          <img className="w-72 h-72 p-3 rounded-3xl" src={language.picture} alt="Shoes" />
        </figure>
        
        <div className="card-body">
            <div className="flex justify-between">
                <span className="text-lg font-medium italic">Course: {language.name}</span>
                <h1 className=" text-xl font-semibold text-orange-800">Price: {language.balance}</h1>
            </div>
          <h2 className="card-title">
            {language.title}
          </h2>
          <div className="card-actions justify-between items-center pt-3">
            <button className="btn btn-success"><Link to='/checkout'>Buy Now</Link></button>
            <Link to={`/language/${language.id}`} className="btn btn-info">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
