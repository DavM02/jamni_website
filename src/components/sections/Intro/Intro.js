import React, { useEffect, useState } from 'react'

export default function Intro({ id, bg, posY, description, headline }) {
    const [show, setShow] = useState(false)
    useEffect(() => {
        const img = new Image()
        img.src = bg
        img.onload = () => {
            setShow(true)
        }
    }, [])

    return (
        <section id={id} className='intro' >
            <div className='center-gr' style={{ opacity: show ? '1' : '0', background: `url(${bg}) no-repeat`, '--posY': posY }}>

                <div className='mask-layer'></div>
                <div className='container text-center'>
                    <h2 className='text-light'>{headline}</h2>
                    {description && <p className='text-light small-text text-main up-case'
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>
                    }
                </div>
</div>

        </section>
    )
}
