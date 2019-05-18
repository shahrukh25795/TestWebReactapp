import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import '../assets/css/main.css'
import FacebookLogin from 'react-facebook-login';
export default class SocialAuth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
        this.smsLogin=this.smsLogin.bind(this)
        this.emailLogin=this.emailLogin.bind(this)
        this.loginCallback=this.loginCallback.bind(this)
    }
    componentDidMount(){
       
    }

    responseGoogle(response){
        console.log("google console",response);
    }

    responseFacebook(response){
        console.log("facebook console",response);
    }

    handleOtp(e){
        e.preventDefault()
        this.emailLogin();
    }
  

  // login callback
  loginCallback(response) {
   console.log(response)
  }

  // phone form submission handler
  smsLogin() {
    window.AccountKit.login(
      'PHONE', 
      {countryCode: "+91", phoneNumber: "7838334284"}, // will use default values if not specified
      this.loginCallback
    );
  }


  // email form submission handler
  emailLogin() {
    window.AccountKit.login(
      'EMAIL',
      {emailAddress: 'shahrukh25795@gmail.com'},
      this.loginCallback
    );
  }

    render(){
        return(
            <div className="col-md-4 col-md-offset-4 app">
            <GoogleLogin
                clientId="605647662967-1t8v8ho5ammcd06r6m93cphd03792jn6.apps.googleusercontent.com"
                buttonText="Login with Google"
                className="google"
                onSuccess={this.responseGoogle.bind(this)}
                onFailure={this.responseGoogle.bind(this)}
            />
            <FacebookLogin
                appId="605721616600484"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook.bind(this)}
                cssClass="facebook"
                icon="fa-facebook"
                disableMobileRedirect ="true"
                isMobile= "true"
                />
                
                    <button type="button" onClick={this.handleOtp.bind(this)}>shahrukh</button>
                
            </div>
        );
    }
}