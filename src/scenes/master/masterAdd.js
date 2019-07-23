import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMaster } from './masterActions'
import { Redirect } from 'react-router-dom'

class MasterAdd extends Component {
  
  state = {
    nama: '',
    desc: '',
    col: this.props.col,
    colName: 'col_'+ [this.props.col.toLowerCase()]
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.addMaster(this.state);
    //this.props.history.push('/');
  }
  render() {
      const { auth } = this.props;
      if ( !auth.uid ) return <Redirect to= '/signin' />
    return (
      <div className="row">
        <form className="white col s12" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Tambah {this.state.col}</h5>
          <div className="input-field">
            <input type="text" id='nama' onChange={this.handleChange} />
            <label htmlFor="title">Nama</label>
          </div>
          <div className="input-field">
            <textarea id="desc" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Deskripsi</label>
          </div>
          <div className="input-field">
            <button className="btn light-blue lighten-2">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addMaster: (master) => dispatch(addMaster(master))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterAdd)
