import Banner from './components/Banner/Banner';
import InputText from './components/InputText/InputText';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <InputText label="Nome" placeholder="Digite seu nome"></InputText>
      <InputText label="Cargo" placeholder="Digite seu cargo"></InputText>
      <InputText label="Imagem" placeholder="Informe o endereço da imagem"></InputText>
    </div>
  );
}

export default App;
