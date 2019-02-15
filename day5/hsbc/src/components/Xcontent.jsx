import React, { Component } from 'react';
import {
    Layout, Menu, Icon,
} from 'antd';
import Option from './SubNav/Option';

const { SubMenu } = Menu;
const { Sider } = Layout;



class Xcontent extends Component {
    state = {
        collapsed: false,
        option: 1,
        subMenus: [{
            title: '学员管理',
            childMenus: [{
                title: '查看学员'
            },{
                title: '录入学员'
            }]
        },{
            title: 'sub2',
            childMenus: [{
                title: 'option3'
            },{
                title: 'option4'
            }]
        }]
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    toOption(option){
        this.setState({
            option
        });
    }
    render() {
        return (
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {/* <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                            <Menu.Item onClick={this.toOption.bind(this,1)} key="1">option1</Menu.Item>
                            <Menu.Item onClick={this.toOption.bind(this,2)} key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu> */}
                        {
                            this.state.subMenus.map((item,index)=>{
                                return (
                                    <SubMenu key={item.title} title={<span><Icon type="user" />{item.title}</span>}>
                                        {
                                            item.childMenus.map((item2,index2)=>{
                                                return <Menu.Item onClick={this.toOption.bind(this,index2+1)} key={index2}>{item2.title}</Menu.Item>
                                            })
                                        }
                                    </SubMenu>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                {
                    (()=>{
                        return <Option option={this.state.option} />
                    })()
                }
            </Layout>
        );
    }
}

export default Xcontent