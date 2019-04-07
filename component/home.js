import React from "react";
import '../assets/css/main.css'
//import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        this.getData()
    }

    handleSignout(e){
        localStorage.removeItem("token");
        window.open("/","_self")
    }

    getData(){
        var self=this;
        $.ajax({
            url: "https://reqres.in/api/users?page=1",
            type: "GET",
            success: function(response){
                console.log(response);
                self.setState({list: response.data})
            }
        });
    }

    render(){
        return(
            <div className="col-md-4 col-md-offset-4 app">
            <table className="table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Photo</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.list.map((i,index)=>{
                        return(
                            <tr key={index}>
                            <td>{i.id}</td>
                            <td><img src={i.avatar} height="100px" width="100px"/></td>
                            <td>{i.first_name}</td>
                            <td>{i.last_name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
                <button type="button" className="btn btn-info" onClick={this.handleSignout.bind(this)}>Sign out</button>
            </div>
        )
    }
}