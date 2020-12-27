import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
  datasets: [
    {
      labels: "Saved this Month",
      data:[23999.00, 28200.00, 21000.00, 22100.00, 30000.00, 25999.00, 3500.00],
      fill: true,
      backgroundColor: 'rgba(242, 245, 250, 1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      
    }
  ]
  
};

const legend = {
  display: false
}

const options = {
  
  annotation: {
    annotations: [
      {
        type: "line",
        mode: "vertical",
        scaleID: "x-axis-0",
        value: 'Oct',
        borderColor: "red",
        borderWidth: 1
      }
    ]
  }
}

  function MonthlyChart() {
  return (
    <div className="App">
      <Line data={data} legend = {legend} options={options} width={350} height={100} />
    </div>
  );
}

export default MonthlyChart;
