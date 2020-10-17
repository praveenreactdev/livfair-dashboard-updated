import axios from 'axios'

const config = {
  environment: process.env.REACT_APP_NODE_ENV,
  companyName: 'Techfully',
  secretKey: process.env.REACT_APP_SECRET_KEY,
  appBaseName: process.env.REACT_APP_BASENAME,
  appGAID: process.env.REACT_APP_GAID,
  captcha: "google",
  apiRootPath: process.env.REACT_APP_API_ROOT_PATH || "https://api.techfully.io",
  authenticationURL: "/v1/authenticate",
  registerURL: '/v3/registerUser',
  resetURL: '/v1/sendOtp',
  getChatData: '/v1/chatData',
  getMetaDataURL: "/init/getMetaData",
  websocketRootPath: process.env.REACT_APP_WEBSOCKET_ROOT_PATH || "ws://localhost:8000/",
  eventConfigurationBaseURL: 'https://event-manager.livfair.com/',
  websocketURL: "ws://localhost:8000/api/ws/notification",
  changePasswordURL: "/v1/updatePassword",
  updateUserURL: "/v1/updateUser/",
  loadDashboard: '/v1/exhibitor/summary',
  loadAdminDashboard: '/v1/admin/summary',
  validateOTP: '/v3/validateOtp',
  resetPassword: '/v1/resetPassword',
  feedbackUrl: '/v1/feedback',
  loginEvent: '/v1/logEvent',
  logoutEvent: '/v1/logout',
  getEvents: 'getEvents',
  getChartData: '/v2/dashboard/summary',
  getExhibitorsForEvent: 'getExhibitorsForEvent',
  token: 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6InJzYV9wcml2X2tleSJ9.eyJfaWQiOiI1ZjQyZmM1MTRhZTZjMzA5MjExZTVmNmYiLCJuYW1lIjoiQWRoZWVwIiwiZ2VuZGVyIjoibWFsZSIsInBhcmVudE5hbWUiOiJNb2hhbWVkIiwiZW1haWxJZCI6ImFkaGVlcEB5bWFpbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5OTc2OTIwMjg1IiwiYm9hcmQiOiJTVEFURUJPQVJEIiwic2NvcmUiOiIxIiwiY3V0T2ZmIjoiMSIsInNjaG9sYXJzaGlwRWxpZ2liaWxpdHkiOiJub25lIiwiZGVjaWRlZENvdXJzZSI6Im5vIiwiZGVjaWRlZENvbGxlZ2UiOiJubyIsIm5lZWRTY2hvbGFyc2hpcCI6Im5vIiwiZmF0aGVySW5jb21lIjoiIiwidXNlclR5cGUiOiJWaXNpdG9yIiwiZXZlbnROYW1lIjoiRWR1IEZhaXIgMjAyMCIsInJvbGVOYW1lIjoiVmlzaXRvciIsInJlZ2lzdHJhdGlvblRpbWUiOjE1OTgyMjU0ODkzMDcsImlzQWN0aXZlIjoiWSIsImlzQXV0aCI6dHJ1ZSwicm9sZSI6eyJfaWQiOiIyIiwibmFtZSI6IlZpc2l0b3IiLCJkZXNjcmlwdGlvbiI6IlJvbGUgZGVmaW5lZCBmb3IgZXZlbnQgdmlzaXRvciIsInByaXZpbGVnZXMiOlsiSk9JTiBFVkVOVCJdLCJpc0FjdGl2ZSI6IlkifSwiaWF0IjoxNjAyMTUwMDkyLCJleHAiOjE2MDIyMzY0OTJ9.XHZsRCHmNp62DWCSJjHkPIO9Doz-etvz9QeBikiKhQNvqoMeIxnSWBkgbStX8culHZ9WjxcJzlUYvMyZaU8uTTeUcc92EtLIxi2DORb1Fjv3R9DsNbO_hebFUlm6t1CVjyrgZd4_k_97tyhtbYnpn01dXSXY2pJCfyOrrGHF6j-YURoDUleqP6DO43BGlG-Dym4nFMbkjjWLwkiJJ8idoVtDujf-Ab9fAdnJVF1Zee0kRlSfh6xjDCKgcHUTta7OtUb3xQyO1d2p9zaYnjrk_9kn7N-JNxJ9dwG1sCPGXAKZ0z3gyVfnhPkmECGFyoHVxj1JlKZNX9RKs7sLN-pYOw'
};

export const getChartData = (values) => (dispatch) => {
  axios
    .get(config.apiRootPath + config.getChartData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + sessionStorage.getItem('access_token')
      },
    })
    .then((res) => {
      if (res.data.success) {
        let { summary } = res.data;
        dispatch({
          payload: summary,
          type: 'LOAD_CHART_DATA',
        });
      }
    });
};