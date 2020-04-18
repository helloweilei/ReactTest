import React from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

import userImage from '../../assets/user.jpg';
import "./style.less";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-user">
                <div className="user-info">
                    <Link to="/user">
                        <Avatar size="large" src={userImage} />
                        <span style={{ fontWeight: 'bold', margin: '0 10px 0 6px', color: '#444' }}>Charlie</span>
                    </Link>
                </div>
                <Link to="/login" style={{ textDecoration: 'underline' }}>退出登录</Link>
            </div>

        )
    }
}