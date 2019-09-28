import React, { Fragment, Component } from "react";
import {
  FlexibleXYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries
} from "react-vis";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

export class Trend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kategori: "",
      jenis: "",
      pct: "",
      area: "",
      lokasi: ""
    };

    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    this.setState({
      kategori: "",
      jenis: "",
      pct: "",
      area: "",
      lokasi: ""
    });
  }

  render() {
    const { pct } = this.props;

    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ];

    const data2 = [
      pct && pct.map((item, index) => {
        return { x: index, y: item.id };
      })
    ];

    console.log(data2)
    return (
      <Fragment>

        <div style={{  height: "50vh" }}>
          <FlexibleXYPlot>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries color="#4fc3f7 " data={data} />
          </FlexibleXYPlot>
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
    pct: state.firestore.ordered.col_pct,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = {};

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
    "col_pct",
    "users"
  ])
)(Trend);
