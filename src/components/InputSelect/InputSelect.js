import './InputSelect.css'

const InputSelect = (props) => {
    return (
        <div className='input-select'>
            <label>{props.label}</label>
            <select>
                {props.times.map(time => {
                    return <option key={time}>{time}</option>
                })}
            </select>
        </div>
    )
}

export default InputSelect