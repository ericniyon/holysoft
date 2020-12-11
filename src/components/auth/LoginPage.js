import React, {Component} from 'react'
import axios from 'axios'
import './LoginForm.css'
import { Redirect, Link } from 'react-router-dom';


export default class LoginPage extends Component{

    state={}

    handleFormSubmit = e =>{
        e.preventDefault()
        const data = {
            email: this.email,
            password: this.password
        }
        axios.post("login", data).then(
            res => {
                console.log(res.data.token)
            localStorage.setItem('token', res.data.token);
                this.setState({
                    loggedIn: true
                })
                // this.props.setUser(res.data.user)
            }
        ).catch(
            err => {
                // this.setState({
                //     message: err.response.message
                // })
            }
        )


    }

    render(){
        if(this.state.loggedIn){
            return <Redirect to={'/dashboard'} />
        }

        let error =''
        if(this.state.massage){
            <div>
                {this.state.message}
            </div>
        }

        return (
            <body>
            <section className="material-half-bg">
                <div className="cover"></div>
            </section>
            <section className="login-content">
                <div className="">
                    <h1 className="text-center ">HolySoft EMP</h1>
                    {/*<p className="text-center ml3"><b> System</b></p>*/}
                </div>
                <div className="login-box2">
                    <form className="login-form" onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                        <input className="form-item"  name="email" type="email" onChange={e => this.email = e.target.value}/>
                        </div>
                        <div className="form-group">
                        <input className="form-item"  name="password" type="password" onChange={e => this.password = e.target.value}/>
                        </div>
                        <div className="form-group btn-container">
                            <input className="form-submit" value="SUBMIT" type="submit" />
                        </div>
                    </form>
                </div>
            </section>
            </body>
            )
    }
  }



