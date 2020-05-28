import { combineEpics } from "redux-observable";
import NewsDetailsEpic from "./newsDetailsEpics";

export default combineEpics(NewsDetailsEpic);
