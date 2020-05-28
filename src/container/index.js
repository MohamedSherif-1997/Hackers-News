import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { ApiStatus } from "../models/apiStatus";
import NewsTable from "../components/table";
import Loading from "../components/Loading";

import { fetchNewsDetails } from "../action/newsDetailsAction";

const style = {
  content: {
    display: "flex",
    height: "80vh",
    backgroundColor: "#eceff1",
    justifyContent: "center",
    alignItems: "center",
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
  };
  componentDidMount() {
    var newsData = [];
    for (let i = 0; i < 5; i++) {
      // newsData =
      if (this.props.fetchNewsDetails(i + 1) && this.props.newsDetails) {
        newsData.push(this.props.newsDetails);
      }
      // ? newsData.push(this.props.newsDetails)
      // : ;

      // if (newsData.length > 0) {
      //   this.state.responseData.push(this.props.newsDetails);
      // } else {
      // }

      console.log(newsData, "haii");
    }
    this.setState({ responseData: newsData });
  }

  render() {
    // const response = push(this.props.newsDetails);
    return (
      <div>
        {this.props.apiStatus === ApiStatus.IN_PROGRESS ||
        !this.props.newsDetails ? (
          <div className={this.props.classes.loading}>
            <Loading />
            <p className={this.props.classes.text}>
              Wait a minute Table is loding ....
            </p>
          </div>
        ) : (
          <NewsTable rows={this.props.newsDetails} />
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("state-====", state);
  return {
    newsDetails: state.data,
    apiStatus: state.apiStatus,
  };
}

export default connect(mapStateToProps, {
  fetchNewsDetails,
})(withStyles(style)(Content));
