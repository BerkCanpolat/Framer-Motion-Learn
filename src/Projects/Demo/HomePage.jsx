import React from 'react'
import ScrollAnimationA1 from './DemoComponents/A1/ScrollAnimationA1'
import ScrollContentA1 from './DemoComponents/A1/ScrollContentA1'

const HomePage = () => {
  return (
    <>

    <ScrollContentA1> START CONTENT </ScrollContentA1>
    
        <ScrollAnimationA1 />

    <ScrollContentA1> BOTTOM CONTENT </ScrollContentA1>

    </>
  )
}

export default HomePage