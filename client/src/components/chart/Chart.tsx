import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'


export interface ChartData {
    datasets: [{
        data: number[],
        label: string,
        backgroundColor: string[],
        hoverOffset: number
    }];
}

interface CompData {
    data: ChartData,
}

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)



const Chart = ({ data }: CompData) => {

    return (
        <div 
            className="doughnut"
            style={{
                width: "350px",
                height: "350px"
            }}
        >
            <Doughnut
                data={data}
            ></Doughnut>
        </div>
    );
};

export default Chart;
