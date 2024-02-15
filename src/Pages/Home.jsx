import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from "../assets/HomeImage.png"

function Home() {
    return (
        <>
            <div style={{ height: '100vh' }} className='w-100 d-flex justify-content-center  bg-info align-items-center'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-6">
                            <h1 style={{ fontSize: '75px' }} className='fw-bolder text-black mb-3'>

                            <i className="fa-solid fa-graduation-cap text-black me-2"style={{height:'80px'}}> </i>

                                Education

                            </h1>
                            <p style={{ textAlign: 'justify' }} className='text-white'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ex veritatis eligendi voluptatem, quo sit aut voluptatum ipsum laboriosam, perferendis nostrum doloribus a veniam doloremque deserunt iusto vero magni tempora.</p>
                            <Link to={'/register'} className='btn btn-outline-danger mt-3 shadow-lg'  > Register <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <div className="col-lg-1">

                        </div>
                        <div className="col-lg-4">
                            <img src={HomeImage} className='img-fluid' alt="landing" />
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Home