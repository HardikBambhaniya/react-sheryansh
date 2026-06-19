import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const handleDelete = (idx) => {  //idx received from the handledelete
    const copyTask = [...task]
    copyTask.splice(idx, 1) //splice used to cut array index from particular point //idx used to track particular card which user clicked
    setTask(copyTask);
    
  }


  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const copyTask = [...task]; //spread operator used to create new empty array from old one
          copyTask.push({ heading, details }); //push data in new empty array
          setTask(copyTask); 
          

          setHeading("");
          setDetails("");
        }}
        className="flex flex-col gap-4  p-10 items-start"
      >
        <input
          onChange={(e) => {
            setHeading(e.target.value);
          }}
          type="text"
          placeholder="Enter Notes Heading"
          value={heading}
          className="w-1/2 px-5 py-2 border-2 rounded"
        />
        <input
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          type="text"
          placeholder="Writes Details"
          value={details}
          className="w-1/2 px-5 py-2 border-2 rounded"
        />
        <button className="w-1/2 bg-white text-black">Add Notes</button>
      </form>

      <div className="lg:w-1/2 p-10">
        <h1 className="text-3xl ">Your Notes</h1>
        <div className="h-52 flex-wrap gap-5 mt-5 overflow-scroll">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="h-50 w-48 rounded-2xl bg-white text-black"
              >
                <h3>{elem.heading}</h3>
                <p>{elem.details}</p>
                <button onClick={() => {
                  handleDelete(idx)
                }}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
