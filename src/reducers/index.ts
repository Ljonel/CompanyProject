//reducers
import { combineReducers } from "redux";
import users, { IUsersReducer } from "./usersReducer";
import photos, { IPhotosReducer } from "./photosReducer";
import posts, { IPostsReducer } from "./postsReducer";
import comments, { ICommentsReducer } from "./commentsReducer";

export default combineReducers({
  users,
  photos,
  posts,
  comments,
});

export interface IState {
  users: IUsersReducer;
  photos: IPhotosReducer;
  posts: IPostsReducer;
  comments: ICommentsReducer;
}
