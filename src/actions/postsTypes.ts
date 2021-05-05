import { ISinglePost } from "../entities/posts";
export const GET_POSTS = "GET_POSTS";

export interface IPostTypes {
  GET_POSTS: {
    postsList: ISinglePost;
  };
}
