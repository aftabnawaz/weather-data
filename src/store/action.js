import axios from "axios";
import Weather from "../constants";

export const requestweather = () => async (dispatch) => {
  dispatch({
    type: Weather.LOAD,
  });
  try {
    const json = await axios.get("invoice.data.json");

    dispatch({
      type: Weather.LOAD_SUCCESS,
      invoiceData: json.data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: Weather.LOAD_SUCCESS,
      invoiceData: [],
      isError: true,
    });
  }
};