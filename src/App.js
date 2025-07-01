import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';


function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaborador);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time nome="Programação" />
      <Time nome="Front-End" />
      <Time nome="Data Science" />
      <Time nome="Devops" />
      <Time nome="UX e Design" />
      <Time nome="Mobile" />
      <Time nome="Inovação e Gestão" />
      <Time nome="Outros" />

     
    </div>
  );
}

export default App;
