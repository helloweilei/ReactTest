import React from 'react'
import LogoImage from '../../assets/logo.png'

export default function Logo(props) {
    return (
        <div className="logo">
            <img src={LogoImage} alt='logo' width='50' height='50'/>
            <span>{props.title}</span>
        </div>
    )
}