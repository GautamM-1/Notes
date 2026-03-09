import { Trash2 } from "lucide-react";
import React from "react";

function Card({ data , id,Delete }) {
 
  return (
    <div className="bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow-md mb-4 relative overflow-hidden">
      <button className="absolute top-2 right-2 flex items-center justify-center bg-gray-200 rounded-full p-1 shadow-lg hover:bg-red-300 transition"
      onClick={()=>{Delete(id)}}
      >
        <Trash2 color="#7b1919" strokeWidth={1.5} size={16} />
      </button>
      <h2 className="font-semibold text-lg text-white">{data.title}</h2>
      <p className="text-white/80 mt-2 wrap-break-word">{data.note}</p>
    </div>
  );
}

export default Card;
