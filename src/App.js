import Topo from './Componentes/Topo/'
import Banner from './Componentes/Banner/'
import ExperienciaDeTrabalho from './Componentes/ExperienciaDeTrabalho/'
import Footer from './Componentes/Footer/'

import {useState} from 'react'


import './App.css';

function App() {

  const [corPadrao, setCorPadrao] = useState(false);

  const alterarCor = () => {

    setCorPadrao(!corPadrao);

  }

  return (
    <main>
      <Topo alterarCor={alterarCor} corPadrao={corPadrao}/>
      <Banner corPadrao={corPadrao}/>
      <ExperienciaDeTrabalho corPadrao={corPadrao}/>
      <Footer corPadrao={corPadrao}/>
    </main>
  );
}

export default App;
