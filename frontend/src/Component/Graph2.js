import React from 'react'
import '../css/App.css';
import styled from 'styled-components';
import ReactApexChart from "react-apexcharts"
const MainLayout = styled.div`
 max-width : 1200px;
 width : 1200px;
 margin : 0 auto;
 display : flex;
 flex-direction: column;
 margin-top : 20px;
`; 
function Graph2(props) {
    const series = [
      {
        name: '일별수익률',
        data: Object.values(props.data.data.yes_tax.portfolio_result[`일별 수익률`])
      }];
      const options = {
        chart: {
          height: 350,
          type: 'line'
        },
        colors:['#66c6a3',],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3,
        },
        title: {
            text: '일별수익률',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
        xaxis: {
           type: 'datetime',
            categories: Object.keys(props.data.data.yes_tax.portfolio_result[`일별 수익률`])
        },
        tooltip: {
          x: {
            format: 'yy'
          },
        },
      }

    return (
      <MainLayout>
        <ReactApexChart options={options} series={series} height={350}/>
      </MainLayout>
        
    );
};

export default Graph2;
