import React, { useEffect } from 'react'
import port1 from '../../assets/port3.PNG'


export default function Contact() {

useEffect(() => {
    document.title = 'Contact' ;
  }, []);
  
 return (
    <>
    
      <div>
        <h1 className='text-uppercase text-center pt-3 font'>Contact component</h1>
      </div>
      <div className="linee mx-auto pt-3">
       <i className="fa-solid fa-star"></i>
  </div>

  <div className='container py-5'>
  <div className='d-flex justify-content-center'>
    <div className='col-8 d-flex flex-column gap-3'>
      <input type="text" className="form-control border-0 border-bottom py-3  " placeholder="User Name" />
      <input type="text" className="form-control border-0 border-bottom py-3  " placeholder="User Age" />
      <input type="text" className="form-control border-0 border-bottom py-3  " placeholder="User Email" />
      <input type="text" className="form-control border-0 border-bottom py-3  " placeholder="User Password" />

<div>
  <button className='main-color btn text-white rounded-2'>Send Message</button>
</div>
      
    </div>
  </div>
</div>

    </>
  )
}
