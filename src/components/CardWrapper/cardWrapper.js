import React from "react"
import Card from "../Card/card"
import "../Card/card.scss"
import data from "../../../data/data.json"

const CardWrapper = () => {
  const cardData = data.data

  return (
    <div className="card-wrapper">
      {cardData.map((data) =>
        data.card.map((data) => <Card key={data.id} data={data} />)
      )}
    </div>
  )
}

export default CardWrapper
