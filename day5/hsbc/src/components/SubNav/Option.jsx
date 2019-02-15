import React, { Component } from 'react';
import {
    Layout, Breadcrumb,
} from 'antd';
import Xtable from '../Xtable'
const { Content } = Layout;

class Option extends Component {
    constructor(props){
        super(props);
        this.props = props
    }
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>{`Option${this.props.option}`}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{
                        background: '#fff', padding: 24, margin: 0, minHeight: 280,
                    }}>
                        <Xtable />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Option