import './FormPage.css'
import InputText from '../InputText/InputText'
import InputSelect from '../InputSelect/InputSelect'

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

    return (
        <section className='form-page'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText label="Nome" placeholder="Digite seu nome"></InputText>
                <InputText label="Cargo" placeholder="Digite seu cargo"></InputText>
                <InputText label="Imagem" placeholder="Informe o endereço da imagem"></InputText>
                <InputSelect label="Time" times={times}/>
            </form>
        </section>
    )
}

export default FormPage