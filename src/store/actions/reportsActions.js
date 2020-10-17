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
    getExhibitorsForEvent:'getExhibitorsForEvent',
    loadReport: '/v1/admin/activity?activityType=',
    accessToken: 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6InJzYV9wcml2X2tleSJ9.eyJfaWQiOiI1ZjQyZmM1MTRhZTZjMzA5MjExZTVmNmYiLCJuYW1lIjoiQWRoZWVwIiwiZ2VuZGVyIjoibWFsZSIsInBhcmVudE5hbWUiOiJNb2hhbWVkIiwiZW1haWxJZCI6ImFkaGVlcEB5bWFpbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5OTc2OTIwMjg1IiwiYm9hcmQiOiJTVEFURUJPQVJEIiwic2NvcmUiOiIxIiwiY3V0T2ZmIjoiMSIsInNjaG9sYXJzaGlwRWxpZ2liaWxpdHkiOiJub25lIiwiZGVjaWRlZENvdXJzZSI6Im5vIiwiZGVjaWRlZENvbGxlZ2UiOiJubyIsIm5lZWRTY2hvbGFyc2hpcCI6Im5vIiwiZmF0aGVySW5jb21lIjoiIiwidXNlclR5cGUiOiJWaXNpdG9yIiwiZXZlbnROYW1lIjoiRWR1IEZhaXIgMjAyMCIsInJvbGVOYW1lIjoiVmlzaXRvciIsInJlZ2lzdHJhdGlvblRpbWUiOjE1OTgyMjU0ODkzMDcsImlzQWN0aXZlIjoiWSIsInByb2ZpbGVVcmwiOiJodHRwczovL2xpdmZhaXIuc2dwMS5jZG4uZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS93ZWJnbC9wcC5qcGciLCJpc0F1dGgiOnRydWUsInJvbGUiOnsiX2lkIjoiMiIsIm5hbWUiOiJWaXNpdG9yIiwiZGVzY3JpcHRpb24iOiJSb2xlIGRlZmluZWQgZm9yIGV2ZW50IHZpc2l0b3IiLCJwcml2aWxlZ2VzIjpbIkpPSU4gRVZFTlQiXSwiaXNBY3RpdmUiOiJZIn0sImlhdCI6MTYwMjQyMjkwMiwiZXhwIjoxNjAyNTA5MzAyfQ.HFJFlsSRA9P0HkDFrOlcqkak9ekWuEy_JamMLc9oTXFAysqYY13Jd_8L5R140_XGegFTv7qAd94LS-BnpkhI23JQDiKinGZETvAHiwq3kokrI0498RJh-QdRy6gG_mCs9IedX5kxVY3s2Vw9Hg6cShmzynf1LFhjl86prKejx3W_IuUWnpuS0lR3gbAUw4qT2P6GzKlYgIFkCRiDdAws7kpKgJxeVmBXXZx_6v0bM3fC_k7ONFgKnCdI5Wo7O2Bm1FPKK8M50fx4Yb61TReWMDFt1us3AEsUwX7KwgjP0YJAxkcTkXFEMR3XoFDqFUkztb_iZt3Cv6rHK7J6ya15VA'
};
export const loadReport = (values, showDatatable) => (dispatch) => {
  axios
    .get(config.apiRootPath + config.loadReport + values, {
      headers: {
        "Content-Type": "application/json",
        "Authorization":'Bearer '+ sessionStorage.getItem('access_token')
      },
    })
    .then((res) => {
      console.log(res)
      if (res.data.success) {
        console.log(103, res.data)
        showDatatable(true);
        dispatch({
          payload: res.data,
          type: 'LOAD_REPORT',
        });
      }
    });
};