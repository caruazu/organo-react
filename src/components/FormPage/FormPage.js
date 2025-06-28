import './FormPage.css'
import InputText from '../InputText/InputText'

const FormPage = () => {
    return (
        <section className='form-page'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText label="Nome" placeholder="Digite seu nome"></InputText>
                <InputText label="Cargo" placeholder="Digite seu cargo"></InputText>
                <InputText label="Imagem" placeholder="Informe o endereço da imagem"></InputText>
            </form>
        </section>
    )
}

export default FormPage