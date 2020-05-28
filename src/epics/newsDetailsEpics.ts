import axios from "axios";

import { map, switchMap, catchError } from "rxjs/operators";
import { ofType, combineEpics, Epic } from "redux-observable";
import { from, of } from "rxjs";

import {
  fetchNewsDetailsSuccess,
  fetchNewsDetailsFailure,
} from "../action/newsDetailsAction";
import { IState } from "../reducer";
import {
  INewsDetailsAction,
  NewsDetailsActionTypes,
} from "../models/newsDetailsModel";

const NewsDetailsEpic: Epic<INewsDetailsAction, any, IState> = (
  action$,
  store$
) =>
  action$.pipe(
    ofType(NewsDetailsActionTypes.FETCH_News_Details),
    switchMap((action) => {
      return from(
        axios.get(
          `https://hn.algolia.com/api/v1/search?page=${action.payload.id}`
        )
      ).pipe(
        map((response) => {
          return fetchNewsDetailsSuccess(response.data);
        }),
        catchError(() => of(fetchNewsDetailsFailure()))
      );
    })
  );
export default combineEpics(NewsDetailsEpic);
