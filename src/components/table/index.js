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
    width: "100%",
  },
  tableRow: {
    backgroundColor: "#FF4500",
    color: "white",
    fontSize: "5px",
  },
  title: {
    fontSize: "16px",
    fontFamily: "bold",
  },
  author: {
    fontSize: "20px",
    fontWeight: "bold",
    fontStyle: "oblique",
  },
  url: {
    fontSize: "14px",
    padding: "2px ",
  },
  button: {
    color: "#9400D3",
    width: "20px",
    height: "24px",
    fontSize: "13px",
    fontWeight: "bold",
  },
  rows: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#b2beb5",
    },
  },
};

class NewsTable extends Component {
  state = {
    upVoteClicked: false,
    upVoteId: 0,
  };
  upVoteClick = (id) => {
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
        <Table
          className={this.props.classes.table}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow className={this.props.classes.tableRow}>
              <TableCell className={this.props.classes.tableCell}>No</TableCell>
              <TableCell className={this.props.classes.tableCell}>
                Comments
              </TableCell>
              <TableCell className={this.props.classes.tableCell}>
                Vote Count
              </TableCell>
              <TableCell className={this.props.classes.tableCell}>
                Up-Vote
              </TableCell>
              <TableCell className={this.props.classes.tableCell}>
                News Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((rows, index) => (
              <TableRow key={index + 1} className={this.props.classes.rows}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {rows.num_comments > 0 ? rows.num_comments : 0}
                </TableCell>
                <TableCell>{rows.points}</TableCell>
                <TableCell>
                  <ArrowDropUpOutlinedIcon
                    onClick={() => {
                      let id = index + 1;
                      this.upVoteClick(id);
                    }}
                  />
                </TableCell>
                {upVote && index + 1 === upVoteId ? (
                  <TableCell>
                    <p className={this.props.classes.title}>
                      {rows.title}
                      <span className={this.props.classes.url}>
                        [{" " + rows.url}]
                      </span>
                      <span>
                        by
                        <span className={this.props.classes.author}>
                          {" " + rows.author + " "}
                        </span>
                      </span>
                    </p>
                    <span>
                      <Button
                        onClick={this.hide}
                        className={this.props.classes.button}
                      >
                        [ Hide]
                      </Button>
                    </span>
                  </TableCell>
                ) : (
                  <TableCell>
                    <p className={this.props.classes.title}>{rows.title}</p>
                  </TableCell>
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
