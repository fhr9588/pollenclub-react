import React ,{ Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import { List, message, Avatar, Spin, Icon } from 'antd';
import reqwest from 'reqwest';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import './Bbs.css';
class Bbs extends Component{
    constructor(prop){
        super(prop);
        this.state={
            index:0,
            data:[],
            honour:[],
            huawei:[],
            flat:[],
            wisdom:[],
            hilink:[],
            parts:[],
            terminal:[],
            hall:[],
            emui:[],
            pollen:[]


        };
    }



    componentWillMount() {
        axios.get('http://localhost:3000/BbsList.json')
            .then((data)=>{
                this.setState({data:data.data.results,
                    honour:data.data.results[0],
                    huawei:data.data.results[1],
                    flat:data.data.results[2],
                    wisdom:data.data.results[3],
                    hilink:data.data.results[4],
                    parts:data.data.results[5],
                    terminal:data.data.results[6],
                    hall:data.data.results[7],
                    emui:data.data.results[8],
                    pollen:data.data.results[9]

                },()=>{
                    console.log(this.state.honour)
                }
                )
            })

            //this.setState({index:2,aaa:2})

    }

    handleInfiniteOnLoad = () => {

    };
    honourClick=(e)=> {
        console.log(e);
        if (this.state.index != e) {
            this.setState({index: e})

            //if(this.state.index==-1){
            //    this.setState({index:1},()=>{
            //        //console.log(this.state.index,this.state.aaa)
            //    })
            //}else{
            //    this.setState({index:-1},()=>{
            //        //console.log(this.state.index)
            //    });
            //}
        }else{
            this.setState({index:-1})
        }
    }
    aaaaa=()=>{
        this.setState({index:0})
    }

    render() {
        let a=this.state.index;
        return (
            <div className="bbsPage">
                <div className="bbs-searchGroup clearfix">
                    <div className="bbs-searchGroup-left fl">
                        <Link to="/">
                        <input className="bbs-searchGroup-input" type="text" placeholder="搜索帖子..."/>
                        </Link>
                    </div>
                    <div className="bbs-searchGroup-right fr">
                        <Link to="/">
                            <Icon type="search"  />
                        </Link>
                    </div>
                </div>
                <div className="bbsPage-main">
                    <div className="allPlate" onClick={this.aaaaa}>全部板块</div>
                    <div className="plateCategory">
                        <div className="container">
                            <ul>
                                {this.state.data.map((item,index)=>{
                                    return(
                                        <li key={index}>
                                            <div className="plateCategoryGroup clearfix" onClick={this.honourClick.bind(this, index)}>
                                                <div className="plateCategory-img fl">
                                                    <img src={item.images} alt=""/>
                                                </div>
                                                <div className="plateCategory-name">
                                                    <span className="plateCategory-name-title">{item.title}</span>
                                                    <Icon className="plateCategory-Arrow fr" type={this.state.index!=index?'down':'up'} />
                                                </div>
                                                <ul className={this.state.index!=index?'none':'plateCategoryGroup-detail'}>
                                                    {item.plateCategoryGroup.map((item,index)=>{
                                                        return(
                                                            <li key={index} className="plateCategoryGroup-detail-list">
                                                                {item.map((item,index)=>{
                                                                    return(
                                                                        <Link key={index} to={item.link}>{item.name}</Link>
                                                                    )
                                                                })}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </li>

                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Bbs;