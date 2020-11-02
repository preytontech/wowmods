import {
  CATCH_ERROR,
  GET_DIRPATHS,
  GET_ROOTPATH,
  SET_LOADING,
  SET_SELECTED,
} from "../actions/dirDropdownActions/constants";

export interface IWowDirState {
  wowRootDir: string;
  wowVerDirList: Array<string>;
  wowSelectedDir: string;
  loading: boolean;
  error: string;
  
}

interface IDirActions {
  type:
    | typeof GET_ROOTPATH
    | typeof GET_DIRPATHS
    | typeof SET_LOADING
    | typeof CATCH_ERROR
    | typeof SET_SELECTED;
  payload: IWowDirState;
}

export const WowDirReducer = (
  state: IWowDirState = {
    wowRootDir: "",
    wowVerDirList: [],
    wowSelectedDir: "1",
    loading: false,
    error: "",
  },

  { type, payload }: IDirActions
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
