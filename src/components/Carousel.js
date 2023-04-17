import React from 'react'
import styled from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import CyberVaultImage from '../assets/cyber_vault.png'
import image2 from '../assets/cybersecurity-banner.jpeg'
import image3 from '../assets/Cyber-security-web-banner.jpg'


export default function Carousel1() {
  return (
    <div showThumbs={false}>
      <div>
        <img src={CyberVaultImage} alt='img1' style={{ height: 180, margin: 10 }}/>
        <p>Welcome to Security App</p>
      </div>
      <div>
        <img src={image2} alt='img2'style={{ height: 180, margin: 10 }}/>
        <p className='legend'>Legend 2</p>
      </div>
      <div>
        <img src={image2} alt='img3' style={{ height: 180, margin: 10 }}/>
        <p className='legend'>Legend 3</p>
      </div>
    </div>
  )
}

// const SlideContainer = styled.div``
