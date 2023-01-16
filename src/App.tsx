import { useState} from 'react'

// import './assets/Button.css'
import Button from './components/Button'

const App = () =>{

  const [color, setColor] = useState('grey')
  const [padding, setPadding] = useState(0)

  const handleClick = () =>{
    setColor('green');
    setPadding(20)
  }
  const eventButtonAction = (txt: string) =>{
    alert("Frase do App "+ txt )
  }
    return (
      <div>
        <button 
          onClick={handleClick}
          style={{backgroundColor: color, color: 'white', padding}}>
          Clique aqui
        </button>

        <Button text="no botão" clickFn={eventButtonAction}/>
      </div>
  );
}

export default App;