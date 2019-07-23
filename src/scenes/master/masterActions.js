export const addMaster = (master) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      console.log(master.colName)
  
      firestore.collection(master.colName).add({
       
        nama: master.nama,
        desc: master.desc,

      }).then(() => {
        dispatch({ type: 'CREATE_MASTER_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_MASTER_ERROR' }, err);
      });
    }
  };