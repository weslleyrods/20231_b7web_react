import './styles.css'

type Props = {
  text: string;
  clickFn: (txt: string) => void;
  
}
const Button = ({text, clickFn}: Props) =>{

const handleClick = () =>{
  clickFn('Frase passada por parâmetro p/ o componente pai')
}

  return(
    <button className='button' onClick={handleClick}>Clique aqui {text}</button>
  )
}

export default Button;