import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./actionTypes";

export type Plugin = {
  name: string;
  description: string;
  path: string;
  state: boolean;
};

export type AppState = {
  data: any[]; // eslint-disable-line
  loading: boolean;
  error: string | null;
};

export type ActionType =
  | { type: typeof FETCH_REQUEST }
  | { type: typeof FETCH_SUCCESS; payload: any[] } // eslint-disable-line
  | { type: typeof FETCH_FAILURE; payload: string };
