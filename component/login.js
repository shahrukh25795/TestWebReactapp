import React from "react";

//import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

export default class LogIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }

    handleSignIn(e){
        e.preventDefault();
        var self=this;
        $.ajax({
            url: "https://reqres.in/api/login",
            type: "POST",
            data: {
                email: this.state.email,
                password: this.state.password
            },
            success: function(response){
                localStorage.setItem("token",response.token);
                self.props.history.push("/home")
            }
        });
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