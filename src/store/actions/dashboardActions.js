import axios from 'axios'

const config = {
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
    eventConfigurationBaseURL:'http://localhost:4100/',
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
export const loadDashboard = (values) => (dispatch) => {
  axios
    .get(config.apiRootPath + config.loadDashboard, {
      headers: {
        "Content-Type": "application/json",
        "Authorization":'Bearer '+sessionStorage.getItem('accessToken')
      },
    })
    .then((res) => {
      console.log(res)
      if (res.data.success) {
        let { summary } = res.data;
        console.log(summary)
        dispatch({
          payload: summary,
          type: 'LOAD_DASHBOARD',
        });
      }
    });
};


export const loadEvents =  (values) => (dispath)=>{
  console.log('inside load events')
  fetch(config.eventConfigurationBaseURL+config.getEvents).then(res=>res.json()).then((data)=>{
    if(data.status){
      console.log(data)
      let {events} = data;
      console.log(events)
      dispath({
        payload:events,
        type:'LOAD_EVENTS'
      })
    }
  })
}

export const configureEvent = (values) => (dispatch)=>{
  console.log(values)
  let {eventId,events} = values
  let event = events.filter((x)=>{ return x.eventId== eventId})[0]
  fetch(config.eventConfigurationBaseURL+'getExhibitors'+'/'+eventId).then(data=>data.json()).then(response=>{
    let {exhibitors} = response;
    dispatch({
      payload:{name:'eduFair2022',event,exhibitors},
      type:'CONFIGURE_EVENT'
    })
  })
  
}

export const loadExhibitors = (eventId) => (dispatch)=> {
    fetch(config.eventConfigurationBaseURL+'getExhibitors'+'/'+eventId).then(data=>data.json()).then(response=>{
        let {exhibitors} = response;
        dispatch({
          payload:{exhibitors},
          type:'LOAD_EXHIBITORS'
        })
      })
}

export const loadAdminDashboard = (values) => (dispatch) => {
  axios
    .get(config.apiRootPath + config.loadAdminDashboard, {
      headers: {
        "Content-Type": "application/json",
        "Authorization":'Bearer '+sessionStorage.getItem('accessToken')
      },
    })
    .then((res) => {
      if (res.data.success) {
        let { summary } = res.data;
        dispatch({
          payload: summary,
          type: 'LOAD_DASHBOARD',
        });
      }
    });
};