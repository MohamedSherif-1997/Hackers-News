import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Pagination extends Component {
  render() {
    const previousButtonDisabled = this.props.previousButtonDisabled;
    return (
      <div>
        <Button
          onClick={this.props.previousPageHandler}
          disabled={previousButtonDisabled}
        >
          Previous
        </Button>
        <span className={this.props.classes.separator}>|</span>
        <Button onClick={this.props.nextPageHandler}>Next</Button>
      </div>
    );
  }
}
export default Pagination;
