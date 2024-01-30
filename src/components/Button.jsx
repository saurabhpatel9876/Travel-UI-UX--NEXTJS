import React from 'react'

const Button = ({title,variant}) => {
  return (
   <button className={`flexCenter gap-3 rounded-full border ${variant} `}>
    <label className='bold-16 cursor-pointer whitespace-nowrap'>
    {title}
    </label>
   </button>
  )
}

export default Button