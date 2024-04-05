import React from 'react'
import img from './img.jpg'
import Footer from './Footer'

export default function Phgy(props) {
  return (
    <>
    <div className="row-n">
    <div className='column-n'>
      <div class="card" style={{width: "18rem;"}}>
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">Photography</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <h4>Members</h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Daniel Craig</li>
            <li class="list-group-item">Aoi Todo</li>
            <li class="list-group-item">James Faulkner</li>
        </ul>
        <h4>Required Skills</h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">HTML</li>
            <li class="list-group-item">CSS</li>
            <li class="list-group-item">Javascript</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Register</a>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}
