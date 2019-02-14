import React,{Component} from 'react'
import {connect} from 'react-redux'
let Tian = class Tian extends Component {
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        return (
            <div>
                Tian
                <p>{this.props.author}</p>
            </div>
        )
    }
}
// connect的第一个函数是用来拿仓库的值到props上
// 第二个参数是创建更改仓库的函数放到props上
export default connect((state)=>{
    // 执行一些过滤数据方法
    return state
},(dispatch)=>{
    return {}
})(Tian)