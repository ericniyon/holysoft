import React, {Component} from 'react';
import axios from 'axios'


class SingleEmployee extends Component {

    state = {
        user: null
    }

    componentDidMount(){
        let id = this.props.match.params.user_id
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
    }

    render(){
        const user = this.state.user ? (
            <div className="user">
                <h4 className="center">{this.state.user.name}</h4>
                <p>{this.state.user.address.street}</p>
            </div>
        ) : (
            <div className="container">Loading users......</div>
        )
        return(
            <div className="container">
                <h4>{user}</h4>
            </div>
        )
    }
}

export default SingleEmployee