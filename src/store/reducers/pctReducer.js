const initState = {}

const pctReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PCT_SUCCESS':
      console.log('CREATE PCT SUCCESS');
      return state;
    case 'CREATE_PCT_ERROR':
      console.log('CREATE PCT ERROR');
      return state;
    default:
      return state;
  }
};

export default pctReducer;