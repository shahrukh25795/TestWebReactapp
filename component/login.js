import React from "react";

//import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

export default class LogIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list: {
                email_data: "admin@gmail.com",
                pass_data: "adminpass",
            },
            email: "",
            password: "",
        }
    }

    handleSignIn(e){
        e.preventDefault();
        if(this.state.list.email_data==this.state.email && this.state.list.pass_data==this.state.password){
            localStorage.setItem("key", JSON.stringify(this.state.list));
            //window.open("/home", "_self");
            this.props.history.push("/home")
        }
        else{
            alert("please provide valid credentials");
        }
    }

    render(){
        return(
            <div className="col-md-4 col-md-offset-4 app">
            <h1 style={{textAlign:"center"}}>LogIn</h1>
                <form className='form-horizontal' onSubmit={this.handleSignIn.bind(this)}>
                    <div className="from-group">
                        <label className="control-label" htmlFor="email">Email</label>
                        <input className = "form-control" id="email" type="email" onChange={(e)=>{this.setState({email: e.target.value})}}/>
                    </div>
                    <div className="from-group">
                        <label className="control-label" htmlFor="password">Password</label>
                        <input className = "form-control" id="password" type="text" onChange={(e)=>{this.setState({password: e.target.value})}}/>
                    </div>
                    <div className="from-group">
                        <button className = "col-md-12 btn btn-primary login" id="submit" type="submit">LogIn</button>
                    </div>
                </form>
            </div>
        );
    }
}