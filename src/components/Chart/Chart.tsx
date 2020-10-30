import React, { useContext } from 'react'
// Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// Components
import Card from '../Card/Card'
// ChartData
import chartData from '../../utils/Data'
// Context
import { ThemeContext } from '../Dashboard/Dashboard'
import { darkerGrey, lightGrey } from '../GlobalStyle/GlobalStyle'

const getOptions = (dark: boolean): any => {
    return {
        chart: {
            height: '360px',
            type: 'column',
            backgroundColor: dark ? darkerGrey : 'white',
            style: {
                fontFamily: `'Blinker', sans-serif`,
            },
        },
        title: {
            text: 'Revenue by Product',
            style: {
                color: dark ? lightGrey : 'black',
            },
        },
        xAxis: {
            labels: {
                style: {
                    color: dark ? lightGrey : 'black',
                },
            },
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
            gridLineColor: dark ? 'grey' : lightGrey,
            min: 0,
            reversedStacks: false,
            title: {
                text: 'Billions of Dollars',
                style: {
                    color: dark ? lightGrey : 'black',
                },
            },
            labels: {
                style: {
                    color: dark ? lightGrey : 'black',
                },
            },
        },
        tooltip: {
            backgroundColor: dark ? darkerGrey : 'white',
            pointFormat:
                '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true,
            style: {
                color: dark ? lightGrey : 'black',
            },
        },
        plotOptions: {
            series: {
                borderWidth: 0,
            },
            column: {
                stacking: 'normal',
            },
        },
        legend: {
            itemStyle: {
                color: dark ? lightGrey : 'black',
            },
        },
        series: chartData,
    }
}

const Chart = (): JSX.Element => {
    const [theme, setTheme] = useContext(ThemeContext)
    const dark = theme === 'dark'
    return (
        <Card height={400} dark={dark}>
            <HighchartsReact
                highcharts={Highcharts}
                options={getOptions(dark)}
            />
        </Card>
    )
}
export default Chart
