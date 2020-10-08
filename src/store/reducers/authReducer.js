
const initialState = {
    isAuthenticated:false
  };

export default function (state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,...action.payload,
        };
      case 'LOGIN_FAILED':{
        console.log(action)
        return {
          ...state,events:action.payload
        };
      }
        
      default:
        return state;
    }
  }