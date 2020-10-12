
const initialState = {
    summary:[],
    events:[],
    exhibitors:[],
    initialValues:{},
    eventActivities:[],
    eventCreationStatus:false
  };

export default function (state = initialState, action) {
    switch (action.type) {
      case 'LOAD_DASHBOARD':
        return {
          ...state,summary:[...action.payload],
        };
      case 'LOAD_EVENTS':{
        console.log(action)
        return {
          ...state,events:action.payload
        };
      }
      case 'CONFIGURE_EVENT' :{
       return  {...state,initialValues:action.payload.event,exhibitors:action.payload.exhibitors}
      }
      case 'LOAD_EXHIBITORS': {
        return {...state,exhibitors:action.payload.exhibitors}
      }
      case 'CREATE_EVENT_SUCCESS':{
        return {...state,eventCreationStatus:true}
      }
      case 'EDIT_EXHIBITOR':{
        console.log('in reducer edit exhi')
        let {exhibitorId} = action.payload;

        let {exhibitors} = state;
        console.log(exhibitorId)
        if(exhibitors.length > 0){
          console.log('inside > 0')
          let ex = exhibitors.filter(x=> x.exhibitorId = exhibitorId)[0]
          delete ex['_id']
          return {...state,initialValues:ex}
        }else{
          return {...state}
        }

      }
      case 'LOAD_EVENT_ACTIVITIES':{
        return {...state,eventActivities:action.payload}
      }
        
      default:
        return state;
    }
  }