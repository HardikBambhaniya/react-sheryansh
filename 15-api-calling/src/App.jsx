import React from 'react'
import axios from 'axios'
import { useState } from 'react'



const App = () => {

  const [data, setData] = useState([]);

  //api calling with the help of fetch and async await

  //  const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   const data = await response.json();
  //   console.log(data);
  // }



  //api calling with axios - handles error more easily, easy setup and use
  const getData = async () => {
    
    const response = await axios.get('https://picsum.photos/v2/list')
    
    setData(response.data) 
  }



  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((elem, idx) => {
          return <h1 key={idx}>hello, {elem.author} {idx}</h1>
        })}
      </div>
    </div>
  )
}

export default App