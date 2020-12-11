import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'


const SideBar = () => {
    return(
        <div>
          <div id="layoutSidenav ">
            <div id="layoutSidenav_nav">
              <nav className="sb-sidenav accordion sb-sidenav-dark" id="asda">
                <div className="sb-sidenav-menu">
                  <div className="nav">
                    <Link>
                    <a className="nav-link" to="dashboard">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-tachometer-alt"></i></div>
                      Dashboard
                    </a>
                  </Link>

                    <Link to={`@employee-list`}>
                      <a className="nav-link" to="dashboard">
                        <div className="sb-nav-link-icon">
                          <i className="fas fa-tachometer-alt"></i></div>
                        View Employees
                      </a>
                    </Link>
                    <Link>
                      <a className="nav-link" to="dashboard">
                        <div className="sb-nav-link-icon">
                          <i className="fas fa-tachometer-alt"></i></div>
                        Active Employees
                      </a>
                    </Link>
                    <Link>
                      <a className="nav-link" to="dashboard">
                        <div className="sb-nav-link-icon">
                          <i className="fas fa-tachometer-alt"></i></div>
                        Vacanse
                      </a>
                    </Link>
                    <Link>
                      <a className="nav-link" to="dashboard">
                        <div className="sb-nav-link-icon">
                          <i className="fas fa-tachometer-alt"></i></div>
                        Working employees
                      </a>
                    </Link>
                    <Link to={`@add-new-employee`}>
                      <a className="nav-link" to="dashboard">
                        <div className="sb-nav-link-icon">
                          <i className="fas fa-tachometer-alt"></i></div>
                        Create Employee
                      </a>
                    </Link>
                    <Link>
                      <a className="nav-link" to="dashboard">
                        <div className="sb-nav-link-icon">
                          <i className="fas fa-tachometer-alt"></i></div>
                        Settings
                      </a>
                    </Link>



                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>



  //      <div>
  //      <div class="card">
  //       <div class="card-content">
  //       <div class="image-cropper">
  //         <img src="/images/my_admin.png" alt="logo" class="rounded"/>
  //       </div>
  //         <p>Eric niyo</p>
  //       </div>
  //     </div>
  //
  //     <div class="card ">
  //     <div class="row">
  //     <div class="col s12">
  //     <Link to="/">
  //     <button class="btn btn-large fa fa-home">Dashboard</button>
  //     </Link>
  //
  //     </div>
  //     <div class="col s12">
  //     <Link to="@employee-list">
  //     <button class="btn btn-large fa fa-users">Employees</button>
  //     </Link>
  //     </div>
  //     <div class="col s12">
  //     <button class="btn btn-large fa fa-user-times">Vacance </button>
  //     </div>
  //     <div class="col s12">
  //     <Link to="active-employees">
  //     <button class="btn btn-large fa fa-user-secret">Active employee</button>
  //     </Link>
  //     </div>
  //
  //     <div class="col s12">
  //     <a href="@add-new-employee">
  //     <button class="btn btn-large fa fa-user-secret">Add employee</button>
  //     </a>
  //     </div>
  //     </div>
  //     </div>
  // </div>
       
    )
}

export default SideBar