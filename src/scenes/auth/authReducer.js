const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type){
      case 'LOGIN_ERROR':
      console.log('LOGIN ERROR');
      return{
          ...state,
          authError: 'LOGIN FAILED'
      }
      case 'LOGIN_SUCCESS':
        console.log('LOGIN SUCCESS');
        return{
            ...state,
            authError: null
        }
        case 'SIGNOUT_SUCCESS':
            console.log('signout_success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup_Success');
            return {
                ...state,
                authError:null
            }
        case 'SIGNUP_ERROR':
            console.log('signup_Success');
            return {
                ...state,
                authError:action.err.message
            }

    default:
        return state;
  }
};

export default authReducer;