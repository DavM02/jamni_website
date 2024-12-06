import React, { useEffect } from 'react'
import { useContext } from 'react';
import { MainContext } from '../../../context/MainContext';
export default function Map() {
    const { scrollbarAccess } = useContext(MainContext);

    function allowScroll() {
        scrollbarAccess.current.updatePluginOptions('overflow', { open: false })
    }

    function disableScroll() {
        scrollbarAccess.current.updatePluginOptions('overflow', { open: true })
    }
    useEffect(() => {
        disableScroll()
    })
     return (
        <div id='map'
            
            onTouchStart={() =>{ disableScroll(); console.log('touchstart')}}
            onTouchEnd={() => { allowScroll(); console.log('onTouchEnd')}}
            onTouchCancel={() => { allowScroll(); console.log('onTouchCancel') }}
            onMouseUp={() => { allowScroll(); console.log('onMouseUp') }}
            onMouseDown={() => { disableScroll(); console.log('onMouseDown') }}
        >

            <iframe
                title="map"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805.5486467693462!2d37.515653304804935!3d55.85757610456142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5378d0f265fc1%3A0xf4d877051f8c47a2!2z0KHQvtC70L3QtdGH0L3QvtCz0L7RgNGB0LrQsNGPINGD0LsuLCAxMiwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEyNTQxMw!5e0!3m2!1sru!2sam!4v1733480515922!5m2!1sru!2sam"
                width="560"
                height="454"
                allowFullScreen={true}
                style={{ position: 'relative' }}
            ></iframe>
        </div>

    )
}
