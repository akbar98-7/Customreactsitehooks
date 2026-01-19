import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footer d-flex justify-content-center py-5'>
        <img src="/Assets/lettings.jpg" alt=""  width={200}/>
        <br></br>
        
       
      
    </div>

     <div className='d-flex justify-content-center'>
            <h4 className='px-3 align-items-center'>contact@lettingahead.com</h4>
           
        </div>

        <div className='d-flex justify-content-center'>
            <h4 className='px-3 align-items-center'>0333 242 0839</h4>
           
        </div>


         <div className="d-flex align-items-center justify-content-center">



            <ul className='list-unstyled d-flex gap-5 fs-3 mt-5 px-5  '>
                        <li> Home</li>
                        <li>Services</li>
                        <li> Fees</li>
                        <li>Testimonials</li>
                        <li>Contact</li>
                    </ul>
         </div>

         <br></br>

         <div className="d-flex align-items-center justify-content-center gap-4">
            <img src="/Assets/Facebook.png" alt="" width={50} />
            <img src="/Assets/Instagram.png" alt="" width={50} />
            <img src="/Assets/LinkedIn.png" alt="" width={50} />
         </div>
        
        <br></br>

         <div>
            <p className='text-center fs-3'>Copyright © 2026 Lettings Hub. All rights reserved.</p>
         </div>
        </>
  )
}

export default Footer
