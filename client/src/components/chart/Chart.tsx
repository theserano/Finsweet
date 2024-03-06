import { useEffect, useRef } from "react";
import "./chart.scss";
import Chart from 'chart.js/auto';



interface ChartData {
    datasets: [{
      data: number[],
      label: string,
      backgroundColor: string[],
      hoverOffset: number
    }];
    labels: string[];
  }
  const data: ChartData = {
      datasets: [{
          data: [40, 35, 10, 10, 5],
          label: 'Spending',
          backgroundColor: [
              '#B0D9B1',
              '#AC94F1',
              '#FFF0CA',
              '#F9CF64',
              '#F38FBF'
          ],
          hoverOffset: 4
      }],
      labels: [
          '40% planting trees',
          '35% cleanliness program',
          '10% helping people',
          '10% animal safety',
          '5% feeding the poor'
      ]
  };
  interface CompData {
    data: ChartData
  }

const Chart = ({data} :CompData) => {

    const chartRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if(chartRef.current){
            const ctx = chartRef.current.getContext('2d');
            if(ctx){
                new Chart(ctx, {
                    type: 'doughnut',
                    data: data
                } )
            }
        }
    }, [data])
    

  return (
    <div>
        <canvas ref={chartRef} />
    </div>
  )
}

export default Chart