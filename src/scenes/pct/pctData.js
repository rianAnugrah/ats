import React, { Component, Fragment } from "react";
// import ProjectList from '../projects/ProjectList'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect , Link} from "react-router-dom";

class PctData extends Component {
  render() {
    console.log(this.props);
    const { pct, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <Fragment>
        <div className="row">
          <div className="col s12">
            <h4>Physical Condition Tour</h4>
          </div>
          <div className="input-field col s5 m3 ">
            <Link to="/pctadd" className="waves-effect waves-light light-blue lighten-2 btn round">
              <i className="material-icons left">add_to_photos</i>New
            </Link>
          </div>

          <div className="input-field col s7 m3 push-m6 ">
            <i className="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" className="validate" />
            <label htmlFor="icon_prefix">Search</label>
          </div>
          <div className="col s12 paper z-depth-1">
            {/* {pct && pct.map(item => { 
                return (
                    <ul key={item.id}>{item.tgl_temuan}</ul>
                )
            })} */}

          
          </div>
        </div>
          
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    kategori: state.firestore.ordered.col_kategori,
    area: state.firestore.ordered.col_area,
    status: state.firestore.ordered.col_status,
    jenis: state.firestore.ordered.col_jenis,
    lokasi: state.firestore.ordered.col_lokasi,
    pic: state.firestore.ordered.col_pic,
    prioritas: state.firestore.ordered.col_prioritas,
    users: state.firestore.ordered.users,
    pct: state.firestore.ordered.col_pct,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    "col_kategori",
    "col_area",
    "col_jenis",
    "col_lokasi",
    "col_pic",
    "col_prioritas",
    "col_status",
    "col_pct",
    "users"
  ])
)(PctData);
