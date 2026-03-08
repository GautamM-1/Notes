import React, { useState } from "react";
import Card from "./Card";

function WriteNotes() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notecard, setNoteCard] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  if (!title.trim() || !note.trim() ) {
    alert("PLease Fill Both Fields")
    return;
  } else {
     let copyData = [...notecard];
    copyData.push({ title, note });
    setNoteCard(copyData);

    setTitle("");
    setNote(""); 
  }
  };

   const Delete = (index) => {
   let copy = [...notecard]
   copy.splice(index,1)
   setNoteCard(copy)
  };


  return (
    <div className="h-screen w-full bg-gray-800 flex text-white">
      {/* Left Section */}
      <div className="h-full w-1/2 flex items-center justify-center">
        <div className=" p-10 rounded-2xl shadow-2xl w-150  bg-white/10 backdrop-blur-lg text-white">
          <h1 className="text-2xl font-bold text-center mb-6">
            Write Your Note
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Enter Note Title"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Write your note here..."
              rows="4"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
              }}
            ></textarea>

            <button
              type="submit"
              className="bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Add Note
            </button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="h-full w-1/2 border-l border-gray-900 border-2 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Your Notes
        </h1>

        {/* Note Card */}
       {notecard.map((e,idx)=>{return <Card key = {idx} data={e} id={idx} Delete={Delete}/>})}
      </div>
    </div>
  );
}

export default WriteNotes;
