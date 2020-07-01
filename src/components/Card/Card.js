import React from "react"
import "./Card.scss"
import { v4 as uuidv4 } from "uuid"

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-info">
        <h1 className="card-title">{data.title}</h1>
        {data.items.map((item) => (
          <a href={item.link} key={uuidv4()}>
            <li>{item.title}</li>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Card
