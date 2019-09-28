import React, { Component, Fragment } from "react";
// import ProjectList from '../projects/ProjectList'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect, Link } from "react-router-dom";
import { MediaBox, Button } from "react-materialize";
import { deletePCT } from "./pctActions";
import moment from "moment";

class PctData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  delete(id) {
    this.props.deletePCT(id).then(console.log("deleted"));
  }

  componentDidUpdate() {
    const {
      pct,
      kategori,
      auth,
      area,
      status,
      prioritas,
      sub_kategori
    } = this.props;
    if (this.state.loaded === false) {
      if (
        pct &&
        kategori &&
        auth &&
        area &&
        status &&
        prioritas &&
        sub_kategori
      ) {
        this.setState({ loaded: true }, () =>
          console.log("LOADED ", this.state.loaded)
        );
      }
    }
  }

  render() {
    console.log(this.props);
    const {
      pct,
      kategori,
      auth,
      area,
      status,
      prioritas,
      sub_kategori
    } = this.props;
    const { loaded } = this.state;
    let i = 0;
    if (!auth.uid) return <Redirect to="/signin" />;

    if (loaded === true) {
      return (
        <Fragment>
          <div className="row">
            <div className="col s12">
              <h4>Physical Condition Tour</h4>
            </div>
            <div className="input-field col s5 m3 ">
              <Link
                to="/pctadd"
                className="waves-effect waves-light light-blue lighten-2 btn round"
              >
                <i className="material-icons left">add_to_photos</i>New
              </Link>
            </div>

            <div className="input-field col s7 m3 push-m6 ">
              <i className="material-icons prefix">search</i>
              <input id="icon_prefix" type="text" className="validate" />
              <label htmlFor="icon_prefix">Search</label>
            </div>
            <div className="col s12 paper z-depth-1">
              <table className="responsive highlight">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Tanggal Temuan</th>
                    <th>Kategori</th>
                    <th>Sub Kategori</th>
                    <th>Before</th>
                    <th>After</th>
                    <th>Status</th>
                    <th>Prioritas</th>
                    <th />
                  </tr>
                </thead>

                <tbody>
                  {pct &&
                    pct.map(item => {
                      if (item.flag == "active") {
                        i = i + 1;
                        return (
                          <tr key={item.id}>
                            <td>{i}</td>
                            <td>
                              {moment(item.tgl_temuan).format("MMM Do YY")}
                            </td>
                            <td>
                              {kategori &&
                                kategori.map(kat => {
                                  if (item.kategori == kat.id) {
                                    //console.log("kategori : " + kat.nama);
                                    return kat.nama;
                                  }
                                })}
                            </td>
                            <td>
                              {sub_kategori &&
                                sub_kategori.map(sub => {
                                  if (item.sub_kategori === sub.id) {
                                    console.log("sub kategori : " + sub.nama);
                                    return sub.nama;
                                  }
                                })}
                            </td>

                            <td>
                              <MediaBox>
                                <img
                                  src={
                                    item.before
                                      ? item.before
                                      : "https://placeholder.pics/svg/300/25B3FF-658DFF"
                                  }
                                  width="50"
                                  alt=""
                                />
                              </MediaBox>
                            </td>
                            <td>
                              <MediaBox>
                                <img
                                  src={
                                    item.after
                                      ? item.after
                                      : "https://placeholder.pics/svg/300/25B3FF-658DFF"
                                  }
                                  width="50"
                                  alt=""
                                />
                              </MediaBox>
                            </td>
                            <td>
                              {status &&
                                status.map(it => {
                                  if (item.status == it.id) {
                                    //console.log("status : " + it.nama);
                                    return it.nama;
                                  }
                                })}
                            </td>
                            <td>
                              {prioritas &&
                                prioritas.map(it => {
                                  if (item.prioritas == it.id) {
                                    //console.log("prioritas : " + it.nama);
                                    return it.nama;
                                  }
                                })}
                            </td>
                            <td>
                              <Link
                                to={{
                                  pathname: "/pctadd",
                                  state: {
                                    value: item
                                  }
                                }}
                                className="btn-floating btn-small waves-effect waves-light orange"
                              >
                                <i className="material-icons">edit</i>
                              </Link>
                              &nbsp; &nbsp;
                              <a
                                onClick={() => this.delete(item.id)}
                                className="btn-floating btn-small waves-effect waves-light red"
                              >
                                <i className="material-icons">delete</i>
                              </a>
                            </td>
                          </tr>
                        );
                      }
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return <div> Loading data ... </div>;
    }
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    kategori: state.firestore.ordered.col_kategori,
    sub_kategori: state.firestore.ordered.col_sub_kategori,
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

const mapDispatchToProps = dispatch => {
  return {
    deletePCT: id => dispatch(deletePCT(id))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    "col_kategori",
    "col_sub_kategori",
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
