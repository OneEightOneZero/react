import React from 'react'
import Xcontent from './Xcontent.jsx'
export default class Xmenu extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            channels: [{
                channel: '__all__',
                title: '推荐'
            }, {
                channel: 'video',
                title: '视频'
            }, {
                channel: 'news_hot',
                title: '热点'
            }, {
                channel: 'news_society',
                title: '社会'
            }, {
                channel: 'news_entertainment',
                title: '娱乐'
            }, {
                channel: '__all__',
                title: '推荐'
            }, {
                channel: 'video',
                title: '视频'
            }, {
                channel: 'news_hot',
                title: '热点'
            }, {
                channel: 'news_society',
                title: '社会'
            }, {
                channel: 'news_entertainment',
                title: '娱乐'
            }],
            channel:0
        }
    }
    // 打频道颜色的函数
    cur(index,e){
        // console.log(index)
        this.setState({
            channel:index
        })
    }
    // 渲染频道列表的函数
    vForChannel(){
        return this.state.channels.map((item,index)=>{
            return <a onClick={this.cur.bind(this,index)} key={index} href="javascript:void(0)" data-channel={
                item.channel
            } data-query={`channel=${item.channel}`} className={
                this.state.channel==index?'cur btn':'btn'
            }>
                {item.title}
            </a>
        })
    }
    render() {
        return (
            <div>
                <div className="top_menu_bar ">
                    <div className="top_menu_more">
                        <div className="list_shadow"></div><a className="more_btn" href="javascript:void(0)"><span className="cross"></span></a>
                    </div>
                    <div className="top_menu_list">
                        {this.vForChannel()}
                    </div>
                </div>
                
                <Xcontent channel={this.state.channel} />
            </div>
        )
    }
}