import React from "react";
import '../assets/css/main.css'
//import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list: "hello shahrukh"
        }
    }

    handleSignout(e){
        alert()
        localStorage.removeItem("key");
        window.open("/","_self")
    }

    render(){
        return(
            <div className="app">
                <h1>hello shahrukh</h1>
                <button type="button" className="btn btn-success" onClick={this.handleSignout.bind(this)}>Sign out</button>
            </div>
        )
    }
}