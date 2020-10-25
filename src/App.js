import './App.css';
import React, {useState} from 'react';
import Person from './Person/Person'

function App() {
  const [person, setPerson] = useState(
    [
      {name:'ankit', age:28},
      {name:'kejriwal', age: 29},
      {name:'ABD', age: 25 }
    ]
  )
  
  const switchHandler = () => {
    
    setPerson([
      {name:'new_ankit', age:22},
      {name:'new_kejriwal', age: 23},
      {name:'new_ABD', age: 21 }
    ]);
  }
  return (
    <div className="App">
      <h1>I am a react app</h1>
      <button onClick={switchHandler}>Click me</button>
      <Person name={person[0].name} age={person[0].age} />
      <Person name={person[1].name} age={person[1].age} />
      <Person name={person[2].name} age={person[2].age} >Hobbies : Cricket</Person>
    </div>
  );
}

export default App;
