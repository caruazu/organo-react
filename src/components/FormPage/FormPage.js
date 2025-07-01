import './FormPage.css'
import InputText from '../InputText/InputText'
import InputSelect from '../InputSelect/InputSelect'
import InputButton from '../InputButton/InputButton'

const FormPage = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
    ]

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log("salvo")
    }

    return (
        <section className='form-page'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText required label="Nome" placeholder="Digite seu nome"></InputText>
                <InputText label="Cargo" placeholder="Digite seu cargo"></InputText>
                <InputText label="Imagem" placeholder="Informe o endereço da imagem"></InputText>
                <InputSelect label="Time" times={times}/>
                <InputButton>Enviar</InputButton>
            </form>
        </section>
    )
}

export default FormPage