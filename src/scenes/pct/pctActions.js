export const addPCT = (postData) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      console.log('ini action')
      console.log(postData)
  
      firestore.collection('col_pct').add({
        tgl_temuan: postData.tgl_temuan,
        kategori: postData.kategori,
        lokasi: postData.lokasi

      }).then(() => {
        dispatch({ type: 'CREATE_PCT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_PCT_ERROR' }, err);
      });
    }
  };