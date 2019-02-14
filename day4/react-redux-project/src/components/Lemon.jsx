import React,{Component} from 'react'
import {connect} from 'react-redux'
let Lemon = class Lemon extends Component {
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            author: "Xie"
        }
    }
    setAuthor(e){
        this.setState({
            author: e.target.value
        })
    }
    render(){
        return (
            <div>
                Lemon
                <p>{this.props.age}</p>
                <input value={this.state.author} onChange={this.setAuthor.bind(this)} />
                <button onClick={this.props.setAuthor.bind(this)}>更改仓库的值</button>
            </div>
        )
    }
}
// 如果不使用react-redux的这个connect方法，那么Lemon组件就是不能够获取仓库的值
// 调用connect方法，建立Lemon组件和仓库之间的关系
export default connect(
    // 获取仓库里面的state，并把它拿到Lemon组件的这个函数里面
    // 它就会把仓库state的值挂载到props上
    (state)=>{
        console.log(state)
        return state
    },
    (dispatch)=>{
        return {
            setAuthor(){
                console.log(this)
                // dispatch的参数是个对象，对应store里面的那个action
                dispatch({
                    // 对应switch里面的case
                    type: "setAuthor",
                    author: this.state.author
                })
            }
        }
    }
)(Lemon)