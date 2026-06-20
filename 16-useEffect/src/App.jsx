import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  //useeffect is mainly used to run process side by side with the main process

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

 useEffect(function() {
  console.log('use effect is running');
 }, [num]) //mount num so useeffect only runs when click on num 

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onClick={() => {
       setNum(num+1)
      
      }}
       onDoubleClick={() => {
        setNum2(num2 + 100)
      }} >
       click
      </button>
    </div>
  )
}

export default App