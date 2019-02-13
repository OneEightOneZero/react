import React from 'react';
import axios from 'axios';
export default class Xcontent extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.props = props
        this.state = {

        }
    }
    // 监听props和state
    componentDidUpdate(){

    }
    // 单独监听props
    componentWillReceiveProps(props){
        console.log(props)
        axios.get("http://localhost:3000/users/news",{
            params:{
                channel:props.channel
            }
        }).then((data)=>{
            console.log(data)
        })
    }
    render() {
        return (
            <content id="pageletListContent" className="feed-list-container">
            <div className="list_content" data-pull-fresh="1">
                <section className="has_action" data-hot-time="1549939468" data-group-id="6656555472109175309" data-item-id="6656555472109175309"
                    data-format="0"><a href="javascript: void(0)" data-action-label="click_headline" data-tag="video_music"
                        className="article_link clearfix ">
                        <div className="item_detail">
                            <h3 className="dotdot line3">心心相印！春天里唱给总书记的歌</h3>
                            <div className="item_info">
                                <div><span className="stick_label space">置顶</span>
                                    0
                                    <span className="src space">央视网新闻</span><span className="cmt space">
                                        评论
                                        5162
                                    </span><span className="time" title="2019-02-12 10:44">15分钟前</span><span data-id="6656555472109175309"
                                        className="dislike-news fr"></span></div>
                            </div>
                        </div>
                    </a></section>
                    <section className="has_action" data-hot-time="1549939468" data-group-id="6656555472109175309" data-item-id="6656555472109175309"
                    data-format="0"><a href="javascript: void(0)" data-action-label="click_headline" data-tag="video_music"
                        className="article_link clearfix ">
                        <div className="item_detail">
                            <h3 className="dotdot line3">心心相印！春天里唱给总书记的歌</h3>
                            <div className="item_info">
                                <div><span className="stick_label space">置顶</span>
                                    0
                                    <span className="src space">央视网新闻</span><span className="cmt space">
                                        评论
                                        5162
                                    </span><span className="time" title="2019-02-12 10:44">15分钟前</span><span data-id="6656555472109175309"
                                        className="dislike-news fr"></span></div>
                            </div>
                        </div>
                    </a></section>
                    <section className="has_action" data-hot-time="1549939468" data-group-id="6656555472109175309" data-item-id="6656555472109175309"
                    data-format="0"><a href="javascript: void(0)" data-action-label="click_headline" data-tag="video_music"
                        className="article_link clearfix ">
                        <div className="item_detail">
                            <h3 className="dotdot line3">心心相印！春天里唱给总书记的歌</h3>
                            <div className="item_info">
                                <div><span className="stick_label space">置顶</span>
                                    0
                                    <span className="src space">央视网新闻</span><span className="cmt space">
                                        评论
                                        5162
                                    </span><span className="time" title="2019-02-12 10:44">15分钟前</span><span data-id="6656555472109175309"
                                        className="dislike-news fr"></span></div>
                            </div>
                        </div>
                    </a></section>
                    <section className="has_action" data-hot-time="1549939468" data-group-id="6656555472109175309" data-item-id="6656555472109175309"
                    data-format="0"><a href="javascript: void(0)" data-action-label="click_headline" data-tag="video_music"
                        className="article_link clearfix ">
                        <div className="item_detail">
                            <h3 className="dotdot line3">心心相印！春天里唱给总书记的歌</h3>
                            <div className="item_info">
                                <div><span className="stick_label space">置顶</span>
                                    0
                                    <span className="src space">央视网新闻</span><span className="cmt space">
                                        评论
                                        5162
                                    </span><span className="time" title="2019-02-12 10:44">15分钟前</span><span data-id="6656555472109175309"
                                        className="dislike-news fr"></span></div>
                            </div>
                        </div>
                    </a></section>
                    <section className="has_action" data-hot-time="1549939468" data-group-id="6656555472109175309" data-item-id="6656555472109175309"
                    data-format="0"><a href="javascript: void(0)" data-action-label="click_headline" data-tag="video_music"
                        className="article_link clearfix ">
                        <div className="item_detail">
                            <h3 className="dotdot line3">心心相印！春天里唱给总书记的歌</h3>
                            <div className="item_info">
                                <div><span className="stick_label space">置顶</span>
                                    0
                                    <span className="src space">央视网新闻</span><span className="cmt space">
                                        评论
                                        5162
                                    </span><span className="time" title="2019-02-12 10:44">15分钟前</span><span data-id="6656555472109175309"
                                        className="dislike-news fr"></span></div>
                            </div>
                        </div>
                    </a></section>
            </div>
            <div className="list_bottom">
                <section className="loadmoretip"><a href="#">加载中...</a></section>
            </div>
            <div>{this.props.channel}</div>
        </content>
        )
    }
}