/**
 * Created by lenovo on 2018/9/15.
 */
import React,{ Component } from 'react';
import { Link }from'react-router-dom'

export default class Header extends Component{
    render(){
        let { menu, back, login }=this.props
        return (
            <header id="header">
                { menu ? <a href="javascript:;" className="header-btn-left iconfont icon-liebiao" ></a>:""}
                { back ? <a href="javascript:;" className="header-btn-left iconfont icon-liebiao" ></a>:""}
                {/*<span className="header-btn-right header-user">fengwei</span>*/}
                <img id="login" src={require('../../image/logo.png')} />
                { login ? <Link to="/login" className="header-btn-right iconfont icon-renwu"/>:""}
            </header>
        )
    }
}