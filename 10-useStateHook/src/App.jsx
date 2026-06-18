import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(20); //num - read only: use for read or shows valuse of that variable on the website       //setNum - write only: use to write or rewrite value of that variable
  const [name, setName] = useState("Hardik"); //string
  const [user, setUser] = useState([10, 20, 30]);
  const [value, setValue] = useState(0);
  const [person, setPerson] = useState({user: "Hardik", age: 20});
  const [a, setA] = useState([10, 20, 30]);




  return (
    <div>
      {/* <h1>Value of num is {num}</h1>
      <h2>Name of the user is {name}</h2>
      <h3>Age of the use is {user}</h3>
      <button onClick={() => {
        setNum(30);
        setName('Karan');
        setUser((prevUser) => 
          prevUser.map((elem) => elem*2)
        )
      }}>Click</button> */}

      {/* counter */}

      {/* <h1>{value}</h1>
      <button onClick={() => {
        setValue(value => value + 1)
      }}>Increased</button>
      <button
        onClick={() => {
          setValue(value => value-1);
        }}
      >
        Decreased
      </button> */}


      
      {/* destructuring of array or obj */}

      <h1>{person.user}</h1>
      <h2>{person.age}</h2>
      <button onClick={() => {
        const newPerson = {...person};
        newPerson.user = 'Karan'
        newPerson.age = 25
        setPerson(newPerson);
      }}>Change value of person</button>


      <h1>{a[0]}</h1>
      <h1>{a[1]}</h1>
      <h1>{a[2]}</h1>
      <button onClick={() => {
        const b = [...a]; //destructuring operator/spread operator 
        b[0] = 70;
        b[1] = 90;
        b[2] = 150
        setA(b);
      }}>Change value of a</button>

    </div>
  );
};

export default App;
