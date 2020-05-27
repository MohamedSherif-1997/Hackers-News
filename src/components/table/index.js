import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ArrowDropUpOutlinedIcon from "@material-ui/icons/ArrowDropUpOutlined";

const Styles = {
  table: {
    minWidth: 100,
  },
  tableRow: {
    backgroundColor: "#FF4500",
    color: "white",
    fontSize: 14,
  },
};

class NewsTable extends Component {
  state = {
    upVoteClicked: false,
    upVoteId: 0,
  };
  upVoteClick = (id) => {
    console.log(id);
    this.setState({ upVoteClicked: true, upVoteId: id });
  };
  hide = () => {
    this.setState({ upVoteClicked: false });
  };

  render() {
    const rows = this.props.rows;
    const upVote = this.state.upVoteClicked;
    const upVoteId = this.state.upVoteId;

    return (
      <TableContainer component={Paper}>
        <Table className={this.props.classes.table}>
          <TableHead>
            <TableRow className={this.props.classes.tableRow}>
              <TableCell className={this.props.classes.tableCell}>No</TableCell>
              <TableCell className={this.props.classes.tableCell}>
                Comments
              </TableCell>
              <TableCell className={this.props.classes.tableCell} align="right">
                Vote Count
              </TableCell>
              <TableCell className={this.props.classes.tableCell} align="right">
                Up-Vote
              </TableCell>
              <TableCell className={this.props.classes.tableCell} align="right">
                News Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.commentsCount}
                </TableCell>
                <TableCell align="right">{row.votesCount}</TableCell>
                <TableCell align="right">
                  <ArrowDropUpOutlinedIcon
                    onClick={() => {
                      let id = index;
                      this.upVoteClick(id);
                    }}
                  />
                </TableCell>
                {upVote && index === upVoteId ? (
                  <TableCell align="right">
                    {row.newsDetails}
                    <Button onClick={this.hide}>Hide</Button>
                  </TableCell>
                ) : (
                  <TableCell align="right">{row.newsDetails}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(Styles)(NewsTable);
