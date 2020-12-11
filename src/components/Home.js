import React, { Component } from 'react';

import SideBar from './sides/SideBar'
import Chart from './chartjs/chart'
import Linechart from './chartjs/linechart.js';
import Bublechart from './chartjs/circles';
import axios from 'axios'



export default class Dashboard extends Component{
    state = {

    }

    componentDidMount(){
        //
        const config = {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        }
        axios.get('create-employee', config).then(
            res => {
                this.setState({
                    user: res.data
                })
            },
            err => {
                console.log(err)
            }
        )
    }

    countUsers(type){
        const countType = this.state.user.filter(user => user.type === type)
        return countType.length
    }

    render(){
        return (

            <main>
                <div className="row">
                    <div className="col-md-2">
                        <SideBar />
                    </div>
                    <div className="col-md-10">
                        <div className="container-fluid">
                            <h1 className="mt-4">Dashboard</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>

                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-primary text-white mb-4">
                                        <div className="card-body">Not working</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="#">5</a>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-warning text-white mb-4">
                                        <div className="card-body">Not working</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="#">2</a>
                                            <div className="small text-white"><i className="fas fa-angle-success"></i></div>
                                        </div>
                                    </div>
                                </div>

                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-success text-white mb-4">
                                            <div className="card-body">Working</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">0</a>
                                                <div className="small text-white"><i className="fas fa-angle-right">3</i>3</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-danger text-white mb-4">
                                            <div className="card-body">Total employeees</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#"></a>
                                                <div className="small text-white"><i className="fas fa-angle-right">0</i>0</div>
                                            </div>
                                        </div>
                                    </div>

                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="card mb-4">
                                            <div className="card-header">
                                                Area Chart Example
                                            </div>
                                            <div className="card-body">
                                                <Chart />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card mb-4">
                                            <div className="card-header">
                                                Line Chart Example
                                            </div>
                                            <div className="card-body">
                                                <Linechart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </main>
    );
    }
        }
