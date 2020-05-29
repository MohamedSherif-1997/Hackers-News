import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs.react";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Chart extends Component {
  render() {
    const chartData = this.props.data;
    var dataSet = [];
    chartData.map((row, index) => {
      dataSet.push({ x: row.index, y: row.points });
    });

    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2",
      title: {
        text: "Time Line Chart",
      },
      axisY: {
        title: "Vote",
        includeZero: false,

        interval: 500,
      },
      axisX: {
        title: "ID",
        interval: 1000,
        includeZero: false,
      },
      data: [
        {
          type: "line",
          toolTipContent: "{y} Vote:for {x}",
          dataPoints: dataSet,
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default Chart;
