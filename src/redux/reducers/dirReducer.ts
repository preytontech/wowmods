import {
  GET_DIRPATHS,
  GET_ROOTPATH,
  SET_LOADING,
} from "../actions/onLoadActions/constants";

export interface WowDirState {
  wowRootDir: string;
  wowVerDirList: Array<string>;
  loading: boolean;
}

interface DirActions {
  type: typeof GET_ROOTPATH | typeof GET_DIRPATHS | typeof SET_LOADING;
  payload: WowDirState;
}

export const WowDirReducer = (
  state: WowDirState = {
    wowRootDir: "",
    wowVerDirList: [],
    loading: false,
  },

  { type, payload }: DirActions
) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };
    case GET_ROOTPATH:
      return { ...state, wowRootDir: payload };
    case GET_DIRPATHS:
      return { ...state, wowVerDirList: payload };
    default:
      return state;
  }
};
