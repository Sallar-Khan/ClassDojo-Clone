import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    
      <><nav className="row navbar bg-light d-inline p-2">
      <div className="container-fluid">
        ClassDojo
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              Plus
            </li>
            <li className="nav-item">
              About us
            </li>
            <li className="nav-item">
              Schools
            </li>
            <li className="nav-item">
              Resources
            </li>
            <li className="nav-item">
              Login
            </li>
            <li className="nav-item">
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Sign up</button>
            </li>
          </ul>
        </div>
      </div>
      <div />
    </nav><div /></>

    )
  }
