import Person from "./components/Person"

const App = ()=>{

  const list =[
  {
      name: 'weslley',
      age: 28
    },
    {
      name: 'pedro',
      age: 26
    },
    {
      name: 'larissa',
      age: 22
    }
  ];

  return ( 
    <div>     
      <h2>Lista de presença</h2>
      <ul>
        {/* arrow function com () p/ redenrizar elemento na dom */}
        {list.map((item, index)=>(
					<Person key={index} data={item}/>
        ))}
      </ul> 
    </div>
    );
}

export default App;