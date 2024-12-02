import React from 'react'
import PageTransition from '../../components/pageTransition/PageTransition'
import AnimButton from '../../components/ui/AnimButton/AnimButton'
import { useNavigate } from 'react-router-dom'
import './nofound.css'
function NoFound() {
  const navigate = useNavigate()
  return (
    <div id='no-found-page'>
      <div className='center-gr'>
        <h1>no found</h1>
        <AnimButton onClick={() => navigate(-1)}>go back</AnimButton>
      </div>
    </div>
  )
}

export default PageTransition(NoFound)