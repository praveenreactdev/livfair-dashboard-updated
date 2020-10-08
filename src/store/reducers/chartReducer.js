
const initialState = {
      '0':{total:0},
      '1':{total:0},
      '2':{total:0},
      '3':{total:0},
      '4':{total:0}
  };

export default function (state = initialState, action) {
    switch (action.type) {
      case 'LOAD_CHART_DATA':
        return {
          ...action.payload
        };
        
      default:
        return state;
    }
  }