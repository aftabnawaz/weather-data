import Weather from "../constants";

const initalState = {
  weatherData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action) => {
    
  switch (action.type) {
    case Weather.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Weather.LOAD_SUCCESS:
      return {
        ...state,
        weatherData: action.weatherData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;