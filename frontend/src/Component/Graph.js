import React,{useState} from 'react'
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
function Graph(props) {
  const[x,setX]=useState(Object.keys(props.data.data.input_money_portfolio));
  const[y,setY]=useState("");
  //props.data.data.input_money_portfolio
    const series = [{
        name: '세제해택o',
        data: Object.values(props.data.data.yes_tax.real_portfolio_account)
      }, {
        name: '세제해택x',
        data: Object.values(props.data.data.no_tax.real_portfolio_account)
      },
      {
        name: '납입금액',
        data: Object.values(props.data.data.input_money_portfolio)
      }];
      const options = {
        chart: {
          type:'line',
          height:350,
        },
        colors:['#66c6a3', '#ff7759', '#787878'],
        fill:{
          opacity:[0.9, 0.9, 0.7],  
        },
        
        stroke: {
          curve: 'smooth',
          width: 3,
          lineCap: 'round',
          dashArray: [0, 0, 4]
        },
        title: {
            text: '결과비교',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['white', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
        xaxis: {
          type: 'datetime',
          categories: Object.keys(props.data.data.input_money_portfolio)
        },
        tooltip: {
          x: {
            format: 'yy'
          },
        },
      }

    return (
      <MainLayout>
        <ReactApexChart options={options} series={series} type="line" height={350}/>
      </MainLayout>
        
    );
};

export default Graph;
