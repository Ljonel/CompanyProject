import { ISinglePost } from "../entities/posts";
import * as actionTypes from "../actions/postsTypes";

export interface IPostsReducer {
  postsList: ISinglePost[];
}

const defaultState = (): IPostsReducer => ({
  postsList: [],
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_POSTS: {
      const paylod: actionTypes.IPostTypes["GET_POSTS"] = action;
      return {
        ...state,
        postsList: paylod.postsList,
      };
    }
    default: {
      return state;
    }
  }
};
