import { FETCH_SUCCESS, FETCH_FAILURE } from "./actionTypes";

// eslint-disable-next-line
export const fetchPlugins = async (dispatch: any) => {
  try {
    const response = await fetch("/api/plugins");
    const data = await response.json();

    dispatch({
      type: FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
    dispatch({ type: FETCH_FAILURE, payload: error });
  }
};
