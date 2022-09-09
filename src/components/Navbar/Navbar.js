import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" >Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle    navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" >Home </a>
          <a className="nav-item nav-link" >Features</a>
          <a className="nav-item nav-link" >Pricing</a>
          <a className="nav-item nav-link disabled" >Disabled</a>
        </div>
      </div>
  </nav>
    </>

    )
  }
