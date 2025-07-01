import './InputButton.css'

const InputButton = (props) => {
    return (
        <button className='input-button'>{props.children}</button>
    )
}

export default InputButton
