import './FormPage.css'
import InputText from '../InputText/InputText'
import InputSelect from '../InputSelect/InputSelect'
import InputButton from '../InputButton/InputButton'
import { useState } from 'react'

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

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log("salvo! ", nome, cargo, imagem, time)
    }

    return (
        <section className='form-page'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText valor={nome} aoAlterado={valor => setNome(valor)} required label="Nome" placeholder="Digite seu nome"></InputText>
                <InputText valor={cargo} aoAlterado={valor => setCargo(valor)} required label="Cargo" placeholder="Digite seu cargo"></InputText>
                <InputText valor={imagem} aoAlterado={valor => setImagem(valor)} required label="Imagem" placeholder="Informe o endereço da imagem"></InputText>
                <InputSelect
                    label="Time"
                    required
                    times={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <InputButton>Enviar</InputButton>
            </form>
        </section>
    )
}

export default FormPage