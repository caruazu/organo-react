import './Time.css'

const Time = (props) => {

    const sectionCSS = {backgroundColor:props.corSecundaria}
    const h3CSS = {borderColor:props.corPrimaria}
    
    return (
        <section className='time' style={sectionCSS}>
            <h3 style={h3CSS}>{props.nome}</h3>
        </section>
    )
}

export default Time