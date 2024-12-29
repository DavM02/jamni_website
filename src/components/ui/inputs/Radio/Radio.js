// import './radio.css'
export default function Radio({ value, ...props }) {
    return (
        <div className='custom-radio'>
            <input type='radio' value={value}  {...props}/>
            <div className='center-gr'>
                <span className='xsmall-text text-main'>
                    {value}
                </span>
            </div>
        </div>
    )
}
