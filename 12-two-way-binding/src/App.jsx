import React, { useState } from 'react'

const App = () => {

  //two-way-binding means handle form through react instead of directly handling ex:

const [title, setTitle] = useState(' ');

  const submitHandler = (e) => {
    e.preventDefault() //prevent re-loding of site
    console.log('Form submitted', title);
    setTitle(' ');
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter Your Name' value = {title}
        onChange={(elem) => {
          setTitle(elem.target.value);
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App