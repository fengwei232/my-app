import React,{ Component } from 'react';
import Header from '../../common/component/header'
import Footer from '../../common/component/footer'
import Menu from '../../common/component/menu'
let tabImg =[
    require("../../image/a.png"),
    require("../../image/b.png"),
    require("../../image/c.png"),
    require("../../image/d.png")
]

export default class Home extends Component{
    render(){
        return(
            <div>
                <Header
                    login={true}
                />
                <Menu/>
                {/*<div className="page">
                    <div className="page-conent"></div>
                    <Footer/>
                </div*/}>
                <div className="page">
                    <div className="tab banner">
                        <ul className="tabList">
                            {tabImg.map(( item, index)=>{
                                return(
                                    <li key="index">
                                        <img src={ item }/>
                                    </li>
                                )
                            })}
                        </ul>
                        <nav className="picNav">
                            {tabImg.map(( item, index)=>{
                                return(
                                    <span
                                        key="index"
                                        className={index===0?"active":""}>

                                </span>
                                )
                            })}
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
