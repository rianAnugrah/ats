import React, { Component } from "react";
import { connect } from "react-redux";
import { addSubMaster } from "./SubMasterAction";
import { Redirect } from "react-router-dom";

class SubMasterAdd extends Component {
  state = {
    nama: "",
    desc: "",
    col: this.props.col,
    colName: "col_" + [this.props.col.toLowerCase()]
    //masterId:
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addSubMaster(this.state);
    this.props.handleClean();
    //this.props.history.push('/');
  };

  componentDidUpdate(prevState, prevProps) {
    if (prevProps.masterId != this.props.masterId) {
      this.setState({
        masterId: this.props.masterId
      });
    }
  }

  render() {
    const { auth } = this.props;
    console.log(this.state);
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <form className="white col s12" onSubmit={this.handleSubmit}>
        <h5 className="grey-text text-darken-3">Tambah {this.state.col}</h5>

        <div className="input-field">
          <input type="text" required id="nama" onChange={this.handleChange} />
          <label htmlFor="nama">Nama</label>
        </div>
        <div className="input-field">
          <textarea
            id="desc"
            required
            className="materialize-textarea"
            onChange={this.handleChange}
          ></textarea>
          <label htmlFor="desc">Deskripsi</label>
        </div>
        <div className="input-field">
          <button className="btn light-blue lighten-2">Add</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addSubMaster: master => dispatch(addSubMaster(master))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubMasterAdd);
