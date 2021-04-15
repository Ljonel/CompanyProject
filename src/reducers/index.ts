//reducers
import { combineReducers } from "redux";
import users, { IUsersReducer } from "./usersReducer";
import photos, { IPhotosReducer } from "./photosReducer";

export default combineReducers({
  users,
  photos,
});

export interface IState {
  users: IUsersReducer;
  photos: IPhotosReducer;
}
