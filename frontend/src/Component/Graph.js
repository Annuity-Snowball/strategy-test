import React from 'react'
import '../App.css';
import ReactApexChart from "react-apexcharts" 
function Graph() {
    const series = [{
        name: '세제해택o',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: '세제해택x',
        data: [11, 32, 45, 32, 34, 52, 41]
      },
      {
        name: '납입금액',
        data: [10, 20, 30, 40, 50, 60, 70]
      }];
      const options = {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
            text: '결과비교',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
        xaxis: {
        //   type: 'datetime',
          categories: ["2018", "2019", "2020", "2021", "2022", "2023","2024"]
        },
        tooltip: {
          x: {
            format: 'yy'
          },
        },
      }

    return (
        <div className="p_insert_body">
        <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    );
};

export default Graph;
