import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import thunk from "redux-thunk";

interface IPersistedState {
  WowDirReducer: any;
}

//TODO: will need to hydrate our state from a cache
//hardcoded example
//changing the wowVerDirList to empty array will enable dir search
const persistedState: IPersistedState = {
  WowDirReducer: {
    wowRootDir: "C:/Games/World of Warcraft",
    wowSelectedDir: "1",
    //wowVerDirList:[],
    wowVerDirList: [
      {
        name: "Cached",
        path: "C:/Games/World of Warcraft/_retail_",
        version: "8.0.0.0",
      },
    ],
  },
};

const configureStore = () => {
  return createStore(rootReducer, /* persistedState, */ applyMiddleware(thunk));
};

export default configureStore;
