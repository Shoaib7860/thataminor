import React from 'react'
import Phone from "../images/phone.gif"
import Email from "../images/music.png"

function Footer() {
    return (
        <>
            <footer className='main-footer-section bg-color'>
                <div className='contact-details'>
                    <div className='container px-5'>
                        <div className='row g-0'>
                            <div className='col-lg-4'>
                                <div className='contact-div p-5 d-flex flex-column justify-content-center align-items-center'>
                                    <div className='icon-div d-flex justify-content-center align-items-center rounded-circle mb-3'>
                                        <img src={Phone} alt='' className='img-fluid' />

                                    </div>
                                    <p className='text-white'>+92 3431891918</p>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='contact-div p-5 d-flex flex-column justify-content-center align-items-center'>
                                    <div className='icon-div d-flex justify-content-center align-items-center rounded-circle mb-3'>
                                        <img src={Phone} alt='' className='img-fluid' />
                                    </div>
                                    <p className='text-white'>+92 3431891918</p>
                                </div>

                            </div>
                            <div className='col-lg-4'>
                                <div className='contact-div p-5 d-flex flex-column justify-content-center align-items-center'>
                                    <div className='icon-div d-flex justify-content-center align-items-center rounded-circle mb-3'>
                                        <img src={Phone} alt='' className='img-fluid' />

                                    </div>
                                    <p className='text-white'>+92 3431891918</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



       
                <div class="footer-section py-5 text-white">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-2 col-md-6 col-6">
                                <div class="footer-links">
                                    <h4 class="text-white mt-5 mb-3">About</h4>
                                    <ul class="text-light-grey list-unstyled d-flex flex-column gap-2">
                                        <li>Our Story</li>
                                        <li>Our Story</li>
                                        <li>Our Story</li>
                                        <li>Our Story</li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-6 col-6">
                                <div class="footer-links">
                                    <h4 class="text-white mt-5 mb-3">About</h4>
                                    <ul class="text-light-grey list-unstyled d-flex flex-column gap-2">
                                        <li>Our Story</li>
                                        <li>Our Story</li>
                                        <li>Our Story</li>
                                        <li>Our Story</li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-6 col-6">
                                <div class="footer-links">
                                    <h4 class="text-white mt-5 mb-3">About</h4>
                                    <ul class="text-light-grey list-unstyled d-flex flex-column gap-2">
                                        <li>Our Story</li>
                                        <li>Our Story</li>
                                        <li>Our Story</li>
                                        <li>Our Story</li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="footer-links">
                                    <h4 class="mt-5 mb-3 text-white">Subscribe</h4>
                                    <div class="input-group mb-3 w-75">
                                        <input type="text" class="form-control" placeholder="Recipient's username"
                                            aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span class="input-group-text btn btn-primary" id="basic-addon2">Subscribe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container">
                    <hr class="container mx-auto" />

                    <div class="row">
                        <div class="col-lg-8 col-12 ">
                            Copyright ©2023 All rights reserved. | This template is made with by <span class="bg-theme"> ThapaTechnical.com</span>
                        </div>
                        <div class="col-md-4 col-12  ">
                            <div class="d-flex justify-content-center justify-content-lg-end gap-5 mt-lg-0 mt-3">
                                <a href="https://www.instagram.com/thapatechnical/" target="_blank">
                                    <div class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                                        <i class="fa-brands fa-instagram"></i>
                                    </div>
                                </a>
                                <div class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </div>
                                <div class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">

                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </footer >
        </>
    )
}

export default Footer