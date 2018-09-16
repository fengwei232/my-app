/**
 * Created by lenovo on 2018/9/15.
 */
import React,{ Component } from 'react';
import { Link }from'react-router-dom'

export default class Footer extends Component{
    render(){
        return (
            <footer id="footer">
                <div className="footer-nav">
                    <p className="miaov-content clear">
                        <a className="iconfont icon-Group-" href="www.baidu.com"></a>
                        <a className="iconfont icon-dianhua" href="www.baidu.com"></a>
                    </p>
                    <nav className="clear">
                        <a href="https://www.miaov.com/">首页</a>
                        <a href="https://study.miaov.com/study/classes/index">课程安排</a>
                        <a href="https://miaov.com/index.php/example/exampleList">学员作品</a>
                        <a href="https://study.miaov.com/study">视频教程</a>
                        <a href="https://miaov.com/index.php/about/index">关于我们</a>
                        <a href="https://miaov.com/index.php/Message/index">在线留言</a>
                        <a href="https://miaov.com/index.php/Question/index">常见问题</a>
                    </nav>
                </div>
                <p className="footer-copy">京ICQbei备086533434号 2018.miaov.com</p>
            </footer>
        )
    }
}