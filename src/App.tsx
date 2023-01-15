import { useState, ChangeEvent } from "react";
import Button from "./components/Button"

const App = ()=>{

  const [n, setN] = useState(0);
  const [name, setName] = useState("");

  const handleMinus = () =>{
    setN(n - 1)
  };
  const handleMore = () =>{
    setN(n + 2)
  };

  const handleName = (e: ChangeEvent<HTMLInputElement> ) =>{
    setName(e.target.value)
  }

  const eventButtonAction = (txt:string) =>{
    alert("Frase do App "+ txt)
  }

  return ( 
    <div>

      <Button text="Clique no botão"
      clickFn ={eventButtonAction}/>
      
      <br/>
      <button onClick={handleMinus}>-</button>
      <div>{n}</div>
      <button onClick={handleMore}>+</button>

      <hr/>
      
      <input type="text" placeholder="Digite seu nome" 
      value={name}
      onChange={handleName}
      />  
      <br/>
      O seu nome é: {name}
    </div>
    );
}

export default App;