import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color = 'steelblue', text = 'Click me!', onClick}) => {

  return (
    <div>
      <button  
        onClick={onClick} 
        className='btn' 
        style={{backgroundColor: color}}>
        {text}
        </button>
    </div>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
