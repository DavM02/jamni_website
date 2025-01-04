import React from 'react'
import { useNavigate } from 'react-router-dom'
import heartIcon from "../../../../assets/icons/heart.svg";

export default function FavoritesIcon() {

    const navigate = useNavigate()
  return (
      <div className="icon" onClick={() => navigate('favorites')} style={{ marginTop: "2px" }}>
          <img src={heartIcon} alt="heart-icon" />
      </div>
  )
}
