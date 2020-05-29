import React from "react"
import Card from "../Card/card"
import "../Card/card.scss"

const CardWrapper = () => {
  return (
    <div className="card-wrapper">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default CardWrapper
