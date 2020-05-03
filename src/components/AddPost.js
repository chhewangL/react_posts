import React from 'react';
class AddPost extends React.Component{
    state = {
        userID: '',
        title: '',
        body : ''
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit =(e) =>{
        e.preventDefault();
        this.props.addpost(this.state.userID , this.state.title , this.state.body);
        this.setState({userID :'',
        title: '',
        body:''
    
    })


    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit} style={{display: 'block'}}>
                <input type="text" name="userID" placeholder="userid..." value={this.state.userID}
                    onChange={this.onChange}
                    />
                    <input type="text" name="title" placeholder="title..." value={this.state.title}
                    onChange={this.onChange}
                    />
                    <textarea name="body" placeholder="title..." value={this.state.body} onChange={this.onChange}> </textarea>
                    <button type="submit" >submit</button>

                </form>
            </div>
        )
    }
}
export default AddPost