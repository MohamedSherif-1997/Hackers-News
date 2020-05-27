import React from "react";
import { withStyles } from "@material-ui/core/styles";

import NewsTable from "../components/table";

const style = {
  content: {
    display: "flex",
    height: "80vh",
    backgroundColor: "#eceff1",
    justifyContent: "center",
    alignItems: "center",
  },
};
function createData(commentsCount, votesCount, newsDetails) {
  return { commentsCount, votesCount, newsDetails };
}
const rows = [
  createData(237, 7, "Ice cream sandwich"),
  createData(3, 9, "HI....JIMKJOKIMIM"),
  createData(30, 10, "my name is khan this news from south side"),
  createData(100, 19, "Ice cream sandwich"),
  createData(300, 19, "my name is khan this news from south side"),
  createData(23, 20, "HI....JIMKJOKIMIM"),
];
const Content = (props) => (
  <div className={props.classes.content}>
    <NewsTable rows={rows} />
  </div>
);
export default withStyles(style)(Content);
