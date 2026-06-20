import React from 'react'

const App = () => {
  
  localStorage.setItem('user', 'Hardik'); //use to set item in localstorage
  const user = localStorage.getItem('user') //use to get item
  localStorage.removeItem('user') //use to remove item
 // localStorage.clear(); //clear all items from localstorage
  

  const person = {
    username: 'Hardik',
    age: 20,
    city: 'surat'
  }

  

  localStorage.setItem('user', JSON.stringify(person)); //JSON.stringyfy use to convert object to string
  const a = JSON.parse(localStorage.getItem('user')) // JSON.parse use to covert string into object
  console.log(a)


  return (
    <div>App</div>
  )
}

export default App