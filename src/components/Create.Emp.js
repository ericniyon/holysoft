import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from "react-router-dom";

export default class NewEmployee extends Component{

    state={
        id:''
    }

    handleSubmit = e => {
        e.preventDefault()
        const data = {
            first_name:this.first_name,
            last_name:this.last_name,
            email:this.email,
            phone:this.phone,
        }
        const config ={
            headers:{
                Authorization:`Token ${localStorage.getItem('token')}`
            }
            
        }
        
        axios.post("create_employee", data, config).then(
            res => {
                localStorage.setItem('token', res.data.token)
                console.log(res)
                this.props.history.push('/@employee-list')
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
      }
    render(){
        return(
            <div>
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Create Employee</h2>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="card container">
                        <div className="card-body">
                            <form onSubmit={ this.handleSubmit } className={'mb-3'}>
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" className="form-control" onChange={e => this.first_name = e.target.value} />

                                <label htmlFor="phone">Last Name</label>
                                <input type="text" className="form-control" onChange={e => this.last_name = e.target.value} />

                                <label htmlFor="phone">Phone Number</label>
                                <input type="text" className="form-control" onChange= {e => this.phone = e.target.value} />

                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" onChange={e => this.email = e.target.value} />
                                {/* <label>User type</label>
                <input type="text" className="utype" onChange={this.handleChange} /> */}
                                <button type={'submit'} className={'btn btn-primary'}>submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}