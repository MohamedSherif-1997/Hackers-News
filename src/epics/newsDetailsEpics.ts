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
        axios.get(`http://hn.algolia.com/api/v1/items/${action.payload.id}`)
      ).pipe(
        map((response) => {
          console.log(response);
          return fetchNewsDetailsSuccess(response.data);
        }),
        catchError(() => of(fetchNewsDetailsFailure()))
      );
    })
  );
export default combineEpics(NewsDetailsEpic);
