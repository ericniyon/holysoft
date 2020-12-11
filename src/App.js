import './App.css';
import './App.css'
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import LoginPage from './components/auth/LoginPage'
import Forgot from './components/Forgot.component'
import Update from './components/Update.component'
import NewEmployee from './components/Create.Emp'
import EmployeList from './components/employees/EmployeeList'
import ProfilePage from './components/employees/ProfilePage'
// import Update from './components/Update.component'
import { Component } from 'react';
import axios from 'axios'


class  App extends Component {

  state = {}
  componentDidMount= () => {

    axios.get('user').then(
        res => {
            
          this.setUser(res.data)
           
        },
        err => {
            console.log(err)
        }
    )
    }
  setUser = user => {
    this.setState({
      user: user
    })
  }
  render(){
  return (
    <BrowserRouter>
    <div className="App">
     <NavBar />
  <div>
  <Switch>
    <Route exact path='/dashboard' component={Home} />
    <Route exact path='/' component={Login} />
    <Route exact path='/forgot' component={Forgot} />
    
    <Route exact path='/@add-new-employee' component={NewEmployee} />
    <Route exact path='/update/:id' component={Update} />
    <Route exact path='/@employee-list' component={EmployeList} />
    <Route exact path='/@emp-login' component={LoginPage} />
    <Route exact path='/@emp-profile/:id' component={ProfilePage} />
    {/*<Route exact path='/' component={CreateEmployee} />*/}

  </Switch>
</div>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
