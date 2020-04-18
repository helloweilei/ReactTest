import React from 'react';
import './style.less';
import Logo from './NavLeftLogo';
import { Menu, Icon } from 'antd';
import { NavLink as Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import menus from '../../config/navmenu';

const { SubMenu } = Menu;
class NavLeft extends React.Component {
    constructor() {
        super();
        this.state = {
            theme: 'dark'
        }
        this.menuNodes = this.getMenuNodes(menus)
    }
    getSelectedKey() {
        let pathname = this.props.location.pathname
        return menus.find(menu => menu.path === pathname).key
    }
    getMenuNodes(menus = []) {
        return menus.map(item => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >{ this.getMenuNodes(item.children) }</SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.path}>
                            <Icon type={item.icon}></Icon>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }
        })
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
                    mode="inline"
                >
                    {this.menuNodes}
                </Menu>
            </div>
        )
    }
}

export default withRouter(NavLeft);