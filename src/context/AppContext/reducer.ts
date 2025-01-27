import { AppState } from "./types";
import { ActionType } from "./types";
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  TOGGLE_ACTIVE_PLUGIN,
} from "./actionTypes";

export const appReducer = (state: AppState, action: ActionType): AppState => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case TOGGLE_ACTIVE_PLUGIN:
      return {
        ...state,
        loading: false,
        data: state.data.map((plugin) =>
          plugin.name === action.payload
            ? { ...plugin, isActive: !plugin.isActive }
            : plugin
        ),
      };
    default:
      return state;
  }
};
