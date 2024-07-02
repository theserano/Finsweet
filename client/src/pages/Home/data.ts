import { ChartData } from '../../components/chart/Chart'

export const data: ChartData = {
    datasets: [
        {
            data: [40, 35, 10, 10, 5],
            label: 'Spending',
            backgroundColor: [
                '#B0D9B1',
                '#AC94F1',
                '#FFF0CA',
                '#F9CF64',
                '#F38FBF',
            ],
            hoverOffset: 4,
        },
    ],
}
