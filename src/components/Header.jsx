import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const handleClick = () => {
        console.log("Click")
    }
    
  return (
    <header className='header'>
        <h1>{title}</h1> 
        <Button color="green" text="Add" onClick={handleClick} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,  // Ensures title is a string and required
}

// CSS in JS
// const headingStyle = {
//     color: 'white',
//     backgroundColor: 'black',
//     padding: '10px',
//     textAlign: 'center',
//     fontSize: '2rem',
// }

export default Header
