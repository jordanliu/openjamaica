import React from "react"
import "./card.scss"

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-info">
        <h1 className="card-title">{data.title}</h1>
        {data.items.map((item) => (
          <a href={item.link}>
            <li key={item.id}>{item.title}</li>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Card
