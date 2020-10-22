import {
  CATCH_ERROR,
  GET_DIRPATHS,
  GET_ROOTPATH,
  SET_LOADING,
  SET_SELECTED,
} from "../actions/onLoadActions/constants";

export interface WowDirState {
  wowRootDir: string;
  wowVerDirList: Array<string>;
  wowSelectedDir: string;
  loading: boolean;
  error: string;
}

interface DirActions {
  type: typeof GET_ROOTPATH | typeof GET_DIRPATHS | typeof SET_LOADING|typeof CATCH_ERROR | typeof SET_SELECTED;
  payload: WowDirState;
}

export const WowDirReducer = (
  state: WowDirState = {
    wowRootDir: "",
    wowVerDirList: [],
    wowSelectedDir: "1",
    loading: false,
    error:""
  },

  { type, payload }: DirActions
) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };
    case GET_ROOTPATH:
      return { ...state, wowRootDir: payload };
      case SET_SELECTED:
        return { ...state, wowSelectedDir: payload };
    case GET_DIRPATHS:
      return { ...state, wowVerDirList: payload };
    case CATCH_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
