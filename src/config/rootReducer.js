import authReducer from '../scenes/auth/authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import pctReducer from '../scenes/pct/pctReducer';
import masterReducer from '../scenes/master/masterReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  pct: pctReducer,
  master: masterReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer

// the key name will be the data property on the state object