class Xmenu extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        return (
            <div className="top_menu_bar ">
                <div className="top_menu_more">
                    <div className="list_shadow"></div><a className="more_btn" href="javascript:void(0)"><span className="cross"></span></a>
                </div>
                <div className="top_menu_list"><a href="javascript:void(0)" data-channel="__all__" data-query="channel=__all__" className="btn cur">推荐</a><a
                        href="javascript:void(0)" data-channel="video" data-query="channel=video" className="btn">视频</a><a href="javascript:void(0)"
                        data-channel="news_hot" data-query="channel=news_hot" className="btn">热点</a><a href="javascript:void(0)"
                        data-channel="news_society" data-query="channel=news_society" className="btn">社会</a><a href="javascript:void(0)"
                        data-channel="news_entertainment" data-query="channel=news_entertainment" className="btn">娱乐</a><a href="javascript:void(0)"
                        data-channel="news_military" data-query="channel=news_military" className="btn">军事</a><a href="javascript:void(0)"
                        data-channel="news_tech" data-query="channel=news_tech" className="btn">科技</a><a href="javascript:void(0)"
                        data-channel="news_car" data-query="channel=news_car" className="btn">汽车</a><a href="javascript:void(0)"
                        data-channel="news_sports" data-query="channel=news_sports" className="btn">体育</a><a href="javascript:void(0)"
                        data-channel="news_finance" data-query="channel=news_finance" className="btn">财经</a><a href="javascript:void(0)"
                        data-channel="news_world" data-query="channel=news_world" className="btn">国际</a><a href="javascript:void(0)"
                        data-channel="news_fashion" data-query="channel=news_fashion" className="btn">时尚</a></div>
            </div>
        )
    }
}