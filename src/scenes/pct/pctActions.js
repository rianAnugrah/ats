export const addPCT = postData => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log("ini action");
    console.log(postData);

    firestore
      .collection("col_pct")
      .add({
        area: postData.area,
        deskripsi: postData.deskripsi,
        jenis: postData.jenis,
        kategori: postData.kategori,
        lokasi: postData.lokasi,
        pic: postData.pic,
        prioritas: postData.prioritas,
        status: postData.status,
        tgl_close: postData.tgl_close,
        tgl_temuan: postData.tgl_temuan,
        before: postData.before,
        after: postData.after,
      })
      .then(() => {
        dispatch({ type: "CREATE_PCT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PCT_ERROR" }, err);
      });
  };
};
