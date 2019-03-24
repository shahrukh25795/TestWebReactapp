import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import LogIn from "./login";
import Home from "./home";
import ProviderHandler from "./context"

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
                <Router>
                    <Switch>
                        <Route exact path="/" component={props => (localStorage.getItem("token")!== null) ? <Redirect to="/home"/> : <LogIn {...props}/>}/>
                        <Route exact path="/home" component={props => (localStorage.getItem("token")== null) ? <Redirect to="/"/> : <Home {...props}/>}/>
                    </Switch>
                </Router>
        );
    }
}