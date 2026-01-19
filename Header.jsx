import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="header">

                <div className="d-flex align-items-center">

                    <img src='/Assets/lettings.jpg' alt="" width={200} />

                    <ul className='list-unstyled d-flex gap-5 fs-3 mt-5 px-5 '>
                        <li> Home</li>
                        <li>Services</li>
                        <li> Book Appointment</li>
                        <li>Contact Us</li>
                        <li>Content Hub</li>
                    </ul>





                </div>

                <h2 className='text-center py-5 mt-5'>Lettings Hub</h2>
                <br></br>
                <hr></hr>
                <ul className='list-unstyled d-flex gap-5 fs-4 mt-5 px-5 bg-primary text-white '>
                    <li> Announcements</li>
                    <li>General Property News</li>
                    <li> Interesting facts</li>
                    <li>Landlord Tips</li>
                    <li>Legal Updates</li>
                </ul>
                <br></br>
                <hr></hr>


            </div>
        </div>
    )
}

export default Header



