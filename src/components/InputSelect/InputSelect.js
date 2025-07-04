import './InputSelect.css'

const InputSelect = (props) => {
    return (
        <div className='input-select'>
            <label>{props.label}</label>
            <select onChange={event => props.aoAlterado(event.target.value)} required={props.required} value={props.value}>
                {props.times.map(time => {
                    return <option key={time}>{time}</option>
                })}
            </select>
        </div>
    )
}

export default InputSelect