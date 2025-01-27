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
import { fetchPluginList } from "./helpers";
import { useLocalStorage } from "usehooks-ts";
import { unionBy } from "lodash";

import { FETCH_SUCCESS, FETCH_FAILURE } from "./actionTypes";

const AppContext = createContext<
  { state: AppState; dispatch: Dispatch<ActionType> } | undefined
>(undefined);

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [storagePluginList, setStoragePluginList] = useLocalStorage(
    "storage-plugin-list",
    []
  );

  useEffect(() => {
    const initPluginList = async () => {
      try {
        const pluginList = await fetchPluginList();
        const mergedPluginList = unionBy(
          pluginList.plugins,
          storagePluginList,
          "name"
        );

        dispatch({
          type: FETCH_SUCCESS,
          payload: mergedPluginList,
        });
        setStoragePluginList(mergedPluginList);
      } catch (error: unknown) {
        console.error("Failed to fetch data:", error);
        dispatch({ type: FETCH_FAILURE, payload: String(error) });
      }
    };

    initPluginList();
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

const useAppSelector = <T,>(selector: (state: AppState) => T): T => {
  const { state } = useAppContext();
  return selector(state);
};

export { AppProvider, useAppContext, useAppSelector };
