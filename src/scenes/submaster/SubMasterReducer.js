const initState = {}

const masterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_SUBMASTER_SUCCESS':
      console.log('create submaster success');
      return state;
    case 'CREATE_SUBMASTER_ERROR':
      console.log('create submaster error');
      return state;
    default:
      return state;
  }
};

export default masterReducer;