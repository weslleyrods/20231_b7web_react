import {useState} from 'react'

const App = ()=>{
  
  const [show, setShow] = useState(false);

  const handleClick = () =>{
    setShow(!show)
    
    //outra forma

    // if(show)
    //   setShow(false)
    // else
    //   setShow(true)
  }

  //toggle = quando executa uma ação faz X, quando executada novamente voltada ao estado anterior
    return ( 
    <div>
      <button onClick={handleClick}>{show ? 'Ocultar':'Mostrar'}</button>

      {/* exibição condicional */}
      {show && 
        <div>
          blabalbalbalabla
        </div>
      }
    </div>
  );
}

export default App;