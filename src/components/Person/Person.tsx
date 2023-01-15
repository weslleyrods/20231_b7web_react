type Props = {
  data:{
    name: string,
    age: number
  }
}
const Person = ({data}: Props) =>{
  return(
    <li>
      {data.name} - {data.age} anos.
    </li>
  )
}

export default Person;