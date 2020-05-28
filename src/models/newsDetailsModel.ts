export enum NewsDetailsActionTypes {
  FETCH_News_Details = "News_Details.FETCH",
  FETCH_News_Details_SUCCESS = "News_Details.FETCH_SUCCESS",
  FETCH_News_Details_FAILURE = "News_Details.FETCH_FAILURE",
}

export interface INewsDetailsAction {
  type: NewsDetailsActionTypes.FETCH_News_Details;
  payload: { id: Number };
}

export interface INewsDetailsSuccessAction {
  type: NewsDetailsActionTypes.FETCH_News_Details_SUCCESS;
  payload: { data: any };
}

export interface INewsDetailsFailureAction {
  type: NewsDetailsActionTypes.FETCH_News_Details_FAILURE;
}

export type NewsDetailsAction =
  | INewsDetailsAction
  | INewsDetailsSuccessAction
  | INewsDetailsFailureAction;
