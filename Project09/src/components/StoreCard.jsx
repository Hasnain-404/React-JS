import React from "react";

const StoreCard = (props) => {
  return (
    <div className="border rounded-2xl p-4 shadow-lg max-w-sm bg-white">
      <img src={props.image} className="w-full h-40 object-cover rounded-xl" />
      <h2 className="text-xl font-bold mt-2">{props.title}</h2>
      <p className="text-gray-600 mt-1">{props.description}</p>
      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Visit Store
      </button>
    </div>
  );
};

export default StoreCard;