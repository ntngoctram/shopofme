import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer>
                <div className='container grid1'>
                    <div className='box'>
                        <img src='./assets/logo.png' alt=''></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.</p>
                        <div className='scoialIcon'>
                            <i className='fab fa-facebook-f '></i>
                            <i className='fab fa-instagram '></i>
                            <i className='fab fa-twitter '></i>
                            <i className='fab fa-youtube '></i>
                            <i className='fab fa-pinterest '></i>
                            <i className='fab fa-dribbble '></i>
                        </div>
                    </div>
                    <div className='box'>
                        <h2>Quick Links</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>News</li>
                            <li>Contact</li>
                            <li>FAQ's</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Recent Post</h2>
                        <div className='text'>
                            <p> 3 WooCommerce Plugins to Boost Sales</p>
                            <span> 28 Feb 2022</span>
                        </div>
                        <div className='text'>
                            <p> 3 WooCommerce Plugins to Boost Sales</p>
                            <span> 28 Feb 2022</span>
                        </div>
                        <div className='text'>
                            <p> 3 WooCommerce Plugins to Boost Sales</p>
                            <span> 28 Feb 2022</span>
                        </div>
                    </div>
                    <div className='box'>
                        <h2>Get in Touch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.</p>
                    
                        <div className='icon'>
                            <i className='fa fa-location-dot'></i>
                            <label htmlFor=''>Location: Cam Le, Da Nang, Viet Nam</label>
                        </div>
                        <div className='icon'>
                            <i className='fa fa-phone'></i>
                            <label htmlFor=''>Phone: +84 986 979 157</label>
                        </div>
                        <div className='icon'>
                            <i className='fa fa-envelope'></i>
                            <label htmlFor=''>Email: ntngoctram1303@gmail.com</label>
                        </div>
                    </div>
                </div>
                <div className='legal container'>
                    <p>Copyright @2022. All rights reserved.</p>
                    <label htmlFor=''>
                        Design & Developed by <span>NguyenThiNgocTram</span>
                    </label>
                </div>
            </footer>
        </>
    )
}