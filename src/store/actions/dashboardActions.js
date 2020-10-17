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
  //eventConfigurationBaseURL:'https://event-manager.livfair.com/',
  eventConfigurationBaseURL: 'http://localhost:4100/',
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
  getExhibitorsForEvent: 'getExhibitorsForEvent',
  getEventActivities: 'getEventActivities',
  createEventActivity: 'createEventActivity'
};

export const loadDashboard = (values) => (dispatch) => {
  axios
    .get(config.apiRootPath + config.loadDashboard, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + sessionStorage.getItem('accessToken')
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


export const loadEvents = (values) => (dispatch) => {
  console.log('inside load events')
  fetch(config.eventConfigurationBaseURL + config.getEvents).then(res => res.json()).then((data) => {
    console.log(data)

    if (data.status) {
      console.log(data)
      let { events } = data;
      console.log(events)
      dispatch({
        payload: events,
        type: 'LOAD_EVENTS'
      })
    }
  })

}

export const configureEvent = (values) => (dispatch) => {
  console.log(values)
  let { eventId, events } = values
  let event = events.filter((x) => { return x.eventId == eventId })[0]
  fetch(config.eventConfigurationBaseURL + 'getExhibitors' + '/' + eventId).then(data => data.json()).then(response => {
    let { exhibitors } = response;
    dispatch({
      payload: { name: 'eduFair2022', event, exhibitors },
      type: 'CONFIGURE_EVENT'
    })
  })

}

export const loadExhibitors = (eventId) => (dispatch) => {
  fetch(config.eventConfigurationBaseURL + 'getExhibitors' + '/' + eventId).then(data => data.json()).then(response => {
    let { exhibitors } = response;
    dispatch({
      payload: { exhibitors },
      type: 'LOAD_EXHIBITORS'
    })
  })
}

export const loadAdminDashboard = (values) => (dispatch) => {
  axios
    .get(config.apiRootPath + config.loadAdminDashboard, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + sessionStorage.getItem('accessToken')
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

export const createEvent = (values) => (dispatch) => {
  console.log(values)
  axios.post(config.eventConfigurationBaseURL + 'createEvent', values, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    let response = res.data;
    let { status, code } = response;
    if (code != "200") {
      dispatch({
        type: 'CREATE_EVENT_FAILED',
        payload: {}
      })
    } else {
      dispatch({
        type: 'CREATE_EVENT_SUCCESS',
        payload: {}
      })
    }
  })
}

export const deleteEvent = (payload) => dispatch => {
  axios.post(config.eventConfigurationBaseURL + 'deleteEvent', payload, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    let response = res.data;
    let { status, code } = response;
    if (code != "200") {
      dispatch({
        type: 'LOAD_EVENTS_FAILURE',
        payload: {}
      })
    } else {
      dispatch(loadEvents(payload))
    }
  })
}

export const editExhibitor = (data) => dispatch => {
  let { exhibitorId } = data;
  console.log('in action ', data)
  dispatch({
    type: 'EDIT_EXHIBITOR',
    payload: { exhibitorId }
  })
}

export const updateExhibitor = (data) => dispatch => {
  let { exhibitorId, eventId } = data.value;
  let { props } = data;
  axios.post(config.eventConfigurationBaseURL + 'createExhibitor', data.value, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    let response = res.data;
    let { status, code } = response;
    if (code != "200") {
      dispatch(loadExhibitors(eventId))
      props.history.push('/admin/exhibitors-list/' + eventId)
    } else {
      //dispatch(loadEvents(payload))
      dispatch(loadExhibitors(eventId))
      props.history.push('/admin/exhibitors-list/' + eventId)
    }
  })
}

export const getEventActivities = (eventId) => (dispatch) => {
  axios
    .get(config.eventConfigurationBaseURL + config.getEventActivities + `/${eventId}`)
    .then((res) => {
      if (res.data.status) {
        let { eventActivities } = res.data;
        console.log('189', eventActivities)
        dispatch({
          payload: eventActivities,
          type: 'LOAD_EVENT_ACTIVITIES',
        });
      }
    });
}

export const editEventActivity = (eventActivityId) => (dispatch) => {
  console.log('198', eventActivityId)
  dispatch({
    type: 'EDIT_EVENT_ACTIVITY',
    payload: eventActivityId
  })
}

export const createEventActivity = (val) =>
  (dispatch) => {
    let { data, history } = val
    let { eventId } = data;
    axios.post(config.eventConfigurationBaseURL + config.createEventActivity, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      dispatch({
        type:'EVENT_ACTIVITY'
      })
      dispatch(getEventActivities(eventId))
      history.goBack()
    })
  }
