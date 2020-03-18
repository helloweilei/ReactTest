import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Content from '../content'
import './style.less'

export default class MainBody extends React.Component {
    render() {
        return (
            <div className='main-body'>
                <div>
                    <Header></Header>
                </div>
                <div>
                    <Content></Content>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}