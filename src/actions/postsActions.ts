import { Dispatch } from "redux";
import * as actionTypes from "../actions/postsTypes";
import { ISinglePost } from "../entities/posts";

export const getPosts = (): Promise<ISinglePost[]> =>
  ((dispatch: Dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((postsList: ISinglePost[]) => {
        dispatch({
          type: actionTypes.GET_POSTS,
          postsList,
        });
      });
  }) as any;
