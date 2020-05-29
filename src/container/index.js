import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { ApiStatus } from "../models/apiStatus";
import NewsTable from "../components/table";
import Loading from "../components/Loading";

import Chart from "../components/charts";
import { fetchNewsDetails } from "../action/newsDetailsAction";

const style = {
  content: {
    display: "flex",
    height: "80vh",
    flexDirection: "column",
  },
  text: {
    fontSize: "20px",
    color: "red",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};
class Content extends Component {
  state = {
    responseDate: [],
    pageNo: 0,
  };

  componentDidMount() {
    this.props.fetchNewsDetails(this.state.pageNo);
  }
  nextPage = () => {
    let pageNoIncrement = this.state.pageNo + 1;
    this.props.fetchNewsDetails(pageNoIncrement);
    this.setState({ pageNo: pageNoIncrement });
  };
  previousPage = () => {
    let pageNoIncrement = this.state.pageNo - 1;
    this.props.fetchNewsDetails(pageNoIncrement);

    this.setState({ pageNo: pageNoIncrement });
  };
  render() {
    return (
      <div className={this.props.classes.content}>
        {this.props.apiStatus === ApiStatus.IN_PROGRESS ||
        !this.props.newsDetails ? (
          <div className={this.props.classes.loading}>
            <Loading />
            <p className={this.props.classes.text}>
              Wait a minute Table is loding ....
            </p>
          </div>
        ) : (
          <>
            <div>
              <NewsTable
                rows={this.props.newsDetails}
                pageNo={this.state.pageNo}
                nextPageHandler={this.nextPage}
                previousPageHandler={this.previousPage}
                previousButtonDisabled={this.state.pageNo === 0 ? true : false}
              />
            </div>
            <div>
              <Chart data={this.props.newsDetails} />
            </div>
          </>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    newsDetails: state.data.hits,
    apiStatus: state.apiStatus,
  };
}

export default connect(mapStateToProps, {
  fetchNewsDetails,
})(withStyles(style)(Content));
