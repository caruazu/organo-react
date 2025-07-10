import './CardPage.css'

const CardPage = ({nome, img, time, cor}) => {
    return (
        <div className='card-page'>
            <div className='cabecalho' style={{backgroundColor:cor}}>
                <img src={img} alt='foto do colaborador'/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{time}</h5>
            </div>
        </div>
    )
}

export default CardPage