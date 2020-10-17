import jwt_decode from "jwt-decode";

const initialState = {
    isAuthenticated:false,
    userDetails:{},
    token:sessionStorage.getItem('access_token')
  };

var  accessToken = sessionStorage.getItem('access_token')
function getInitialState(){
    if(accessToken !== null && accessToken != undefined){
        let decoded = jwt_decode(accessToken);
        let initialState = {
            isAuthenticated:true,
            userDetails:decoded,
            token:accessToken
        }
        return initialState;
    }else{
        return initialState
    }
}


export default function (state = getInitialState(), action) {
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

      case 'LOG_OUT':{
        return {...state,isAuthenticated:false}
      }
        
      default:
        return state;
    }
  }