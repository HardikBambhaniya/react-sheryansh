import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
 
 const [a, setA] = useState([])
 const [index, setIndex] = useState(1);

 
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    setA(response.data)
  }

  useEffect(() => {
    getData()
  }, [index])

  let printUserData = 'No User Available'

  if(a.length > 0){
    printUserData = a.map((elem, idx) => {
     return <div key={idx} className="h-full">
       <div>
        <img src={elem.download_url}  className="h-40 w-50 rounded-lg"/>
        <h3>{elem.author}</h3>
       </div>
     </div>
    })
  }

 

  return (
    <div className="bg-black p-4 text-white">
      {/* <button
        onClick={getData}
        className="bg-green-600 active:scale-95 mb-3 px-5 rounded text-white "
      >
        get data
      </button> */}
      <div className="flex flex-wrap gap-4">
        {printUserData}
      </div>
      <div className="w-full h-10 flex justify-center items-center mt-5 gap-2">
      <button style={{opacity: index == 1 ? 0.5 : 1, cursor: index == 1 ? "not-allowed" : "pointer"}} onClick={() => {
        
        setIndex(index - 1)
      }} className="cursor-pointer active:scale-95 py-3 px-8 bg-amber-500 rounded-lg text-black">Prev</button>
     
     <p className="p-4">page {index}</p>

      <button onClick={() => {
        setIndex(index + 1)
      }} className="cursor-pointer active:scale-95 py-3 px-8 bg-amber-500 rounded-lg text-black">Next</button>
      </div>
      
    </div>
  );
};

export default App;
