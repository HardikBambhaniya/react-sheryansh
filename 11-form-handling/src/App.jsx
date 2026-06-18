import React from 'react'

const App = () => {


  const submitHandler = (e) => {
    e.preventDefault() //prevent re-loding of site
    console.log('Form submitted');
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App