import Reeact, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'


export default class ProfilePage extends Component{
    /// initializing state in the constructors ////
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            first_name: '',
            last_name: '',
            cell: '',
            comment:'',
            gender:'',
            email:'',
            phone:'',
            post:'',
            profile:'',
            salary:'',
            street:'',
            working_status:''
        }
    }
    //// getting request for data at given api /////
    async componentDidMount(){
        const {id} = this.props.match.params;
        const res = await axios.get(`search_employee/${id}`)
        const emp = res.data.employee
        console.log(res.data)
        console.log(id)

        this.setState({
            id: emp.id,
            first_name: emp.owner.first_name,
            last_name: emp.owner.last_name,
            cell: emp.cell,
            comment: emp.comment,
            gender: emp.gender,
            email: emp.owner.email,
            phone: emp.phone,
            profile: emp.profile,

            salary: emp.salary,
            street: emp.street,
            working_status: emp.working_status
        })
    }
    render(){
            const {
                first_name, last_name,id,
                cell,comment,gender,email,phone,post,profile,salary,street,working_status
            } = this.state;

        return(
            <div className="container">
                <div className="row profile">
                    <div className="col-md-3">
                        <div className="profile-sidebar">

                            <div className="profile-userpic">
                                <img
                                    src="/images/admin.png"
                                    className="img-responsive" alt="" />
                            </div>
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    {first_name} {last_name}
                                </div>
                                <div className="profile-usertitle-job">
                                    {working_status}
                                </div>
                            </div>
                            <div className="profile-userbuttons">
                                <Link to={`/update/${id}`}>
                                <button type="button" className="btn btn-success btn-sm">Update</button>
                                </Link>
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                            </div>
                            <div className="profile-usermenu">
                                <ul className="nav">
                                    <li className="active">
                                        <a href="#">
                                            <i className="glyphicon glyphicon-home"></i>
                                            Overview </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="glyphicon glyphicon-user"></i>
                                            Account Settings </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="glyphicon glyphicon-ok"></i>
                                            Tasks </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="glyphicon glyphicon-flag"></i>
                                            Help </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="profile-content">
                            <div className="row">
                                <div className="col s12 m4">
                                Full name:  {last_name} {first_name}
                                </div>
                                <div className="col s12 m4">
                                gender: {gender}
                                </div>
                                <div className="col s12 m4">
                                email: {email}
                                </div>
                                <div className="col s12 m4">
                                phone: {phone}
                                </div>
                                <div className="col s12 m4">
                                post: {post}
                                </div>
                                <div className="col s12 m4">
                                street: {street}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}