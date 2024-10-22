import React from 'react'
import Title from '../atoms/Title'
import Paragraph from '../atoms/paragraph'


function AboutContent() {
  return (
    <div className='grid gap-4 items-center mt-12 justify-center'>
        <Title text="About Page"/>
        <Paragraph text="Welcome to the about page! Here you can learn more about our mission, vision, and values." />
      <Paragraph text="We are dedicated to providing the best services and making a positive impact in our community." />
    </div>
  )
}

export default AboutContent