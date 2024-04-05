import React from 'react'
import teach from './teach.jpg'
import { Link,Routes,Route } from 'react-router-dom'

export default function Cards(props) {
  return (
    <div className='my-container'>
      <div class="card" style={{width : "30rem"}}>
        <img src={teach} class="card-img-top" alt="..."/>

        <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to={props.destination}>View</Link>
        </div>
        </div>

    </div>
  )
}
