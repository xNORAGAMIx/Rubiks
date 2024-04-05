import React from 'react'
import img from "./img.jpg"
import { Link } from 'react-router-dom'

export default function TeamsCard(props) {
  return (
    <div className='column'>
      <div class="card" style={{width: "18rem;"}}>
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.teamName}</h5>
            <p class="card-text">{props.content}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{props.teamHead}</li>
        </ul>
        <div class="card-body">
            <Link to={props.link}>Click</Link>
        </div>
        </div>
    </div>
  )
}
