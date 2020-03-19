import React from 'react'
import LogoImage from '../../assets/logo.jpg'

export default function Logo(props) {
    return (
        <div className="logo">
            <img src={LogoImage} alt='logo' width='40' height='40'/>
            <span>{props.title}</span>
        </div>
    )
}