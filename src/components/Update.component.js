import React from 'react';
import axios from 'axios'


export default class Update extends React.Component{

    constructor(props){
        super(props)
        this.state = {street : '', gender:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {

        const {id} = this.props.match.params;
        const data = {
            headers: {
                Authorization:`Token ${localStorage.getItem('token')}`
            }
        }
        const res = await axios.get(`search_employee/${id}`, data);


        console.log(res)
        const emp = res.data.employee;
        const street = emp.street
        const gender = emp.gender
        const cell = emp.cell
        const comment = emp.comment
        const phone = emp.phone
        const post = emp.post
        const profile = emp.profile
        const salary = emp.salary
        const working_status = emp.working_status



        this.setState({

            street: emp.street,
            gender: emp.gender,
            cell: emp.cell,
            comment: emp.comment,
            phone: emp.phone,
            post: emp.post,
            profile: emp.profile,
            salary: emp.salary,
            working_status: emp.working_status


        });



        // this.setState({notes:notes.slice()})
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    handleSubmit(event) {
            const {id} = this.props.match.params;
            console.log(this.state)
            event.preventDefault();
            const ContactDetails={street:this.state.street, gender:this.state.gender}
            const data = {
            headers: {
                Authorization:`Token ${localStorage.getItem('token')}`
            }
        }
            axios.put(`update_employee/${id}`,ContactDetails, data)
                .then(response =>{
                    this.props.history.push('/@employee-list')

                })
    }
    render(){


        return(

            <div className="container">
                <div className="div1">
                    <div className="user-image">
                        <i className="fas fa-camera fa-10x"></i>
                    </div>
                    <div className="user-username">
                        <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-3">
                                <label htmlFor="name">Firstname</label><br/>
                            <div>
                                <input type="text" name ="name" value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} /><br/>
                            </div>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="name">Lastname</label><br/>
                            <div>
                                <input type="text" name ="name" value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })} /><br/>
                            </div>
                            </div>
                            <div className="col-md-3">

                            <label htmlFor="surname">gender</label><br/>
                            <div>
                                <select name="" id="">
                                    <option value={this.state.gender}>{this.state.gender}</option>
                                    <option value="">MALE</option>
                                </select>
                            </div>
                            </div>

                            <div className="col-md-3">

                            <label htmlFor="surname">cell</label><br/>
                            <div>
                            <input type="text" name="gender" value={this.state.cell} onChange={e => this.setState({cell: e.target.value })} />
                            </div>
                            </div>

                            <div className="col-md-3">

                            <label htmlFor="surname">phone number</label><br/>
                            <div>
                                <input type="text" name="gender" value={this.state.phone} onChange={e => this.setState({phone: e.target.value })} />
                            </div>
                            </div>
                            <div className="col-md-3">

                            <label htmlFor="surname">salary</label><br/>
                            <div>
                                <input type="text" name="gender" value={this.state.salary} onChange={e => this.setState({salary: e.target.value })} />
                            </div>
                            </div>
                            <div className="col-md-3">

                            <label htmlFor="surname">working status</label><br/>
                            <div>
                                <input type="text" name="gender" value={this.state.working_status} onChange={e => this.setState({working_status: e.target.value })} />
                            </div>
                            </div>

                            <div className="col-md-3">

                            <label htmlFor="surname">profile picture</label><br/>
                            <div>
                                <input type="text" name="gender" value={this.state.profile} onChange={e => this.setState({profile: e.target.value })} />
                            </div>
                            </div>
                        </div>


                            <hr/>

                            <button type="submit" className="btn-add_contact2" >
                                <i className="fas fa-plus"></i>
                                Update emp
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}