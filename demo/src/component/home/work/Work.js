import React from 'react'
import Data from './Data'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import IosShareIcon from '@mui/icons-material/IosShare';
export const Work = () => {
  return (
    <>
        <section className='work'>
            <div className='heading'>
                <h2>MY WORKS</h2>
                <h1>Some Of My Completed Projects</h1>
            </div>
            <div className='content'>
                {Data.map((value) => {
                    return(
                        <>
                        <div className='box'>
                            <div className='img'>
                                <img src={value.cover} alt=''></img>
                            </div>
                            <div className='overlay'>
                                <div className='text'>
                                    <h2>{value.title}</h2>
                                    <p>{value.desc}</p>
                                </div>
                                <div className='icon'>
                                    <FullscreenIcon className='iconWork'></FullscreenIcon>
                                    <IosShareIcon className='iconWork'></IosShareIcon>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </section>
    </>
  )
}
