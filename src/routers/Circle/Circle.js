import React , { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import { List, message, Avatar, Spin, BackTop, Icon } from 'antd';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import './Circle.css';
class Circle extends Component{
    constructor(prop){
        super(prop);
        this.state={
            data:[],
            title:'圈圈-花粉兴趣圈-华为花粉俱乐部',
            loading: false,
            hasMore: true,
        };
    }

    //把跨域封装成一个方法,现在是访问本地json文件,需要注意的就是要用callback
    getData = (callback) => {
        axios.get('http://localhost:3000/circleList.json')
            .then((res)=>{
                callback(res.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    };


    componentWillMount(){
        this.getData((res) => {
            this.setState({
                data: res.results
            });
        });
    }



    componentDidMount(){
        //动态修改网页title
        document.title=this.state.title;
    }



    handleInfiniteOnLoad = () => {
        //用来判断是否还有数据加载,没有数据进行用户提示.
        this.getData((res) => {
            let update=res.results;
            if(update==''){
                message.warning('您已到底儿啦');
                this.setState({
                    hasMore: false,
                    loading: false
                });
                return
            }

        });
        let data = this.state.data;
        this.setState({
            loading: true
        });
        this.getData((res) => {
            data = data.concat(res.results);
            this.setState({
                data,
                loading: false
            });
        });
    };






    render(){
        return(
            <div className="circlePage">
                <BackTop>
                    <div className="ant-back-top-inner"></div>
                </BackTop>
                <div className="circle-searchGroup clearfix">
                    <div className="circle-searchGroup-left fl">
                        <Link to="/">
                            <input className="circle-searchGroup-input" type="text" placeholder="搜索圈子..."/>
                        </Link>
                    </div>
                    <div className="circle-searchGroup-right fr">
                        <Link to="/">
                            <Icon type="search"  />
                        </Link>
                    </div>
                </div>
            <div className="circlePage-main">
                <div className="hotCircle">热门圈子</div>
                <div className="slideClassification">
                    <div className="slideClassification-shade">
                        <Link className="slideClassification-item" to="/">
                            <div className="slideClassification-item-img">
                            <img src="http://clubimg.dbankcdn.com/data/attachment/group/47/group_1006_icon.png" alt=""/>
                            </div>
                            <div className="slideClassification-item-name">极客大本营</div>
                            <div className="slideClassification-item-num">88880人</div>
                        </Link>
                        <Link className="slideClassification-item" to="/">
                            <div className="slideClassification-item-img">
                                <img src="http://clubimg.dbankcdn.com/data/attachment/group/47/group_1006_icon.png" alt=""/>
                            </div>
                            <div className="slideClassification-item-name">极客大本营</div>
                            <div className="slideClassification-item-num">88880人</div>
                        </Link>
                        <Link className="slideClassification-item" to="/">
                            <div className="slideClassification-item-img">
                                <img src="http://clubimg.dbankcdn.com/data/attachment/group/47/group_1006_icon.png" alt=""/>
                            </div>
                            <div className="slideClassification-item-name">极客大本营</div>
                            <div className="slideClassification-item-num">88880人</div>
                        </Link>
                        <Link className="slideClassification-item" to="/">
                            <div className="slideClassification-item-img">
                                <img src="http://clubimg.dbankcdn.com/data/attachment/group/47/group_1006_icon.png" alt=""/>
                            </div>
                            <div className="slideClassification-item-name">极客大本营</div>
                            <div className="slideClassification-item-num">88880人</div>
                        </Link>
                        <Link className="slideClassification-item" to="/">
                            <div className="slideClassification-item-img">
                                <img src="http://clubimg.dbankcdn.com/data/attachment/group/47/group_1006_icon.png" alt=""/>
                            </div>
                            <div className="slideClassification-item-name">极客大本营</div>
                            <div className="slideClassification-item-num">88880人</div>
                        </Link>
                        <Link className="slideClassification-item" to="/">
                            <div className="slideClassification-item-img">
                                <img src="http://clubimg.dbankcdn.com/data/attachment/group/47/group_1006_icon.png" alt=""/>
                            </div>
                            <div className="slideClassification-item-name">极客大本营</div>
                            <div className="slideClassification-item-num">88880人</div>
                        </Link>
                        <Link className="slideClassification-item" to="/">
                            <div className="slideClassification-item-img">
                                <img src="http://clubimg.dbankcdn.com/data/attachment/group/47/group_1006_icon.png" alt=""/>
                            </div>
                            <div className="slideClassification-item-name">极客大本营</div>
                            <div className="slideClassification-item-num">88880人</div>
                        </Link>
                        <Link className="slideClassification-item" to="/">
                            <div className="slideClassification-item-img">
                                <img src="http://clubimg.dbankcdn.com/data/attachment/group/47/group_1006_icon.png" alt=""/>
                            </div>
                            <div className="slideClassification-item-name">极客大本营</div>
                            <div className="slideClassification-item-num">88880人</div>
                        </Link>
                        <Link className="slideClassification-item" to="/">
                            <div className="slideClassification-item-img">
                                <img src="http://clubimg.dbankcdn.com/data/attachment/group/47/group_1006_icon.png" alt=""/>
                            </div>
                            <div className="slideClassification-item-name">极客大本营</div>
                            <div className="slideClassification-item-num">88880人</div>
                        </Link>
                        <Link className="slideClassification-item" to="/">
                            <div className="slideClassification-item-img">
                                <img src="http://clubimg.dbankcdn.com/data/attachment/group/47/group_1006_icon.png" alt=""/>
                            </div>
                            <div className="slideClassification-item-name">极客大本营</div>
                            <div className="slideClassification-item-num">88880人</div>
                        </Link>
                        <Link className="slideClassification-item" to="/">
                            <div className="slideClassification-item-img">
                                <img src="http://clubimg.dbankcdn.com/data/attachment/group/47/group_1006_icon.png" alt=""/>
                            </div>
                            <div className="slideClassification-item-name">极客大本营</div>
                            <div className="slideClassification-item-num">88880人</div>
                        </Link>
                        <Link className="slideClassification-item" to="/">
                            <div className="slideClassification-item-img">
                                <img src="http://clubimg.dbankcdn.com/data/attachment/group/47/group_1006_icon.png" alt=""/>
                            </div>
                            <div className="slideClassification-item-name">极客大本营</div>
                            <div className="slideClassification-item-num">88880人</div>
                        </Link>
                    </div>
                </div>
                <div className="line"></div>
                <div className="circle-list">
                    <div className="circle-list-container">
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={this.handleInfiniteOnLoad}
                            hasMore={!this.state.loading && this.state.hasMore}
                        >
                            <List
                                itemLayout="vertical"
                                dataSource={this.state.data}
                                renderItem={item => (
                         <List.Item key={item.id}>
              {/*此处的type判断类型说明:
                 1幅图片:onePhotos;
                 2幅图片:twoPhotos;
                 3幅图片:threePhotos;
                 没有图片:noPhotos;
                 右侧图片:rightPhotos*/}

                {item.type=='onePhotos' ?
                 <div className="circle-list-item">
                    <Link to="/app">
                    <div className="circle-list-item-title clearfix">
                                <div className="title-portrait fl">
                                    <img className="title-portrait-img" src={item.portrait} alt=""/>
                                </div>
                                <div className="circle-list-item-title-msgGroup fl">
                                    <div className="uname">{item.userName}</div>
                                    <div className="publishType">{item.publishType}</div>
                                </div>
                                <div className="grade fr">{item.grade}</div>
                            </div>
                            <div className="article-title">
                            <span className={item.state=='top'?'top':(item.state=='hot'?'hot':(item.state=='essence'?'essence':''))}></span>
                            {item.title}
                            </div>
                    <div className="oneGroup">
                        <img src={item.images[0]} alt=""/>
                    </div>
                    <div className="circle-list-item-footer clearfix">
                    <div className="footer-left fl">
                        <span className="userName fl">{item.time}</span>
                        </div>
                        <div className="footer-right fr">
                           <img className="footer-see fr" src="http://clubstyle.dbankcdn.com/template/hw_fans/touch/common/style/images/ic_browse_ash.png" alt=""/>
                           <span className="footer-Num fr">{item.seeNum}</span>
                        </div>
                    </div>
                    </Link>
                </div>
                :
                (item.type=='twoPhotos'?
                    <div className="circle-list-item">
                        <Link to="/app">
                        <div className="circle-list-item-title clearfix">
                                <div className="title-portrait fl">
                                    <img className="title-portrait-img" src={item.portrait} alt=""/>
                                </div>
                                <div className="circle-list-item-title-msgGroup fl">
                                    <div className="uname">{item.userName}</div>
                                    <div className="publishType">{item.publishType}</div>
                                </div>
                                <div className="grade fr">{item.grade}</div>
                            </div>
                            <div className="article-title">
                                <span className={item.state=='top'?'top':(item.state=='hot'?'hot':(item.state=='essence'?'essence':''))}></span>
                            {item.title}
                            </div>
                        <div className="twoGroup clearfix">
                            <img className="fl" src={item.images[0]} alt=""/>
                            <img className="fr" src={item.images[1]} alt=""/>
                        </div>
                    <div className="circle-list-item-footer clearfix">
                    <div className="footer-left fl">
                        <span className="userName fl">{item.time}</span>
                        </div>
                        <div className="footer-right fr">
                           <img className="footer-see fr" src="http://clubstyle.dbankcdn.com/template/hw_fans/touch/common/style/images/ic_browse_ash.png" alt=""/>
                           <span className="footer-Num fr">{item.seeNum}</span>
                        </div>
                    </div>
                    </Link>
                    </div>
                    :
                    (item.type=='threePhotos' ?
                        <div className="circle-list-item">
                        <Link to="/app">
                            <div className="circle-list-item-title clearfix">
                                <div className="title-portrait fl">
                                    <img className="title-portrait-img" src={item.portrait} alt=""/>
                                </div>
                                <div className="circle-list-item-title-msgGroup fl">
                                    <div className="uname">{item.userName}</div>
                                    <div className="publishType">{item.publishType}</div>
                                </div>
                                <div className="grade fr">{item.grade}</div>
                            </div>
                            <div className="article-title">
                                <span className={item.state=='top'?'top':(item.state=='hot'?'hot':(item.state=='essence'?'essence':''))}></span>
                            {item.title}
                            </div>
                            <div className="threeGroup clearfix">
                                <img className="fl"  src={item.images[0]} alt=""/>
                                <img className="fl"  src={item.images[1]} alt=""/>
                                <img className="fl"  src={item.images[2]} alt=""/>
                            </div>
                    <div className="circle-list-item-footer clearfix">
                    <div className="footer-left fl">
                        <div className="fl">
                            {/*<img src={item.portrait} alt=""/>*/}
                        </div>
                        <span className="userName fl">{item.time}</span>
                        </div>
                        <div className="footer-right fr">
                           <img className="footer-see fr" src="http://clubstyle.dbankcdn.com/template/hw_fans/touch/common/style/images/ic_browse_ash.png" alt=""/>
                           <span className="footer-Num fr">{item.seeNum}</span>
                           {/*<span className="footer-time fr">{item.time}</span>*/}
                        </div>
                    </div>
                    </Link>
                        </div>
                         :
                         <div className="circle-list-item">
                         <Link to="/app">
                            <div className="circle-list-item-title clearfix">
                                <div className="title-portrait fl">
                                    <img className="title-portrait-img" src={item.portrait} alt=""/>
                                </div>
                                <div className="circle-list-item-title-msgGroup fl">
                                    <div className="uname">{item.userName}</div>
                                    <div className="publishType">{item.publishType}</div>
                                </div>
                                <div className="grade fr">{item.grade}</div>
                            </div>
                            <div className="article-title">
                                <span className={item.state=='top'?'top':(item.state=='hot'?'hot':(item.state=='essence'?'essence':''))}></span>
                            {item.title}
                            </div>
                            <div className="noGroup" >{item.textTitle}</div>
                    <div className="circle-list-item-footer clearfix">
                    <div className="footer-left fl">
                        <span className="userName fl">{item.time}</span>
                        </div>
                        <div className="footer-right fr">
                           <img className="footer-see fr" src="http://clubstyle.dbankcdn.com/template/hw_fans/touch/common/style/images/ic_browse_ash.png" alt=""/>
                           <span className="footer-Num fr">{item.seeNum}</span>
                        </div>
                    </div>
                    </Link>
                        </div>

                    )
                )
                }


              </List.Item>

            )}
                            >
                                {this.state.loading && this.state.hasMore && <Spin tip="加载中" className="demo-loading" />}
                            </List>
                        </InfiniteScroll>
                    </div>
                </div>

            </div>
            </div>
        )
    }
}
export default Circle;