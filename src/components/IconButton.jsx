import React from 'react'

const IconButton = ({text,onClick,customClass}) => {
  return (
    <button 
    onClick={onClick}
    className={`${customClass} py-3 rounded-lg font-sans `}>
      {text}
    </button>
  )
}

export default IconButton
