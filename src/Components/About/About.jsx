import React, { useEffect } from 'react'

export default function About() {

  useEffect(()=> {
    document.title = 'About';

  }, []);

  return (
    <div className='main-color text-white min-vh-100 d-flex flex-column justify-content-center'>
  <div>
    <h1 className='text-uppercase text-center pt-3'>about component</h1>
  </div>

  <div className="line mx-auto p-3">
    <i className="fa-solid fa-star"></i>
  </div>

  <div className='d-flex container justify-content-center'>
    <div className='p-3 w-50'>
      <p className='letter-spacing'>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </p>
    </div>
    <div className='p-3 w-50'>
      <p className='letter-spacing'>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </p>
    </div>
  </div>
</div>

  )
}
