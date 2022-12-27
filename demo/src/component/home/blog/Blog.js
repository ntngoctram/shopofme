import React from 'react'
import Blogdata from "./Blogdata"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export const Blog = () => {
  return (
    <>
      <section className='blog services'>
        <div className='container topMarign'>
          <div className='heading'>
            <h2>LATEST BLOG</h2>
            <h1>Read Inspirational Story Every Week</h1>
          </div>
          <div className='contain grid topMarign'>
            {
            Blogdata.map((value) => {
              return (
                <>
                  <div className='box'>
                    <div className='img'>
                      <img src={value.cover} alt=''></img>
                    </div>
                    <div className='text'>
                      <span>{value.date}</span>
                      <h2>{value.title}</h2>
                      <a href='/'>
                        Read More
                        <KeyboardDoubleArrowRightIcon className='icon'></KeyboardDoubleArrowRightIcon>
                        </a>
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
