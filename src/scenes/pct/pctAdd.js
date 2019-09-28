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
import { addPCT, updatePCT } from "./pctActions";
import Upload from "../../components/upload";
import Textarea from "react-materialize/lib/Textarea";
import moment from "moment";
import PctDropdown from "./PctDropdown";

class PctAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: {
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
        tgl_temuan: ""
      },
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
      ...this.state,
      postData: {
        ...this.state.postData,
        [e.target.name]: e.target.value
      }
    });
  }

  handleUploadAfter = url_link => {
    this.setState({
      ...this.state,
      postData: {
        ...this.state.postData,
        after: url_link
      }
    });
  };

  handleUploadBefore = url_link => {
    this.setState({
      ...this.state,
      postData: {
        ...this.state.postData,
        before: url_link
      }
    });
  };

  handleChangeTglTemuan(e) {
    this.setState({
      ...this.state,
      postData: {
        ...this.state.postData,
        tgl_temuan: moment(e)
          .toDate()
          .toISOString()
      }
    });
  }

  handleChangeTglClose(e) {
    this.setState({
      ...this.state,
      postData: {
        ...this.state.postData,
        tgl_close: moment(e)
          .toDate()
          .toISOString()
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    if (!this.state.value) {
      this.props.addPCT(this.state.postData).then(() => {
        alert("data tersimpan");
        this.setState({ redirect: true });
      });
      //.then(alert('Saved'));
    } else {
      this.props
        .updatePCT(this.state.postData, this.state.value.id)
        .then(this.setState({ redirect: true }));
      // .then(alert('Saved'));
    }
  }

  componentDidMount() {
    if (this.props.location.state) {
      const { value } = this.props.location.state;
      this.setState({
        ...this.state,
        postData: {
          ...this.state.postData,
          kategori: value.kategori,
          after: value.after,
          before: value.before,
          area: value.area,
          deskripsi: value.deskripsi,
          jenis: value.jenis,
          sub_kategori: value.sub_kategori,
          lokasi: value.lokasi,
          pic: value.pic,
          prioritas: value.prioritas,
          status: value.status,
          tgl_close: value.tgl_close,
          tgl_temuan: value.tgl_temuan
        },
        value: value
      });
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
      pic,
      location
    } = this.props;

    const { value, postData } = this.state;

    let subs =
      this.props.sub_kategori &&
      this.props.sub_kategori.filter(item => {
        return item.kategori === postData.kategori;
      });

    if (!auth.uid) return <Redirect to="/signin" />;
    if (this.state.redirect == true) return <Redirect to="/pct" />;
    console.log("POSTDATA", this.state.postData);
    console.log("ID", this.state.value);
    return (
      <Fragment>
        <div className="row">
          <div className="col s12">
            <h4>Physical Condition Tour</h4>
          </div>
          <div className="col s12 paper z-depth-1">
            <form onSubmit={this.handleSubmit}>
              <PctDropdown
                items={kategori && kategori}
                handleChange={this.handleChange}
                name="kategori"
                value={postData && postData.kategori}
              />
              <PctDropdown
                items={subs && subs}
                handleChange={this.handleChange}
                name="sub_kategori"
                value={postData && postData.sub_kategori}
              />
              <PctDropdown
                items={status && status}
                handleChange={this.handleChange}
                name="status"
                value={postData && postData.status}
              />
              <PctDropdown
                items={pic && pic}
                handleChange={this.handleChange}
                name="pic"
                value={postData && postData.pic}
              />
              <PctDropdown
                items={area && area}
                handleChange={this.handleChange}
                name="area"
                value={postData && postData.area}
              />
              <PctDropdown
                items={lokasi && lokasi}
                handleChange={this.handleChange}
                name="lokasi"
                value={postData && postData.lokasi}
              />
              <PctDropdown
                items={prioritas && prioritas}
                handleChange={this.handleChange}
                name="prioritas"
                value={postData && postData.prioritas}
              />
              <PctDropdown
                items={jenis && jenis}
                handleChange={this.handleChange}
                name="jenis"
                value={postData && postData.jenis}
              />
              <DatePicker
                name="tgl_close"
                label="Tgl Close"
                xl="12"
                s="12"
                onChange={this.handleChangeTglClose}
                value={
                  postData.tgl_close
                    ? moment(postData.tgl_close).format("MMM D, YYYY")
                    : ""
                }
              />
              <Textarea
                name="deskripsi"
                label="Deskripsi"
                xl="12"
                s="12"
                onChange={this.handleChange}
                value={postData && postData.deskripsi}
              />
              Before
              <Upload
                change_url={this.handleUploadBefore}
                value={postData && postData.before}
              />
              <br />
              <Divider />
              After
              <Upload
                change_url={this.handleUploadAfter}
                value={postData && postData.after}
              />
              <br />
              <DatePicker
                name="tgl_temuan"
                label="Tanggal Temuan"
                xl="12"
                s="12"
                validate="true"
                onChange={this.handleChangeTglTemuan}
                value={
                  postData.tgl_temuan
                    ? moment(postData.tgl_temuan).format("MMM D, YYYY")
                    : ""
                }
              />
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

const mapDispatchToProps = {
  addPCT,
  updatePCT
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
