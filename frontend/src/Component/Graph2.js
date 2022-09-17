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
function Graph2() {
    const series = [
      {
        name: '일별수익률',
        data: [0.0, -11.41, -17.2, -11.67, -13.61, 109, 100]
      }];
      const options = {
        chart: {
          height: 350,
          type: 'line'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
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
            categories: ["2018", "2019", "2020", "2021", "2022", "2023","2024"]
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
