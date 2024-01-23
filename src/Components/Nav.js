import React from 'react'
import{Link} from 'react-router-dom'
export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/Starters">RR CHAAP</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav">
          
            <Link class="nav-link active"  to="/Main Course">Main Course</Link>
            <Link class="nav-link active"  to="/Rolls">Rolls</Link>
            <Link class="nav-link active"  to="/Breads">Breads</Link>
            <Link class="nav-link active"  to="/Beverages">Beverages</Link>
      </div>
    </div>
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <Link class="nav-link active"  to="/Contact">Contact</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" to="/Address">Address</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" to="/Timings">Timings</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
  </li>
  </ul>
  
    </div>
  </nav>
  )
}
