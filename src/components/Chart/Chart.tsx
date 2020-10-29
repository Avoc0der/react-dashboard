import React from 'react'
// Components
// Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Card from '../Card/Card'

const options = {
    chart: {
        height: '360px',
        type: 'column',
        style: {
            fontFamily: `'Blinker', sans-serif`,
        },
    },
    title: {
        text: 'Revenue by Product',
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
    },
    yAxis: {
        min: 0,
        reversedStacks: false,
        title: {
            text: 'Billions of Dollars',
        },
    },
    tooltip: {
        pointFormat:
            '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true,
    },
    plotOptions: {
        series: {
            borderWidth: 0,
        },
        column: {
            stacking: 'percent',
        },
    },
    series: [
        {
            name: 'Phones',
            data: [5, 3, 4, 7, 2],
            color: '#149947',
        },
        {
            name: 'Services',
            data: [2, 2, 3, 2, 1],
            color: '#1dda65',
        },
        {
            name: 'Laptops',
            data: [3, 4, 4, 2, 5],
            color: '#5cf396',
        },
        {
            name: 'Tablets',
            data: [3, 4, 4, 2, 5],
            color: '#c1fad7',
        },
    ],
}

const Chart = (): JSX.Element => {
    return (
        <Card height={400}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </Card>
    )
}
export default Chart
