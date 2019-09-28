import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

export class CounterSubKategori extends Component {
  _countSub(id) {
    const count =
      this.props.pct && this.props.pct.filter(p => p.sub_kategori === id && p.flag === "active");
    const result = count && "___" + count.length.toString();

    return result && result.substring(result.length - 3);
  }
  _countSubOpen(id, status) {
    const count =
      this.props.pct &&
      this.props.pct.filter(
        p => p.sub_kategori === id && p.status === status && p.flag === "active"
      );
    const result = count && "___" + count.length.toString();

    return result && result.substring(result.length - 3);
  }

  //   countType(type) {
  //     const countTypes = this.props.movies.filter(
  //       movie => movie.media_type === type
  //     );
  //     return countTypes.length;
  //   }

  render() {
    const { id, sub_kategori, status } = this.props;
    console.log(this.props);

    return (
      <div style={{ fontFamily: "consolas" }}>
        {sub_kategori &&
          sub_kategori.map(sub => {
            if (id === sub.kategori) {
              return (
                <div key={sub.id}>
                  -{" "}
                  {(
                    sub.nama +
                    "______________________________________________________"
                  ).substring(0, 50) +
                    ", Total [" +
                    this._countSub(sub.id) +
                    "] "}
                  {status &&
                    status.map(stat => {
                      return (
                        stat.nama +
                        "[" +
                        this._countSubOpen(sub.id, stat.id) +
                        "]" +
                        " "
                      );
                    })}
                </div>
              );
            }
          })}
      </div>
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
)(CounterSubKategori);
