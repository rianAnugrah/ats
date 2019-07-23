const initState = {}

const masterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_MASTER_SUCCESS':
      console.log('create master success');
      return state;
    case 'CREATE_MASTER_ERROR':
      console.log('create master error');
      return state;
    default:
      return state;
  }
};

export default masterReducer;