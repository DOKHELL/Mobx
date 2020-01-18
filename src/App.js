import React, {Component} from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import {observer} from "mobx-react";
import Login from "./pages/Login";
import Header from "./components/Header";
import Registration from "./pages/Registration";
import Home from "./pages/Home";

@withRouter
@observer
class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Registration}/>
                <Route path='/' component={Home}/>
            </Switch>
        </div>
    )
  }

}

export default App
