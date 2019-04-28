import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import '../assets/css/main.css'
import FacebookLogin from 'react-facebook-login';
export default class SocialAuth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    responseGoogle(response){
        console.log("google console",response);
    }

    responseFacebook(response){
        console.log("facebook console",response);
    }

    render(){
        return(
            <div className="col-md-4 col-md-offset-4 app">
            <GoogleLogin
                clientId="605647662967-1t8v8ho5ammcd06r6m93cphd03792jn6.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle.bind(this)}
                onFailure={this.responseGoogle.bind(this)}
            />
            <FacebookLogin
                appId="605721616600484"
                autoLoad={false}
                fields="name,email,picture"
                buttonText="Login with facebook"
                callback={this.responseFacebook.bind(this)}
                cssClass="facebook"
                icon="fa-facebook"
                />
            </div>
        );
    }
}