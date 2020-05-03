import React from 'react';
class Postitem extends React.Component{
    
    render(){
        const {id , title} =this.props.post;
        return(
            <div style={postStyle}>
                
                <h3>{title}</h3>
                <h3>{id}</h3>


                <p>{this.props.post.body}
                <button style={btn} onClick={this.props.del.bind(this, id)}>x</button>
                </p>
                  
               

            </div>

        )
    }
    
}

const postStyle ={
       border: '1px #444 solid',
       marginBottom : '3px',
       borderRadius : '3px' 
}
const btn ={
    background: 'red',
    color: 'black',
    border : '2px black solid',
    borderRadius : '50%',
    marginRight: '15px',
    padding : '2px',
    cursor : 'pointer',
    float :'right'
}

export default Postitem;
