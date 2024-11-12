import React, { useEffect, useRef, useState } from 'react'

export default function Observer(props) {

    const elemRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {

        const observer = new IntersectionObserver((e) => {
            if (e[0].isIntersecting) {
                setVisible(true)
                observer.unobserve(elemRef.current)
            }
        }, { threshold: '0.7' })


        if (elemRef.current) {
            observer.observe(elemRef.current)
        }


        return () => {

            observer.disconnect()

        }

    }, [])



    return (
        <div ref={elemRef} {...props} className={`${props.className} ${visible ? 'visible' : 'invisible'}`} >
            {props.children}
        </div>
    )
}
