import React from 'react'

export default function Footer() {
  return (
  
      <footer className='secondary-color-background text-white pt-5'>
  <div className='container'>
    <div className='row text-center'>
      <div className='col-md-4 mb-4 mb-md-0'>
        <h3 className='mb-3'>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className='col-md-4 mb-4 mb-md-0'>
        <h3 className='mb-3'>AROUND THE WEB</h3>
        <div className="d-flex justify-content-center align-content-center gap-3">
          <i className="fa-brands fa-facebook fa-lg"></i>
          <i className="fa-brands fa-twitter fa-lg"></i>
          <i className="fa-brands fa-linkedin-in fa-lg"></i>
          <i className="fa-solid fa-globe fa-lg"></i>
        </div>
      </div>
      <div className='col-md-4'>
        <h3 className='mb-3'>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
  </div>
  <div className='bg-dark text-center py-3 mt-4'>
    <small>Copyright © Your Website 2021</small>
  </div>
</footer>




  
  )
}
