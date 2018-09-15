import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './view/home/index'
import Login from './view/login/index'
import Worke from './view/work/index'
import Message from './view/message/index'
import Course from './view/course/index'
import Lecturer from './view/lecturer/index'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/work" exact component={Worke}/>
        <Route path="/message" exact component={Message}/>
        <Route path="/course" exact component={Course}/>
        <Route path="/lecturer" exact component={Lecturer}/>
      </Switch>
    );
  }
}

export default App;
