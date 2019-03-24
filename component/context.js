import React, { Component } from "react";

export const ContextHandler = React.createContext();
export default class ProviderHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            access_token: "",
            profile_data: "",
        };
    }

    componentDidMount() {

    }

    handleSignIn(name, password) {
        var formData = new FormData();
        formData.append("email", name);
        formData.append("password", password);
        return axios({
            method: "POST",
            url: "https://reqres.in/api/login",
            data: formData,
            responseType: "json"
        }).then((res) => {
            if (res.data.status.code == 200) {
                Cookies.set("token", res.data.token);
            }
            return res;
        }).catch(function (error) {
            console.log(error)
        });
    }

    handleSignOut() {
        Cookies.remove("token");
    }


    getApi(method, api_url) {
        return axios({
            method: method,
            url: "https://reqres.in/api/" + api_url,
            responseType: 'json',
        }).then(function (res) {
            if (res.data.status.code == 200) {
                console.log("success")
            }
            return res
        }).catch(function (error) {
            console.log(error)
        });
    }

    postApi(method, api_url, formdata) {
        return axios({
            method: method,
            url: "https://reqres.in/api/"+ api_url,
            data: formdata,
            responseType: 'json',
        }).then(function (res) {
            if (res.data.status.code == 200) {
                console.log("success")
            }
            return res;
        }).catch(function (error) {
            console.log(error)
        });
    }

    render() {
        return (
        <React.Fragment>
            <ContextHandler.Provider
                value={{
                    signIn: (name, password) => this.handleSignIn(name, password),
                    signOut: () => this.handleSignOut(),
                    getApi: (method, api_url) => this.getApi(method, api_url),
                    postApi: (method, api_url, formdata) => this.postApi(method, api_url, formdata),
                }}
            >
            </ContextHandler.Provider>
        </React.Fragment>);
    }
}