import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../scenes/auth/authActions";
import M from "materialize-css/dist/js/materialize.min.js";
// import "materialize-css/dist/css/materialize.min.css";

class SignedInLinks extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

  render() {
    const { profile, auth } = this.props;

    return (
      <div>
        <ul id="slide-out" className="sidenav sidenav-fixed blue-raspberry">
          <li>
            <div className="user-view">
              <a href="/profile">
                <img
                  className="circle avatar"
                  src="img/userpic.jpg"
                  alt="profile_photo"
                />
              </a>
              <a href="/">
                <span className="white-text name center-align">
                  {profile.firstName ? profile.firstName + " " + profile.lastName : <br/>}
                </span>
              </a>
              <a href="/">
                <span className="white-text email center-align">
                  {auth.email ? auth.email : " "}
                </span>
              </a>
            </div>
          </li>

          <li>
            <NavLink to="/">
              <i className="material-icons white-text">dashboard</i>
              <span className="white-text">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/pct">
              <i className="material-icons white-text">add_a_photo</i>
              <span className="white-text">Physical Condition</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/progress" className="hide">
              <i className="material-icons white-text">assignment_late</i>
              <span className="white-text">Progress</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/master">
              <i className="material-icons white-text">folder</i>
              <span className="white-text">Master Data</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/submaster">
              <i className="material-icons white-text">folder_special</i>
              <span className="white-text">Sub Kategori</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/report">
              <i className="material-icons white-text">assignment</i>
              <span className="white-text">Report</span>
            </NavLink>
          </li>
          <li className="hide">
            <NavLink to="/trend">
              <i className="material-icons white-text">assessment</i>
              <span className="white-text">Trend</span>
            </NavLink>
          </li>
          <li className="hide">
            <NavLink to="/users">
              <i className="material-icons white-text">wc</i>
              <span className="white-text">Users</span>
            </NavLink>
          </li>
          <li className="hide">
            <NavLink to="/setting">
              <i className="material-icons white-text">settings</i>
              <span className="white-text">Setting</span>
            </NavLink>
          </li>
          <li>
            <a onClick={this.props.signOut}>
              <i className="material-icons white-text">exit_to_app</i>
              <span className="white-text">Logout</span>
            </a>
          </li>
        </ul>
        <nav className=" light-blue lighten-2 hide-on-large-only">
          <div className="nav-wrapper ">
            <a href="/" className="brand-logo right">
              K3MP&nbsp;&nbsp;
            </a>
            <a href="/" data-target="slide-out" className="sidenav-trigger ">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
