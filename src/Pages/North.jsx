import React from 'react'
import Nav from '../Componenets/Nav'
import { Carousel } from 'flowbite'
import Footer from '../Componenets/Footer'
import Feedback from '../Componenets/Feedback'
import Road from '../Componenets/Road'

const North = () => {
  return (
    <div>
         <Nav />
         <Road title={"Nord"} />
        <Feedback />
        <Footer />
    </div>
  )
}

export default North