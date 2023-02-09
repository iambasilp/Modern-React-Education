import React from 'react'
import {BsChevronDown} from 'react-icons/bs'
const Accordions = ({title}) => {
  return (
    <div className='pb-8'>
      <div className='sm:text-xl text-base font-bold'>{title}</div>
    </div>
  )
}

export default Accordions
