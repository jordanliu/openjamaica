import React from "react"
import Card from "../Card/card"
import "../Card/card.scss"
import data from "../../../data/data.json"

const CardWrapper = () => {
  const cardData = data.data

  return (
    <div className="card-wrapper">
      {cardData.map((data) =>
        data.cards.map((card) => <Card key={card.id} data={card} />)
      )}
    </div>
  )
}

export default CardWrapper
