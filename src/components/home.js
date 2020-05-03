import React, { Component } from 'react'
import AddPost from './AddPost'
import Posts from './Posts';
import axios from 'axios';
import proptype from 'prop-types';
import {Redirect , Link} from 'react-router-dom'


export default class home extends Component {
    constructor(props){
        super(props)
        let status = true
         if(localStorage.getItem("token") == null){
            status = false
            this.setState({status: this.state.status = status})
            // alert(this.state.status)
        
        }
             
    }
    state={
        Posts: [],
        status : true
    
      };
      componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => this.setState({Posts: res.data}))
        .catch(err =>console.log(err));
      }
      del = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/${id}')
        .then(res => this.setState({Posts : [...this.state.Posts.filter(post => post.id !== id)]}))
        .catch(err =>console.log(err));
        
      }
      addpost =(userID,title,body)=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',{
          userID,
          title,
          body
        })
        .then(res =>this.setState({Posts:[...this.state.Posts , res.data]}))
        .catch(err =>console.log(err));
        
      }
    render()
     {
        if(this.state.status === false){
            return <Redirect to="/" />
        }
        return (
            <div>
                <Link to="/logout"><button className="btn btn-danger">Logout</button></Link>
                <br/>
                
          <AddPost addpost={this.addpost}/>
          <Posts Posts={this.state.Posts} del={this.del}/>
          
                
            </div>
        )
    }
}
home.proptype={
    addpost: proptype.func.isRequired,
    posts: proptype.array.isRequired,
    del: proptype.func.isRequired
    }