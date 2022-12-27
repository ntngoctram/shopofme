import React from 'react'

export const Skill = () => {
    const Progress =({done,title})=>{
        return(
            <div className='progress'>
                    <div className='progress-done' style={{opacity:1,width: `${done}%`}}>
                        <h4>{title}</h4>
                        <h4>{done} %</h4>
                    </div>
            </div>
        )
    }
    const data = [
        {
            title: 'Every day is a new challenge',
            para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.',
            paral: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.'
        }
    ]
    return (
        <>
            <section className='skill'>
                <div className='container '>
                    <div className='heading'>
                        <h2>WHY CHOOSE US</h2>
                        <h1>Some Of My Skills</h1>
                    </div>
                    <div className='content flex'>
                        <div className='left topMarign'>
                            <Progress done='80' title='HTML'></Progress>
                            <Progress done='90' title='CSS'></Progress>
                            <Progress done='70' title='JAVASCRIPT'></Progress>
                            <Progress done='80' title='REACT JS'></Progress>
                        </div>
                        <div className=' right mtop'>
                            {data.map((val) => {
                                return (
                                   <>
                                    <h1>{val.title}</h1>
                                    <p>{val.para}</p>
                                    <p>{val.paral}</p>
                                    <button className='primary-btn'>Hire Me</button>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
