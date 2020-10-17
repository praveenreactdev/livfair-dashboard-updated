import axios from 'axios'
import jwt_decode from "jwt-decode";


const  config = {
    environment: process.env.REACT_APP_NODE_ENV,
    companyName: 'Techfully',
    secretKey:process.env.REACT_APP_SECRET_KEY,
    appBaseName:process.env.REACT_APP_BASENAME,
    appGAID:process.env.REACT_APP_GAID,
    captcha:"google",
    apiRootPath: process.env.REACT_APP_API_ROOT_PATH ||"https://api.techfully.io",
    authenticationURL:"/v1/authenticate",
    registerURL:'/v3/registerUser',
    resetURL:'/v1/sendOtp',
    getChatData: '/v1/chatData',
    getMetaDataURL:"/init/getMetaData",
    websocketRootPath:process.env.REACT_APP_WEBSOCKET_ROOT_PATH || "ws://localhost:8000/",
    eventConfigurationBaseURL:'https://event-manager.livfair.com/',
    websocketURL:"ws://localhost:8000/api/ws/notification",
    changePasswordURL:"/v1/updatePassword",
    updateUserURL:"/v1/updateUser/",
    loadDashboard:'/v1/exhibitor/summary',
    loadAdminDashboard:'/v1/admin/summary',
    validateOTP:'/v3/validateOtp',
    resetPassword: '/v1/resetPassword',
    feedbackUrl:'/v1/feedback',
    loginEvent:'/v1/logEvent',
    logoutEvent:'/v1/logout',
    getEvents:'getEvents',
    getExhibitorsForEvent:'getExhibitorsForEvent'
  };

export const login = (values) => (dispatch) => {
    axios
      .post(config.apiRootPath + config.authenticationURL,values, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          let { token,isAuthenticated } = res.data;
          sessionStorage.setItem('access_token',token)
            let decoded = jwt_decode(token)
            console.log('decoded token',decoded)
          dispatch({
            payload: {token,isAuthenticated,userDetails:decoded},
            type: 'LOGIN_SUCCESS',
          });
        }
      });
  };


  export const logout = () => (dispatch)=>{
    sessionStorage.removeItem('access_token');
    dispatch({
      type:'LOGOUT',
      payload:{}
    })
  }