import { useState } from 'react';
import Banner from './components/Banner/Banner';
import FormPage from './components/FormPage/FormPage';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoAvaliar = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <FormPage aoEnvio={colaborador => aoAvaliar(colaborador)} />
    </div>
  );
}

export default App;
