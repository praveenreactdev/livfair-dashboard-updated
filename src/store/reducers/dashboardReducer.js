
const initialState = {
  summary: [],
  events: [],
  exhibitors: [],
  initialValues: {},
  eventActivities: [],
  eventCreationStatus: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_DASHBOARD':
      return {
        ...state, summary: [...action.payload],
      };
    case 'LOAD_EVENTS': {
      console.log(action)
      return {
        ...state, events: action.payload
      };
    }
    case 'CONFIGURE_EVENT': {
      return { ...state, initialValues: action.payload.event, exhibitors: action.payload.exhibitors }
    }
    case 'LOAD_EXHIBITORS': {
      return { ...state, exhibitors: action.payload.exhibitors }
    }
    case 'CREATE_EVENT_SUCCESS': {
      return { ...state, eventCreationStatus: true }
    }
    case 'EDIT_EVENT_ACTIVITY': {
      let { name } = action.payload;
      let { eventActivities } = state;
      console.log(eventActivities)
      console.log('36 dashboard reducer ',name)
      if (eventActivities.length > 0) {
        console.log('38 dashboard reducer',eventActivities)
        let ex = eventActivities.filter(x => x._id = name)[0];
        console.log(ex)
        let { userEngagements } = ex;
        if (Array.isArray(userEngagements) && userEngagements.length > 0) {
          userEngagements.map((ue, index) => {
            let { options } = ue;
             console.log(options)
            let tempOptions = [];
            if (Array.isArray(options) && options.length > 0) {
              options.map(opt => {
                console.log(opt)
                tempOptions.push({ ['name']: opt })
              })
            }
            userEngagements[index]['options'] = tempOptions;
          })
        }
        ex['userEngagements'] = userEngagements
        console.log(ex)
        return { ...state, initialValues: ex }
      } else {
        return { ...state }
      }
    }
    case 'EDIT_EXHIBITOR': {
      console.log('in reducer edit exhi')
      let { exhibitorId } = action.payload;

      let { exhibitors } = state;
      console.log(exhibitorId)
      if (exhibitors.length > 0) {
        console.log('inside > 0')
        let ex = exhibitors.filter(x => x.exhibitorId = exhibitorId)[0]
        delete ex['_id']
        return { ...state, initialValues: ex }
      } else {
        return { ...state }
      }

    }
    case 'LOAD_EVENT_ACTIVITIES': {
      console.log(action.payload)
      let a = { ...state, eventActivities: action.payload }
      console.log(a)
      return a;
    }
    case 'EVENT_ACTIVITY':{
      return {...state,initialValues:{}}
    }

    default:
      return state;
  }
}