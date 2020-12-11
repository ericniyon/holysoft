import React, { Component, Fragment } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'


class EmployeeList extends Component {

    state = {
        employees: []
    }

    componentDidMount(){
        axios.get('get_employees')
            .then(res => {
                console.log(res.data)

                this.setState({
                    employees: res.data.employees

                })
            })
    }
    render(){

        const {employees} = this.state
        const UsersList = employees.length ? (
            employees.map((user) => {
                return(
                           <div className="col-md-2">
                               <div className="card" key={user.id}>
                                   <div className="row mt-5">
                                       <div className="col-md-2 card-image card-img">
                                           <img src="/images/admin.png" className='emp-emp' />
                                       </div>
                                       <div className="col-md-9 card-stacked offset-1">
                                           <div className="card-content">
                                               <p>{user.owner.first_name}  {user.owner.last_name} </p>
                                           </div>
                                   </div>

                                       <Link to={`/@emp-profile/${user.id}`}>View more</Link>

                                   </div>
                               </div>
                           </div>
                )
            })
        ) : (

        <button className="btn btn-primary" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        )
        return(

            <div className='container'>
                <div className="row">
                        {UsersList}
                </div>
            </div>

        )
    }
}



export default EmployeeList