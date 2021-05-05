//reducers
import { combineReducers } from "redux";
import users, { IUsersReducer } from "./usersReducer";
import photos, { IPhotosReducer } from "./photosReducer";
import posts, { IPostsReducer } from "./postsReducer";

export default combineReducers({
  users,
  photos,
  posts,
});

export interface IState {
  users: IUsersReducer;
  photos: IPhotosReducer;
  posts: IPostsReducer;
}
