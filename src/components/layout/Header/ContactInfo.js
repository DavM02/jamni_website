
export default function ContactInfo() {
    return (
        <div className='info'>
            <div className='container'>
                <div className='row s-between'>
                    <span className='text-main text-light xxxsmall-text'>
                        Есть вопросы? <a href="mailto:mailto:info@jamni.ru">Напишите нам</a>
                    </span>
                    <div className='row gap-15'>
                        <a href="tel:+79160257790" className='text-main text-light xxxsmall-text'>+7 (916) 025-77-90</a>
                        <a href="tel:+74951501091" className='text-main text-light xxxsmall-text'>+7 (495) 150-10-91</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
