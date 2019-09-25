import React, { Fragment, Component } from "react";
import {
  Modal,
  Button,
  DatePicker,
  TextInput,
  Select,
  Divider
} from "react-materialize";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect, Link } from "react-router-dom";
import { addPCT } from "./pctActions";
import Upload from "../../components/upload";
import Textarea from "react-materialize/lib/Textarea";
import moment from "moment";
import PctDropdown from "./PctDropdown";

class PctAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colName: "col_pct",
      after: "",
      before: "",
      area: "",
      deskripsi: "",
      jenis: "",
      kategori: "",
      sub_kategori: "",
      lokasi: "",
      pic: "",
      prioritas: "",
      status: "",
      tgl_close: "",
      tgl_temuan: "",

      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUploadAfter = this.handleUploadAfter.bind(this);
    this.handleUploadBefore = this.handleUploadBefore.bind(this);
    this.handleChangeTglTemuan = this.handleChangeTglTemuan.bind(this);
    this.handleChangeTglClose = this.handleChangeTglClose.bind(this);
  }

  handleChange(e) {
    //console.log(JSON.stringify(e))
    // console.log(e.target.value);
    // console.log(e.target.name);

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleUploadAfter = url_link => {
    this.setState({ after: url_link });
  };

  handleUploadBefore = url_link => {
    this.setState({ before: url_link });
  };

  handleChangeTglTemuan(e) {
    console.log(JSON.stringify(e));
    this.setState({
      tgl_temuan: moment(e)
        .toDate()
        .toISOString()
    });
  }

  handleChangeTglClose(e) {
    console.log(JSON.stringify(e));
    this.setState({
      tgl_close: moment(e)
        .toDate()
        .toISOString()
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    this.props.addPCT(this.state).then(this.setState({ redirect: true }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { sub_kategori } = this.props;
    const { kategori } = this.state;

    let sub = [];
    if (prevState.kategori !== kategori) {
      // console.log(prevState.kategori, kategori , sub_kategori);

      sub =
        this.props.sub_kategori &&
        this.props.sub_kategori.filter(item => {
          return item.kategori === this.state.kategori;
        });
      //console.log(this.state.kategori, sub)
      this.setState({ ...this.state.subs, subs: sub });
    }
  }
  render() {
    const {
      kategori,
      sub_kategori,
      auth,
      jenis,
      prioritas,
      area,
      lokasi,
      status,
      pic
    } = this.props;

    const { subs } = this.state;
    if (!auth.uid) return <Redirect to="/signin" />;
    if (this.state.redirect == true) return <Redirect to="/pct" />;

    return (
      <Fragment>
        <div className="row">
          <div className="col s12">
            <h4>Physical Condition Tour</h4>
          </div>
          <div className="col s12 paper z-depth-1">
            <form onSubmit={this.handleSubmit}>
              <DatePicker
                name="tgl_temuan"
                label="Tanggal Temuan"
                xl="12"
                s="12"
                validate="true"
                onChange={this.handleChangeTglTemuan}
              />
              <PctDropdown
                items={kategori && kategori}
                handleChange={this.handleChange}
                name="kategori"
              />
              <PctDropdown
                items={subs && subs}
                handleChange={this.handleChange}
                name="sub_kategori"
              />
              <PctDropdown
                items={pic && pic}
                handleChange={this.handleChange}
                name="pic"
              />
              <PctDropdown
                items={area && area}
                handleChange={this.handleChange}
                name="area"
              />
              <PctDropdown
                items={lokasi && lokasi}
                handleChange={this.handleChange}
                name="lokasi"
              />
              <PctDropdown
                items={prioritas && prioritas}
                handleChange={this.handleChange}
                name="prioritas"
              />
              <PctDropdown
                items={status && status}
                handleChange={this.handleChange}
                name="status"
              />
              <PctDropdown
                items={jenis && jenis}
                handleChange={this.handleChange}
                name="jenis"
              />
              <DatePicker
                name="tgl_close"
                label="Tgl Close"
                xl="12"
                s="12"
                onChange={this.handleChangeTglClose}
              />
              <Textarea
                name="deskripsi"
                label="Deskripsi"
                xl="12"
                s="12"
                onChange={this.handleChange}
              />
              Before
              <Upload className="btn" change_url={this.handleUploadBefore} />
              <br />
              <Divider />
              After
              <Upload change_url={this.handleUploadAfter} />
              <br />
              <button
                className="waves-effect waves-light light-blue lighten-2 btn round"
                type="submit"
              >
                Save
              </button>
            </form>
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
    sub_kategori: state.firestore.ordered.col_sub_kategori,
    area: state.firestore.ordered.col_area,
    status: state.firestore.ordered.col_status,
    jenis: state.firestore.ordered.col_jenis,
    lokasi: state.firestore.ordered.col_lokasi,
    pic: state.firestore.ordered.col_pic,
    prioritas: state.firestore.ordered.col_prioritas,
    users: state.firestore.ordered.users,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPCT: postData => dispatch(addPCT(postData))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),

  firestoreConnect([
    "col_kategori",
    "col_area",
    "col_jenis",
    "col_lokasi",
    "col_pic",
    "col_prioritas",
    "col_status",
    "col_sub_kategori",
    "users"
  ])
)(PctAdd);
