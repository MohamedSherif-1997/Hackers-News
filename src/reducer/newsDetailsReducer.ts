import produce from "immer";

import {
  NewsDetailsActionTypes,
  NewsDetailsAction,
} from "../models/newsDetailsModel";

import { ApiStatus } from "../models/apiStatus";

const INITIAL_STATE: NewsDetailsState = {
  apiStatus: ApiStatus.IN_PROGRESS,
  data: {},
};

export default function NewsDetailsStateReducer(
  state = INITIAL_STATE,
  action: NewsDetailsAction
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case NewsDetailsActionTypes.FETCH_News_Details: {
        draft.apiStatus = ApiStatus.IN_PROGRESS;
        break;
      }
      case NewsDetailsActionTypes.FETCH_News_Details_SUCCESS: {
        draft.apiStatus = ApiStatus.SUCCESS;
        draft.data = action.payload.data;
        break;
      }
      case NewsDetailsActionTypes.FETCH_News_Details_FAILURE: {
        draft.apiStatus = ApiStatus.FAILURE;
        break;
      }

      default:
    }
  });
}

export interface NewsDetailsState {
  data: any;
  apiStatus: ApiStatus;
}
