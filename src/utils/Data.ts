const generateData = (
    count: number,
    start: number,
    growth: number
): number[] => {
    const data = []
    for (let i = 0; i < count; i += 1) {
        data.push(Math.floor(start + Math.random() * i * growth))
    }
    return data
}

const chartData = [
    {
        name: 'Phones',
        data: generateData(12, 30, 5),
        color: '#149947',
    },
    {
        name: 'Services',
        data: generateData(12, 10, 0.2),
        color: '#1dda65',
    },
    {
        name: 'Laptops',
        data: generateData(12, 6, 0.3),
        color: '#5cf396',
    },
    {
        name: 'Tablets',
        data: generateData(12, 5, 5),
        color: '#c1fad7',
    },
]

export default chartData
