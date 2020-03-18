import React from 'react';
import { Button } from 'antd';

export default class Header extends React.Component {
    clickHandler() {
        console.log('clicked!')
    }
    render() {
        return (
            <header>this is header.
                <Button onClick={() => this.clickHandler()}>Click Me!</Button>
            </header>
        )
    }
}