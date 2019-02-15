import React, {Component as C} from 'react';
import {
    Layout, Menu
} from 'antd';

const { Header } = Layout;
class Xheader extends C {
    constructor(props){
        super(props)
        this.state = {
            menu:'2'
        }
        this.props = props
    }
    toMenu(menu){
        this.setState({
            menu
        })

        let menus = {
            '1':'#/',
            '2':'#/home'
        }
        window.location.href = menus[menu]
    }
    render(){
        return (
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[this.props.menu]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item onClick={this.toMenu.bind(this,'1')} key="1">首页</Menu.Item>
                    <Menu.Item onClick={this.toMenu.bind(this,'2')} key="2">设置页</Menu.Item>
                    <Menu.Item onClick={this.toMenu.bind(this,'3')} key="3">我的</Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default Xheader