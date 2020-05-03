import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Login extends Component {
    state= {
        username : '',
        password : '',
        LoggedIn : false
    }
    onChange = (e) =>{
        this.setState({
        [e.target.name] : e.target.value})
    }
    onSubmit =(e) =>{
        e.preventDefault();
        //login logic
        const {username , password} = this.state;
        if(username === "" || password === ""){
            alert ("username or password is empty");
            return false;
        }
        else if( username !== "auth" && password !== "auth"){
            alert ("username or password is incorrect");
            return false;
        }
        else{
            localStorage.setItem("token","jhgashdgjashasdas");
            this.setState({
                LoggedIn : true

            }
            
            )

            
        }
        

    }
    render() {
        if(this.state.LoggedIn){
            return <Redirect to="/home" />
        }
        return (
            <div>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" placeholder="username" name="username" className="form-control" onChange={this.onChange}/>
                    <input type="password" placeholder="password" name="password" className="form-control" onChange={this.onChange}/>
                    <button type="submit" className="btn btn-primary">Login</button>

                </div>

            </form>
            </div>
        )
    }
}
