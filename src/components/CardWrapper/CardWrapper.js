import React from "react"
import Card from "../Card/Card"
import "../Card/Card.scss"
import data from "../../../data/data.json"
import { v4 as uuidv4 } from "uuid"

const CardWrapper = () => {
  const cardData = data.data

  return (
    <div className="card-wrapper">
      {cardData.map((data) =>
        data.cards.map((card) => <Card key={uuidv4()} data={card} />)
      )}
    </div>
  )
}

export default CardWrapper
