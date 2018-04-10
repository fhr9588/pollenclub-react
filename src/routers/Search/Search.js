import React , {Component} from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import {Icon} from 'antd';
import './Search.css';
class Search extends Component{
    constructor(prop){
        super(prop);
        this.state={
            id:''
        };

    }
    componentDidMount(){
        let id=this.props.match.params.id;
        this.setState({
            id:id
        },()=>{
            console.log(this.state.id)
        });
    }
    render(){
        return(
            <div className="searchPage">
                <div className="search-main-title">搜索</div>
                {this.state.id!='circle' ?
                    <div className="bbsSearch">
                        <div className="bbs-searchGroup clearfix">
                            <div className="bbs-searchGroup-left fl">
                                <input className="bbs-searchGroup-input" type="text" placeholder="搜索帖子..."/>
                            </div>
                            <div className="bbs-searchGroup-right fr">
                                <Link to="/search/bb">
                                    <Icon type="search"  />
                                </Link>
                            </div>
                        </div>
                        <div className="search-label">
                            <div className="search-label-container">
                                <div className="search-label-title">大家都在搜:</div>
                                <div className="search-label-group">
                                    <Link to="/" className="search-label-item">荣耀V10</Link>
                                    <Link to="/" className="search-label-item">Mate10</Link>
                                    <Link to="/" className="search-label-item">荣耀9青春版</Link>
                                    <Link to="/" className="search-label-item">荣耀畅玩7X</Link>
                                    <Link to="/" className="search-label-item">荣耀9</Link>
                                    <Link to="/" className="search-label-item">Nova 2S</Link>
                                    <Link to="/" className="search-label-item">P10</Link>
                                    <Link to="/" className="search-label-item">Mate9</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="circleSearch">
                        <div className="circle-searchGroup clearfix">
                            <div className="circle-searchGroup-left fl">
                                    <input className="circle-searchGroup-input" type="text" placeholder="搜索圈子..."/>
                            </div>
                            <div className="circle-searchGroup-right fr">
                                <Link to="/">
                                    <Icon type="search"  />
                                </Link>
                            </div>
                        </div>
                        <div className="circleSearch-nullSearch">
                            <div className="circleSearch-nullSearch-img">
                                <img src="http://clubstyle.dbankcdn.com/template/hw_fans/touch/common/style/images/ic_search.png" alt=""/>
                            </div>
                            <p>没有匹配的帖子</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default Search;