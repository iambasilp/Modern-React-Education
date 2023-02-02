import React from 'react'

const Categories = ({icon,category}) => {
  return (
    <div className='bg-white flex flex-col items-center p-8 gap-8 rounded-md'>
        <div className='text-4xl text-Teal'>{icon}</div>
        <div>{category}</div>
        <a href="#" className='text-sm text-gray'>View More</a>
    </div>
  )
}

export default Categories