/**
 * Created by lenovo on 2018/9/16.
 */
import React,{ Component } from 'react';
import { Link }from'react-router-dom'

export default class Menu extends Component{
    render(){
        return (
           <nav id="menu">
               <Link to="/" className="iconfont icon-dianhua">首页</Link>
               <Link to="/course" className="iconfont icon-dianhua">课程安排</Link>
               <Link to="/lecturer" className="iconfont icon-dianhua">讲师团队</Link>
           </nav>
        )
    }
}