import React from 'react'
import AnimButton from '../buttons/AnimButton/AnimButton'
import { useNavigate } from 'react-router-dom'
export default function NoResults() {
  const navigate = useNavigate()
  return (
    <div className="no-results center-gr">
      <h3 className="up-case">no results found</h3>
      <AnimButton onClick={() => navigate(".")}>go back</AnimButton>
    </div>
  )
}
