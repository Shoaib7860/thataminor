import React from 'react'
import Llink from "../images/link.gif"
import Speker from "../images/speaker.gif"
import Seo from "../images/seo.gif"

function Service() {
    return (
        <>
            <section className='services-section'>
                <div className='container text-center common-title fw-bold'>
                    <h2 className='common-heading'>
                        What we will do for <br></br>Your bussiness
                    </h2>
                    <hr className='w-25 mx-auto'></hr>
                </div>
                <div className='container mt-5'>
                    <div className='row g-5'>
                        <div className='col-12 col-lg-4 col-md-12'>
                            <div className='text-center card-box rounded-2 p-4'>
                                <img src={Llink} alt='link' className='img_fluid' width="200px" />
                                <h5 className='fw-normal my-3'>Link Building</h5>
                                <p className='mb-3'>245 packages are looking for funding
                                    run `npm fund` for details 245 packages are looking for funding  </p>
                           
                            <div className='d-flex justify-content-center align-items-center'>
                                <a href='#' className='icon-span rounded-circle d-flex justify-content-center align-items-center mb-4'><i className="fa-solid fa-arrow-right "></i></a>
                            </div>
                        </div>
                        </div>
                        <div className='col-12 col-lg-4 col-md-12 shadow'>
                            <div className='text-center rounded-2 p-4'>
                                <img src={Speker} alt='link' className='img_fluid' width="200px" />
                                <h5 className='fw-normal my-3'>Content Marketing</h5>
                                <p className='mb-3'>245 packages are looking for funding
                                    run `npm fund` for details 245 packages are looking for funding  </p>
                           
                            <div className='d-flex justify-content-center align-items-center'>
                                <a href='#' className='icon-span rounded-circle d-flex justify-content-center align-items-center mb-4'><i className="fa-solid fa-arrow-right "></i></a>
                            </div>
                        </div>
                        </div>
                        <div className='col-12 col-lg-4 col-md-12'>
                            <div className='text-center card-box rounded-2 p-4'>
                                <img src={Seo} alt='link' className='img_fluid' width="200px" />
                                <h5 className='fw-normal my-3'>On Page SEO</h5>
                                <p className='mb-3'>245 packages are looking for funding
                                    run `npm fund` for details 245 packages are looking for funding  </p>
                            
                            <div className='d-flex justify-content-center align-items-center'>
                                <a href='#' className='icon-span rounded-circle d-flex justify-content-center align-items-center mb-4'><i className="fa-solid fa-arrow-right "></i></a>
                            </div>
                            </div>
                        </div>
                    </div>


                </div>


            </section>
        </>
    )
}

export default Service