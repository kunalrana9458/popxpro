import React from 'react'
import Heading from './Heading'
import Para from './Para'


const Container = ({head,para}) => {
  return (
    <div className='w-[95%] mt-8 mx-auto flex flex-col gap-y-4'>
      <Heading text={head} />
      <Para text={para} />
    </div>
  )
}

export default Container
