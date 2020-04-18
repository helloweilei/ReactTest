import React from 'react';
import './style.less';
import { getSongCategoies } from '../../api/Api';
import Logo from './NavLeftLogo';
import { Menu, Icon } from 'antd';
import { NavLink as Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const { SubMenu } = Menu;
class NavLeft extends React.Component {
    constructor() {
        super();
        this.state = {
            theme: 'dark',
            categories: []
        }
    }
    componentDidMount() {
        getSongCategoies().then(categories => {
            console.log(categories)
            this.setState({ categories })
        })
    }
    getSelectedKey() {
        console.log(this.props.location)
        let selectedKey = this.props.location.pathname
        if (selectedKey.startsWith('/')) {
            selectedKey = selectedKey.slice(1)
        }
        if (selectedKey === '') {
            selectedKey = 'home'
        }
        return selectedKey
    }
    getOpenKey() {

    }
    render() {
        let selectedKey = this.getSelectedKey()
        return (
            <div className="navleft">
                <Logo title='畅歌'></Logo>
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    selectedKeys={[selectedKey]}
                    openKeys={[this.getOpenKey()]}
                    mode="inline"
                >
                    <Menu.Item key="home">
                        <Link to="/">
                            <Icon type="home"></Icon>
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="catigory"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>歌曲分类</span>
                            </span>
                        }
                    >
                        { this.state.categories.map(category => {
                            return <Menu.Item key="1">Option 1</Menu.Item>
                        }) }
                    </SubMenu>
                    <Menu.Item key="user">
                    <Link to="/user">
                        <Icon type="user"></Icon>
                        <span>用户设置</span>
                    </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(NavLeft);