import React from 'react'

export const Home = () => {
    return (
        <>
            <section className='home'>
                <div className='container flex'>
                    <div className='left'>
                        <div className='img'>
                            <img src='./assets/home.png' alt=''></img>
                        </div>
                    </div>
                    <div className='right topMarign'>
                        <h1> I AM A <br></br> FRONT-END DEVELOPER</h1>

                        <div className='scoialIcon'>
                            <i className='fab fa-facebook-f facebook'></i>
                            <i className='fab fa-instagram instagram'></i>
                            <i className='fab fa-twitter twitter'></i>
                            <i className='fab fa-youtube youtube'></i>
                            <i className='fab fa-pinterest pinterest'></i>
                            <i className='fab fa-dribbble dribbble'></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium consectetur ipsa porro illum, delectus vero, maiores laboriosam voluptas esse natus eaque, maxime quia voluptates quaerat aliquid nihil minima eveniet nam!</p>
                        <button className='primary-btn'>Contact Us</button>
                    </div>
                </div>
            </section>
        </>
    )
}
