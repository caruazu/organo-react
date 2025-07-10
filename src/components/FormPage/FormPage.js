import './FormPage.css'
import InputText from '../InputText/InputText'
import InputSelect from '../InputSelect/InputSelect'
import InputButton from '../InputButton/InputButton'
import { useState } from 'react'

const FormPage = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        const campos = {
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        }
        props.aoEnvio(campos)
        
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='form-page'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText valor={nome} aoAlterado={valor => setNome(valor)} required label="Nome" placeholder="Digite seu nome"></InputText>
                <InputText valor={cargo} aoAlterado={valor => setCargo(valor)} required label="Cargo" placeholder="Digite seu cargo"></InputText>
                <InputText valor={imagem} aoAlterado={valor => setImagem(valor)} required label="Endereço da imagem" placeholder="Informe o endereço da imagem"></InputText>
                <InputSelect
                    label="Time"
                    required
                    times={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <InputButton>Enviar</InputButton>
            </form>
        </section>
    )
}

export default FormPage