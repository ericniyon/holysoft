import React, {Component} from 'react'
import axios from 'axios'

import { Redirect, Link } from 'react-router-dom';


export default class LoginForm extends Component{

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

        return (
            <body className={'login-body'}>

            <div className="container">
                <div className="{card-style}" >

                    <div className="row justify-content-center">
                        <img className="mb-3 mt-3" className={'img-style'}
                             src="{% static 'images/aucalogo.jpg' %}" alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="text-center col-md-12 text-light" id="row1">
                                www.holysoft.rw | registrar@holysoft.rw | admissions@holysoft.rw | +250 79999999
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12" id="row2">
                                <h2 className="text-center text-uppercase light-text"><b>
                                    <span className="ml3">HolySoft employees management system</span></b></h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-2 mt-4 mb-4">
                                <Link to={'@emp-login'}
                                   type="submit"><i className="fa fa-unlock fa-lg"></i>LOGIN</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <script src="{% static 'js/http_cdnjs.cloudflare.com_ajax_libs_animejs_2.0.2_anime.js' %}"></script>

            </body>
            // <div className="center-form-login">
            //     <div className="card">
            //         <h1>Login</h1>
            //         <form onSubmit={this.handleFormSubmit}>
            //             <input
            //                 className="form-item"
            //                 placeholder="Username goes here..."
            //                 name="username"
            //                 type="text"
            //                 onChange={e => this.email = e.target.value}
            //             />
            //             <input
            //                 className="form-item"
            //                 placeholder="Password goes here..."
            //                 name="password"
            //                 type="password"
            //                 onChange={e => this.password = e.target.value}
            //             />
            //             <input className="form-submit" value="SUBMIT" type="submit" />
            //         </form>
            //     </div>
            // </div>
            )
    }
  }



