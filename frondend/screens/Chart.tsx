import React from "react";
import { View, Text } from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const Chart = () => {
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43, 72, 89, 71, 120, 31, 200]
            }
        ]
    };
    const format = (price: number) => {
        var money = '' + price;
        return money.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        })
    }

    return (
        <View style={{ backgroundColor: '#1c1c1c' }}>
            <BarChart
                horizontalLabelRotation={1}
                yAxisSuffix="đ"
                style={{}}
                data={data}
                width={screenWidth}
                height={220}
                yAxisLabel=""
                chartConfig={chartConfig}
                verticalLabelRotation={30} >
            </BarChart>
        </View>
    )
}
export default Chart;