import React from 'react'
const data = [
    {
      title: "Who I Am And What I Do",
      desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.",
      desc2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      desc3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      cover: "./assets/about.jpg",
    },
  ]
export const About = () => {
  return (
    <>
    <section className='about topMarign'>
        <div className='container flex'>
            {
                data.map((val) => {
                    return (
                        <>
                        <div className='left mtop'>
                            <div className='heading'>
                                <h2>About Me</h2>
                                <h1>{val.title}</h1>
                            </div>
                            <p>{val.desc1}</p>
                            <p>{val.desc2}</p>
                            <p>{val.desc3}</p>
                            <button className='primary-btn'>DownLoad CV</button>
                        </div>
                        <div className='right'>
                            <div className='img'>
                                <img src='./assets/about.png' alt=''></img>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </section>
    </>
  )
}
