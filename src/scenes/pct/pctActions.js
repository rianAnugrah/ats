// export const addPCT = postData => {
//   return (dispatch, getState, { getFirestore }) => {
//     // make async call to database
//     const firestore = getFirestore();
//     const profile = getState().firebase.profile;
//     const authorId = getState().firebase.auth.uid;
//     console.log("ini action");
//     console.log(postData);

//     firestore
//       .collection("col_pct")
//       .add({
//         area: postData.area,
//         deskripsi: postData.deskripsi,
//         jenis: postData.jenis,
//         kategori: postData.kategori,
//         lokasi: postData.lokasi,
//         pic: postData.pic,
//         prioritas: postData.prioritas,
//         status: postData.status,
//         tgl_close: postData.tgl_close,
//         tgl_temuan: postData.tgl_temuan,
//         before: postData.before,
//         after: postData.after,
//       })
//       .then(() => {
//         dispatch({ type: "CREATE_PCT_SUCCESS" });
//       })
//       .catch(err => {
//         dispatch({ type: "CREATE_PCT_ERROR" }, err);
//       });
//   };
// };


export function addPCT(postData, data) {
  return (dispatch, getState, { getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      console.log("ini action");
      console.log(postData);

    return new Promise((resolve, reject) => {
    firestore
      .collection("col_pct")
      .add({
        area: postData.area,
        deskripsi: postData.deskripsi,
        jenis: postData.jenis,
        kategori: postData.kategori,
        sub_kategori: postData.sub_kategori,
        lokasi: postData.lokasi,
        pic: postData.pic,
        prioritas: postData.prioritas,
        status: postData.status,
        tgl_close: postData.tgl_close,
        tgl_temuan: postData.tgl_temuan,
        before: postData.before,
        after: postData.after,
        status: postData.status,
        flag:"active" //active = data visible, deleted = data invisible
      })
        .then(response =>
          resolve(
            dispatch({
              type: "CREATE_PCT_SUCCESS" 
            })
          )
        )
        .catch(error =>
          reject(
            dispatch({
              type: "CREATE_PCT_ERROR",
              errors: error
            })
          )
        );
    });
  };
}


export function updatePCT(postData, id) {
  return (dispatch, getState, { getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      console.log("ini action");
      console.log(postData);

    return new Promise((resolve, reject) => {
    firestore
      .collection("col_pct").doc(id)
      .update({
        area: postData.area,
        deskripsi: postData.deskripsi,
        jenis: postData.jenis,
        kategori: postData.kategori,
        sub_kategori: postData.sub_kategori,
        lokasi: postData.lokasi,
        pic: postData.pic,
        prioritas: postData.prioritas,
        status: postData.status,
        tgl_close: postData.tgl_close,
        tgl_temuan: postData.tgl_temuan,
        before: postData.before,
        after: postData.after,
      })
        .then(response =>
          resolve(
            dispatch({
              type: "CREATE_PCT_SUCCESS" 
            })
          )
        )
        .catch(error =>
          reject(
            dispatch({
              type: "CREATE_PCT_ERROR",
              errors: error
            })
          )
        );
    });
  };
}

export function deletePCT(id) {
  return (dispatch, getState, { getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      console.log("ini action");
      console.log(id);

    return new Promise((resolve, reject) => {
    firestore
      .collection("col_pct")
      .doc(id).update({flag:"deleted"})
        .then(response =>
          resolve(
            dispatch({
              type: "DELETE_PCT_SUCCESS" 
            })
          )
        )
        .catch(error =>
          reject(
            dispatch({
              type: "DELETE_PCT_ERROR",
              errors: error
            })
          )
        );
    });
  };
}


// export function deletePCT(id) {
//   return (dispatch, getState, { getFirestore }) => {
//       // make async call to database
//       const firestore = getFirestore();
//       const profile = getState().firebase.profile;
//       const authorId = getState().firebase.auth.uid;
//       console.log("ini action");
//       console.log(id);

//     return new Promise((resolve, reject) => {
//     firestore
//       .collection("col_pct")
//       .doc(id).delete()
//         .then(response =>
//           resolve(
//             dispatch({
//               type: "DELETE_PCT_SUCCESS" 
//             })
//           )
//         )
//         .catch(error =>
//           reject(
//             dispatch({
//               type: "DELETE_PCT_ERROR",
//               errors: error
//             })
//           )
//         );
//     });
//   };
// }
