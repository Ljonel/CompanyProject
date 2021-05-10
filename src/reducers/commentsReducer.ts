import { ISingleComment } from "../entities/comments";
import * as actionTypes from "../actions/commentsTypes";

export interface ICommentsReducer {
  commentsList: ISingleComment[];
}

const defaultState = (): ICommentsReducer => ({
  commentsList: [],
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_COMMENTS: {
      const paylod: actionTypes.ICommentTypes["GET_COMMENTS"] = action;
      return {
        ...state,
        commentsList: paylod.commentsList,
      };
    }
    default: {
      return state;
    }
  }
};
