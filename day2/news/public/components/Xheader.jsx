class Xheader extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        return (
            <header id="indexHeader" className="index--toutiaoribao">
                <div className="top_bar">
                    <div className="abs_m"><a href="#" className="refresh_title btn"></a>
                        <div className="refreshBtn-container "><i className="refresh_btn"></i></div>
                    </div>
                    <div className="abs_l"><a href="javascript:;" className="msg-box">
                            <div className="circle"></div>
                        </a></div>
                    <div className="abs_r"><a href="https://m.toutiao.com/search/?need_open_window=1" className="btn search"></a></div>
                </div>
            </header>
        )
    }
}