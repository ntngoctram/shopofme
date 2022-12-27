import React from 'react'
import ServicesData from "./ServicesData"

export const Services = () => {
    return (
        <>
            <section className='services topMarign'>
                <div className='container'>
                    <div className='heading'>
                        <h2>MY SERVICES</h2>
                        <h1>Interactive Services Offerred Me</h1>
                    </div>
                    <div className='contain grid topMarign'>
                        {
                            ServicesData.map((val) => {
                                return (
                                    <>
                                        <div className='box'>
                                            <div className='img'>
                                                <img src={val.cover} alt=''></img>
                                            </div>
                                            <div className='text'>
                                                <h2>{val.title}</h2>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                    </div>
                </div>
            </section>
        </>
    )
}
