import Header from "./components/Header";
import Photo from "./components/Photo";

const App = () => {
  return (
    <div>
      <Header title="Cabeçalho com props!" />
      Olá, mundo!
      <Photo>
        <img src="https://www.google.com.br/google.jpg" alt="" />
      </Photo>
    </div>
  );
};

export default App;
