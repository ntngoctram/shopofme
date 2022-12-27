import React from 'react'
import { About } from '../home/about/About'
import { Branding } from '../home/Branding'
import { Home } from '../home/homes/Home'
import { Services } from '../home/servicess/Services'
import { Skill } from '../home/Skill'
import { Wrapper } from '../home/Wrapper'
import { WrapperOne } from '../home/WrapperOne'
import { Work } from '../home/work/Work'
import { Blog } from '../home/blog/Blog'


export const HomePages = () => {
  return (
    <>
    <Home/>
    <Branding></Branding>
    <About></About>
    <Services></Services>
    <Wrapper></Wrapper>
    <Skill></Skill>
    <WrapperOne></WrapperOne>
    <Work></Work>
    <Blog></Blog>
    </>
  )
}
