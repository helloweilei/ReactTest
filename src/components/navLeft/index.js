import React from 'react'
import './style.less'
import { getSongCategoies } from '../../api/Api'
import Logo from './NavLeftLogo'

export default class NavLeft extends React.Component {
    componentDidMount() {
        getSongCategoies().then(categories => {
            console.log(categories)
        })
    }
    render() {
        return (
            <div className="navleft">
                <Logo title='畅歌'></Logo>
            </div>
        )
    }
}