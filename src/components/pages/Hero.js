import React from 'react'
import Mp4 from "../images/hero.mp4" 



function Hero() {
    return (
        <>
            <section className='bg-main bg-color hero-section'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align0item-center'>
                            <h1 className='fw-bold text-capitalize text-white'>We collect high quality leads</h1>
                            <p className='mt-3 mb-5 para-width text-light-grey'>
                                World's simplest browser-based utility for randomizing lines in text. Load your text in the input form on the left and you'll instantly get back new text with all the
                            </p>
                            <div className='text-center w-100 text-md-start'>
                                <button type='button' className='text-capitalize btn btn-primary px-5 py-2'>Contact us</button>
                            </div>

                        </div>
                        <div className='col-12 col-md-12 col-lg-6'>
                            <div className='text-center text-lg-end'>
                            <video src={Mp4} loop muted autoPlay className='hero-video'>

                            </video>

                            </div>
                           

                        </div>
                    </div>
                </div>
                <div class="custom-shape-divider-bottom-1694603880">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
            </section>
        </>
    )
}

export default Hero