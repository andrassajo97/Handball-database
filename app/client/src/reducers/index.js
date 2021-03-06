import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import teamReducer from "./teamReducer";
import playerReducer from "./playerReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  user: userReducer,
  team: teamReducer,
  player: playerReducer,
});
