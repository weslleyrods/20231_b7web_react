import { useState} from 'react'

//estilização css padrão
// import './assets/Button.css'

//estilização com css modules 
import Button from './components/Button'

//estilização dom Styled componentes
import styled from 'styled-components'
import * as C from './AppStyles'


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
      <div >
        
        
        <div className='bg-black'>
          Teste Tailwind
        </div>

        <C.Container bg="green">
          <span>Texto do componente.</span>   
          <a href="" className='link'>Link qualquer</a>        
          <C.ButtonStyled bg="red">Clique grande</C.ButtonStyled>
          <C.ButtonStyled bg="green" small={true}>Clique menor</C.ButtonStyled>
        </C.Container>

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