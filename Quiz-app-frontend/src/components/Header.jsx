import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav>
        <h1>Quiz App</h1>
        <div className='options'>
            <NavLink to='questions'>Quesions</NavLink>
            <NavLink to='quiz'>Quiz</NavLink>
        </div>
        </nav>
    </div>
  )
}

export default Header