import { AppState } from "./types";

export const selectPlugins = (state: AppState) => state?.data;
