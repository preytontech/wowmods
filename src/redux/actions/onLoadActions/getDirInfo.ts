import { getAllDirs } from "../../../services/native/win/fileReadWrite";
import { readRegistry } from "../../../services/native/win/registryReader";
import { CATCH_ERROR, GET_DIRPATHS, GET_ROOTPATH, SET_LOADING } from "./constants";

export const getDirInfo = (key: string) => {
  return (dispatch: any) => {
    //TODO fetch from local cache if available
    dispatch({ type: SET_LOADING, payload: true });
    readRegistry(key)
      .then((res: any) => {
        if (res && res.values.InstallPath.value) {
          let path = res.values.InstallPath.value;
          let arr = path.split("\\");
          let i = 0;
          for (i = 0; i < arr.length; i++) {
            if (arr[i] === "World of Warcraft") {
              break;
            }
          }
          arr = arr.slice(0, i + 1);
          arr = arr.join("/");
          //TODO: write to local cache
          dispatch({ type: GET_ROOTPATH, payload: arr });
          getAllDirs(arr)
            .then((res) => {
              dispatch({ type: GET_DIRPATHS, payload: res });
              dispatch({ type: SET_LOADING, payload: false });
            })
            .catch((err) => {
              console.log(err);
              dispatch({type:CATCH_ERROR, payload:"No dir found..."})
              
      dispatch({ type: SET_LOADING, payload: false });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({type:CATCH_ERROR, payload:"No dir found..."})
        
      dispatch({ type: SET_LOADING, payload: false });
      });
  };
  /* getAllDirs("C:/ProgramData/Dell").then((res) => {
        console.log(res);
      }); */
  
};
export const lookupRootDir = (path: string) => {
  path = path.split("\\").join("/")
  return (dispatch: any) => {
    //TODO fetch from local cache if available
    dispatch({ type: SET_LOADING, payload: true });
    
    //TODO: write to local cache
    dispatch({ type: GET_ROOTPATH, payload: path });
    getAllDirs(path)
      .then((res) => {
        console.log(res)
        dispatch({ type: GET_DIRPATHS, payload: res });
        dispatch({ type: SET_LOADING, payload: false });
        dispatch({type:CATCH_ERROR, payload:""})
        dispatch({ type: SET_LOADING, payload: false });
        dispatch({ type: GET_DIRPATHS, payload: res });
      })
      .catch((err) => {
        console.log(err);
        dispatch({type:CATCH_ERROR, payload:"No dir found..."})
        
        dispatch({ type: SET_LOADING, payload: false });
      });
    }
};
