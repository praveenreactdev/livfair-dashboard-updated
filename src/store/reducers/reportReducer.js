
const initialState = {
    activities:[]
  };

export default function (state = initialState, action) {
    switch (action.type) {
      case 'LOAD_REPORT':
        return {
          activities: action.payload['activities']
        };        
      default:
        return state;
    }
  }