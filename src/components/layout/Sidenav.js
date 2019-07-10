import React from 'react'
//import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Sidenav = (props) => {
    const { auth, profile} = props;
    //console.log(auth)
    const links = auth.uid ? <SignedInLinks profile={profile} auth={auth}/>  : <SignedOutLinks />;
    return (
        <div>
            { links }
        </div>

    )
}

const mapStateToProps = (state) => {
    //console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Sidenav)
