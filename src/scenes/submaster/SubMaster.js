import React, { Component } from "react";
// import ProjectList from '../projects/ProjectList'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import SubMasterList from "./SubMasterList";
import SubMasterSelect from "./SubMasterSelect";
import SubMasterAdd from "./SubMasterAdd";

class SubMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChangeMasterId = this.handleChangeMasterId.bind(this);
    this.handleClean = this.handleClean.bind(this);
  }

  componentWillMount() {
    console.log("WILL MOUNT");
    this.setState({
      masterId: this.props.kategori && this.props.kategori[0].id
    });
  }

  handleClean() {
    // this.setState({
    //   masterId: ""
    // });
  }

  handleChangeMasterId(e) {
    console.log(e.target.value);
    this.setState({
      masterId: e.target.value
    });
  }

  render() {
    console.log(this.props);
    const { sub_kategori, kategori, auth } = this.props;
    const { masterId } = this.state;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="row">
        <div className="col s12">
          <h4>Sub Kategori</h4>
        </div>

        <div className="col s4 paper z-depth-1">
          <SubMasterSelect
            items={kategori && kategori}
            handleChange={this.handleChangeMasterId}
          />

          {masterId && (
            <SubMasterAdd
              masterId={masterId}
              col="sub_kategori"
              handleClean={this.handleClean}
            />
          )}
        </div>
        <div className="col s7 paper z-depth-1" style={{height: 'calc( 100vh - 120px)', overflowY: 'auto'}}>
          {masterId && (
            <SubMasterList
              items={sub_kategori && sub_kategori}
              masters={kategori}
              masterId={masterId}
            />
          )}
          {/*  */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    kategori: state.firestore.ordered.col_kategori,
    sub_kategori: state.firestore.ordered.col_sub_kategori,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(["col_kategori", "col_sub_kategori"])
)(SubMaster);
