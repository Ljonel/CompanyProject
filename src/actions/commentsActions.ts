import { Dispatch } from "redux";
import * as actionTypes from "../actions/commentsTypes";
import { ISingleComment } from "../entities/comments";

export const getComments = (): Promise<ISingleComment[]> =>
  ((dispatch: Dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((commentsList: ISingleComment[]) => {
        dispatch({
          type: actionTypes.GET_COMMENTS,
          commentsList,
        });
      });
  }) as any;
