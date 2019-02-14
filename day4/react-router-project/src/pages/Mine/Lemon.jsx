import React, { Component as C } from 'react';
export default class Lemon extends C {
    constructor(props) {
        super(props)
        // 因为Lemon是被Route组件给调用的，所以会在它的props下面拥有三个值(match,history,location)
        this.props = props
    }
    toHomePage(){
        // 编程式导航
        this.props.history.push('/')
        // 编程式导航本质上就是对location方法的封装
        // location.href
    }
    render() {
        return (
            <div>
                Lemon Pages 
                <p>传进来的值为{this.props.match.params.id}</p>
                <button onClick={this.toHomePage.bind(this)}>编程式导航</button>
            </div>
        )
    }
}
