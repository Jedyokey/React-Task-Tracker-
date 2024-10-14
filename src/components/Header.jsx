import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title = 'Task Tracker', onAdd, showAdd, isEditing}) => { 
  const location = useLocation();
    
  return (
    <header className='header'>
        <h1>{title}</h1> 
        {location.pathname === "/" && !isEditing && (
          <Button 
            color={showAdd ? "red" : "Green"}  
            text={showAdd ? "Close" : "Add"} 
            onClick={onAdd}   
          />  
        )}
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string,  // Ensures title is a string
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
