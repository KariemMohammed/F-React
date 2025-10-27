import React, { useEffect } from 'react'
import img1 from '../../assets/image1.svg'
import './Startframework.css'


export default function FramWorkApp() {
    useEffect(()=>{
        document.title = 'Start Framework'
    },[])

  return (
    <>
      <div className='main-color text-white min-vh-100 d-flex flex-column justify-content-center '>
  <div className='container text-center '>
    <img className='img-1' src={img1} alt="Avtar" />
    <h1 className='text-uppercase text-center pt-3'>Start Framework</h1>
  </div>

  <div className="line mx-auto p-3">
    <i className="fa-solid fa-star"></i>
  </div>
  <p className='text-center'>Graphic Artist - Web Designer - Illustrator</p>
  </div>
    </>
  )
}
