import React, { Component } from 'react'
// import ProjectList from '../projects/ProjectList'
// import Notifications from './Notifications'
import Hourglass from './hourglass'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Trend } from './Trend'

class Dashboard extends Component {
  render() {
    
    console.log(this.props);
    const { projects, auth } = this.props;
    if ( !auth.uid ) return <Redirect to= '/signin' />
    return (
      <div>
        <div className="row">
        <div className="col s12">
                    <h4>Dashboard</h4>
            </div>
        <div className="col s12 m8 paper z-depth-1">
        <label style={{fontWeight : 500}}>Trend this month</label>
           <Trend type="bar" />
          </div>

          <div className="col s12 m3 paper z-depth-1">
            <label style={{fontWeight : 500}}>Recent Updates</label>
           <ul>
             <li>- PCT added at Sep 15</li>
           </ul>
          </div>

          <div className="col s12 m8 paper z-depth-1">
          <label style={{fontWeight : 500}}>Overview</label>
          </div>
         
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)
