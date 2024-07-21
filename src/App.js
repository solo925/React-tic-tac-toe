import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function handleclick() {
    setCount(count + 1)
    
  }
  return (
    <div className="App">
      <h1>Just Playing Around</h1>
      <MyButton count={ count} onClick = {handleclick} />
      <Another count={ count} onClick = {handleclick}></Another>
    </div>
  );
}

function MyButton({count,onClick}) { 
  
  return (
    <div>
      <button onClick={onClick}> clicked { count} times</button>
    </div>
    
  );
}

function Another({count,onClick}) {
  return (
    <>
      <button onClick={onClick}> clicked { count} times</button>
    </>
  );
}


export default App;