import {
  INewsDetailsAction,
  NewsDetailsActionTypes,
  INewsDetailsSuccessAction,
  INewsDetailsFailureAction,
} from "../models/newsDetailsModel";

export function fetchNewsDetails(id: Number): INewsDetailsAction {
  return {
    type: NewsDetailsActionTypes.FETCH_News_Details,
    payload: {
      id,
    },
  };
}

export function fetchNewsDetailsSuccess(data: any): INewsDetailsSuccessAction {
  return {
    type: NewsDetailsActionTypes.FETCH_News_Details_SUCCESS,
    payload: {
      data,
    },
  };
}

export function fetchNewsDetailsFailure(): INewsDetailsFailureAction {
  return {
    type: NewsDetailsActionTypes.FETCH_News_Details_FAILURE,
  };
}
