import React from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { formatTime } from '../../utils';
import { getWeather } from '../../api/Api'
import { withRouter } from 'react-router';

import userImage from '../../assets/user.jpg';
import "./style.less";
import menus from '../../config/navmenu';

class Header extends React.Component {
    constructor() {
        super()
        this.timer = null
        this.state = {
            currentTime: formatTime(),
            weather: '',
            dayPictureUrl: ''
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                currentTime: formatTime()
            })
        }, 1000)
        getWeather().then(({ weather, dayPictureUrl }) => {
            this.setState({ weather, dayPictureUrl })
        })
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
    }
    render() {
        const { currentTime, weather, dayPictureUrl } = this.state
        const pathname = this.props.location.pathname
        const menu = menus.find(menu => menu.path === pathname)
        let routeTitle = '首页'
        if (menu) {
            routeTitle = menu.title
        }
        return (
            <div className="admin-header">
                <div className="header-top">
                    <Link to="/user">
                        <Avatar size="small" src={userImage} />
                    </Link>
                    <span style={{ fontWeight: 'bold', margin: '0 10px 0 6px', color: '#444' }}>Charlie</span>
                    <Link to="/login">退出登录</Link>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-nav">{routeTitle}</div>
                    <div className="header-bottom-weather">
                        <span>{currentTime}</span>
                        <img src={dayPictureUrl} alt="weather"/>
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)