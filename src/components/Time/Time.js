import './Time.css'
import CardPage from '../CardPage/CardPage.js'

const Time = (props) => {

    const sectionCSS = {backgroundColor:props.corSecundaria}
    const h3CSS = {borderColor:props.corPrimaria}
    
    return (
        (props.colaboradores.length > 0) ? <section className='time' style={sectionCSS}>
            <h3 style={h3CSS}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
                    <CardPage
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        time={colaborador.cargo}
                        img={colaborador.imagem}
                        cor={props.corPrimaria}
                    />
                )}
            </div>
        </section>
        : ''
    )
}

export default Time