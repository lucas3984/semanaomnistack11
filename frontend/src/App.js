import React, {useState} from 'react';
import './global.css'
import Routes from './routes';

// JSX (JavaScript + XML)
function App() {
  return (
    <div>
      <Routes />
    </div>
  );

}

export default App;
/*
  //setCounter responsalveu por mudar o valor
  let [count, setCounter] = useState(0);
// Array [valor, funcaoDeAtualiacao]

  function Increment(){
    setCounter(count +1);
    console.log(count);
  }
  return (
    <div>
      <Header>
        Contador : {count} 
      </Header>
      <button onClick={Increment} > Incrementar </button>
    </div>
  );

*/