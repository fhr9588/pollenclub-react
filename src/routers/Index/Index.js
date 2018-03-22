import React , { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import { List, message, Avatar, Spin, BackTop } from 'antd';
import reqwest from 'reqwest';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import Swiper from 'swiper';
import '../../../node_modules/swiper/dist/css/swiper.css';
import './index.css';
class Index extends Component{
    constructor(prop){
        super(prop);
        this.state = {
            data:[],
            banner:[],
            title:'花粉俱乐部-华为手机|荣耀手机官方论坛',
            loading: false,
            hasMore: true,
            jump:true
        }
    }

        //把跨域封装成一个方法,现在是访问本地json文件,需要注意的就是要用callback
    getData = (callback) => {
        axios.get('indexList.json')
            .then((res)=>{
                callback(res.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    };

    //在组件出现前,DOM还没有渲染到文档里时的生命周期函数
    componentWillMount() {
        //轮播图动态获取的接口,需要注意的就是在修改完数据以后在去执行swiper以及列表跨域的方法
        axios.get('indexBanner.json')
            .then((res)=>{
                this.setState({banner:res.data[0].images},()=>{
                    //对轮播图swiper进行配置
                    var mySwiper1=new Swiper ('#swiper', {
                        direction: 'horizontal',
                        loop: true,

                        //自动切换
                        autoplay:true,

                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                            bulletElement : 'div',                   //设置分页器小点的元素
                            bulletClass:'swiper-page',              //设置分页器小点的类名
                            bulletActiveClass:'swiper-page-active' //设置分页器小点在激活时的类名
                        }
                    });
                })
            })
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
    aaa=(e)=>{
        //this.setState({jump:false},()=>{
        //    console.log(e.target.dataset);
        //})
        console.log(e.target.dataset);
        //window.location.href='http://www.baidu.com'
        //this.handle=(e)=>{
        //    e.preventDefault();
        //    console.log('点击了')
        //}
        //this.props.history.push('/fff')
    }






    render(){
        return(
        <div className="indexPage">
            <BackTop>
                <div className="ant-back-top-inner"></div>
            </BackTop>
                <div className="swiper-container" id="swiper">
                    <div className="swiper-wrapper">
                        {this.state.banner.map((item)=>{

                            return(
                                <div key={item.substring(61,83)} className="swiper-slide"><img src={item} /></div>
                            )
                        })}
                    </div>
                    {/*分页器*/}
                    <div className="swiper-pagination"></div>
                </div>

            <div className="index-list">
                <div className="index-list-container">
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
                 <div className="index-list-item">
                    <Link to="/app">
                    <div className="article-title">{item.title}</div>
                    <div className="oneGroup">
                        <img src={item.images[0]} alt=""/>
                    </div>
                    <div className="index-list-item-footer clearfix">
                    <div className="footer-left fl">
                        <div className="fl" style={{marginTop:'0.036rem'}}>
                            <img src={item.portrait} alt=""/>
                        </div>
                        <span className="userName fl">{item.userName}</span>
                        </div>
                        <div className="footer-right fr">
                           <img className="footer-see fr" src="http://clubstyle.dbankcdn.com/template/hw_fans/touch/common/style/images/ic_browse_ash.png" alt=""/>
                           <span className="footer-Num fr">{item.seeNum}</span>
                           <span className="footer-time fr">{item.time}</span>
                        </div>
                    </div>
                    </Link>
                </div>
                :
                (item.type=='twoPhotos'?
                    <div className="index-list-item">
                        <Link to="/app">
                        <div className="article-title">{item.title}</div>
                        <div className="twoGroup clearfix">
                            <img className="fl" src={item.images[0]} alt=""/>
                            <img className="fr" src={item.images[1]} alt=""/>
                        </div>
                    <div className="index-list-item-footer clearfix">
                    <div className="footer-left fl">
                        <div className="fl">
                            <img src={item.portrait} alt=""/>
                        </div>
                        <span className="userName fl">{item.userName}</span>
                        </div>
                        <div className="footer-right fr">
                           <img className="footer-see fr" src="http://clubstyle.dbankcdn.com/template/hw_fans/touch/common/style/images/ic_browse_ash.png" alt=""/>
                           <span className="footer-Num fr">{item.seeNum}</span>
                           <span className="footer-time fr">{item.time}</span>
                        </div>
                    </div>
                    </Link>
                    </div>
                    :
                    (item.type=='threePhotos' ?
                        <div className="index-list-item">
                        <Link to="/app">
                            <div className="article-title">{item.title}</div>
                            <div className="threeGroup clearfix">
                                <img className="fl"  src={item.images[0]} alt=""/>
                                <img className="fl"  src={item.images[1]} alt=""/>
                                <img className="fl"  src={item.images[2]} alt=""/>
                            </div>
                    <div className="index-list-item-footer clearfix">
                    <div className="footer-left fl">
                        <div className="fl">
                            <img src={item.portrait} alt=""/>
                        </div>
                        <span className="userName fl">{item.userName}</span>
                        </div>
                        <div className="footer-right fr">
                           <img className="footer-see fr" src="http://clubstyle.dbankcdn.com/template/hw_fans/touch/common/style/images/ic_browse_ash.png" alt=""/>
                           <span className="footer-Num fr">{item.seeNum}</span>
                           <span className="footer-time fr">{item.time}</span>
                        </div>
                    </div>
                    </Link>
                        </div>
                         :
                    (item.type=='noPhotos' ?
                         <div className="index-list-item">
                         <Link to="/app">
                            <div className="article-title">{item.title}</div>
                            <div className="noGroup" >{item.textTitle}</div>
                    <div className="index-list-item-footer clearfix">
                    <div className="footer-left fl">
                        <div className="fl">
                            <img src={item.portrait} alt=""/>
                        </div>
                        <span className="userName fl">{item.userName}</span>
                        </div>
                        <div className="footer-right fr">
                           <img className="footer-see fr" src="http://clubstyle.dbankcdn.com/template/hw_fans/touch/common/style/images/ic_browse_ash.png" alt=""/>
                           <span className="footer-Num fr">{item.seeNum}</span>
                           <span className="footer-time fr">{item.time}</span>
                        </div>
                    </div>
                    </Link>
                        </div>
                        :
                        <div className="index-list-item">
                        <Link to="/" className="clearfix">
                        <div className="content-left fl">
                            <div className="article-title">{item.title}</div>
                            <div className="index-list-item-footer clearfix">
                                <div className="footer-left fl">
                                    <div className="fl">
                                        <img onClick={this.aaa} data-num="111" src={item.portrait} alt=""/>
                                    </div>
                                    <span className="userName fl">{item.userName}</span>
                                    </div>
                                <div className="footer-right fr">
                                    <img className="footer-see fr" src="http://clubstyle.dbankcdn.com/template/hw_fans/touch/common/style/images/ic_browse_ash.png" alt=""/>
                                    <span className="footer-Num fr">{item.seeNum}</span>
                                    <span className="footer-time fr">{item.time}</span>
                                </div>
                            </div>
                        </div>
                        <div className="photos-right fr">
                            <div className="rightGroup">
                                <img src={item.images} alt=""/>
                            </div>
                        </div>
                        </Link>
                        </div>

                    )
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
        )
    }
}
export default Index;