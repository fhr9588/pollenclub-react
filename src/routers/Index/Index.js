import React , { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import { List, message, Avatar, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import Swiper from 'swiper';
import '../../../node_modules/swiper/dist/css/swiper.css';
class Index extends Component{
    constructor(prop){
        super(prop);
    }

    componentDidMount(){
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

    }



    render(){
        const data = [
            {
                title: 'Ant Design Title 1',
            },
            {
                title: 'Ant Design Title 2',
            },
            {
                title: 'Ant Design Title 3',
            },
            {
                title: 'Ant Design Title 4',
            },
        ];
        return(
            <div className="indexPage">
                <div className="swiper-container" id="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="http://clubimg.dbankcdn.com/data/attachment/portal/201802/26/100655atydzaqqcccirh7f.jpg" /></div>
                        <div className="swiper-slide"><img src="http://clubimg.dbankcdn.com/data/attachment/portal/201802/25/154018agaqkk8chts7doku.jpg" /></div>
                        <div className="swiper-slide"><img src="http://clubimg.dbankcdn.com/data/attachment/portal/201802/27/153124j6xypzy5nm3j3icu.jpg" /></div>
                        <div className="swiper-slide"><img src="http://clubimg.dbankcdn.com/data/attachment/portal/201802/15/0911138ieuwjskjjox7mtp.jpg" /></div>
                        <div className="swiper-slide"><img src="http://clubimg.dbankcdn.com/data/attachment/portal/201802/17/080845ibrb3f0svo699van.jpg"/></div>
                        <div className="swiper-slide"><img src="http://clubimg.dbankcdn.com/data/attachment/portal/201802/22/192734p335gvddujn6m50z.jpg"/></div>
                    </div>
                    {/*分页器*/}
                    <div className="swiper-pagination"></div>
                </div>



                <div className="indexPage-content">
                    <List
                        itemLayout="vertical"
                        dataSource={data}
                        renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
                    />
                </div>

            </div>
        )
    }
}
export default Index;