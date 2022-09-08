import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    
      <><nav className="row navbar bg-light d-inline p-2">
      <div className="container-fluid">
        ClassDojo
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              Plus
            </li>
            <li class="nav-item">
              About us
            </li>
            <li class="nav-item">
              Schools
            </li>
            <li class="nav-item">
              Resources
            </li>
            <li class="nav-item">
              Login
            </li>
            <li class="nav-item">
              <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Sign up</button>
            </li>
          </ul>
        </div>
      </div>
      <div />
    </nav><div /></>

    )
  }
