import React from 'react'
import Phone from "../images/phone.gif"

function DigitalProduct() {
    return (
        <>
            <section className='bg-color more-info-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-12 col-lg-6 img-section'>

                            <figure>
                                <img src={Phone} alt='phone' className='img-fluid' />
                            </figure>
                        </div>
                        <div className='col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align0item-center'>
                            <h2 className='fw-bold text-capitalize text-white'>Steps to build a <br />Successfully Digital Product</h2>
                            <p className='mt-3 mb-5 para-width text-light-grey'>
                                World's simplest browser-based utility for randomizing lines in text. Load your text in the input form on the left and you'll instantly get back new text with all the World's simplest browser-based utility for randomizing lines in text. 
                            </p>
                            <div className='text-center w-100 text-md-start'>
                                <button type='button' className='text-capitalize btn btn-primary px-5 py-2'>Contact us</button>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default DigitalProduct