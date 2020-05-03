import React from 'react';
import Postitem from './Postitem';
class Posts extends React.Component{
    render(){
        return this.props.Posts.map((post) => (
<Postitem key={post.id} post={post} del={this.props.del}/>
        ))
    }
}
export default Posts;