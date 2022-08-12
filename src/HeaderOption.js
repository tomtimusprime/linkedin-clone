import React from 'react'
import './HeaderOption.css';

const HeaderOption = ({Icon, title}) => {
  return (
    <div className='headerOption'>
    {/*This conditional statement is saying if I pass in an icon, only then render an icon with a className of headerOption-icon*/}
        {Icon && <Icon className="headerOption-icon"/>}
        <h3 className="headerOption-title">{title}</h3>
    </div>
  )
}

export default HeaderOption