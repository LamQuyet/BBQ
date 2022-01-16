import React from 'react';
import {View, Text} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

const Chart = () => {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    // decimaPlaces: 0,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    // optional
  };
  const databar = {
    labels: [
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
    datasets: [
      {
        data: [220, 45, 28, 80, 99, 43, 72, 89, 71, 120, 31, 200],
      },
    ],
    legend: ['Rainy Days'],
  };

  const dataline = {
    labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [60, 45, 28, 80, 99, 43, 72],
      },
    ],
    legend: ['7 Days'],
  };

  return (
    <View>
      <View style={{backgroundColor: '#1c1c1c'}}>
        <BarChart
          yAxisInterval={5}
          showValuesOnTopOfBars
          horizontalLabelRotation={1}
          yAxisSuffix=""
          style={{}}
          data={databar}
          width={screenWidth}
          height={250}
          yAxisLabel=""
          // chartConfig={chartConfig}
          verticalLabelRotation={30}
          chartConfig={{
            decimalPlaces: 3,
            backgroundGradientFrom: '#1E2923',
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: '#08130D',
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            // decimaPlaces: 0,
            strokeWidth: 3, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false,
          }}
          yLabelsOffset={0}></BarChart>
      </View>
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <Text style={{fontSize: 15, color: 'black'}}>
          Income statement for the year
        </Text>
      </View>
      <View style={{backgroundColor: '#1c1c1c'}}>
        <LineChart
          yAxisInterval={5}
          horizontalLabelRotation={1}
          yAxisSuffix=""
          style={{}}
          data={dataline}
          width={screenWidth}
          height={250}
          yAxisLabel=""
          // chartConfig={chartConfig}
          verticalLabelRotation={30}
          chartConfig={{
            decimalPlaces: 3,
            backgroundGradientFrom: '#1E2923',
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: '#08130D',
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            // decimaPlaces: 0,
            strokeWidth: 3, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false,
          }}
          yLabelsOffset={0}></LineChart>
      </View>
    </View>
  );
};
export default Chart;
