import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
  FC,
  useEffect,
} from "react";

import { initialState } from "./state";
import { appReducer } from "./reducer";
import { AppState, ActionType } from "./types";
import { fetchPlugins } from "./helpers";

const AppContext = createContext<
  { state: AppState; dispatch: Dispatch<ActionType> } | undefined
>(undefined);

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    fetchPlugins(dispatch);
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
