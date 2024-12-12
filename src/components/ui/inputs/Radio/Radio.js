import './radio.css'
export default function Radio({ text, ...props }) {
    return (
        <div className='custom-radio'>
            <input type='radio' {...props} />
            <div className='center-gr'>
                <span className='xsmall-text text-main'>
                    {text}
                </span>
            </div>
        </div>
    )
}
