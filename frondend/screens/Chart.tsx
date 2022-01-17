import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
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

  // const data = {
  //   labels: ['BBQ', 'Hotpot', 'Drink'], // optional
  //   data: [0.8, 0.6, 0.4],
  // };

  const data = [
    {
      name: 'BBQ',
      population: 6600000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Hotpot',
      population: 6100000,
      color: 'orange',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Drink',
      population: 2300000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const today = new Date();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.2,
          borderRadius: 10,
          marginVertical: 2,
          marginHorizontal: 2,
          justifyContent: 'center',
        }}>
        <ImageBackground
          source={require('../images/background3.jpg')}
          style={{width: '100%', height: '100%', justifyContent: 'center'}}
          imageStyle={{borderBottomRightRadius: 50}}>
          <View style={{marginLeft: 30}}>
            <Text style={styles.lable}>Income today</Text>
            <Text style={styles.income}>15.000.000đ</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{flex: 0.8}}>
        <View style={{flex: 0.1, marginTop: 20, marginHorizontal: 10}}>
          <Text style={styles.today}>{`${today.getDate()} - ${
            today.getMonth() + 1
          } - ${today.getUTCFullYear()}`}</Text>
        </View>
        <View style={{backgroundColor: '#1c1c1c', flex: 0.5}}>
          <PieChart
            data={data}
            width={screenWidth}
            height={250}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'15'}
            center={[10, 10]}
            // absolute
          />
        </View>
        <View style={{flex: 0.3, marginHorizontal: 10}}>
          <Text style={styles.today}>Details</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <View
              style={{
                backgroundColor: 'rgba(131, 167, 234, 1)',
                width: 190,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.detailLable}>BBQ</Text>
              <Text>6.600.000đ</Text>
            </View>
            <View
              style={{
                backgroundColor: 'orange',
                width: 190,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.detailLable}>Hotpot</Text>
              <Text>6.100.000đ</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#F00',
                width: 190,
                height: 60,
                marginTop: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.detailLable}>Hotpot</Text>
              <Text>6.100.000đ</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Chart;

const styles = StyleSheet.create({
  lable: {
    color: 'white',
    fontSize: 23,
  },
  income: {
    color: 'white',
    fontSize: 35,
  },
  today: {
    fontSize: 25,
  },
  detailLable: {
    fontSize: 20,
  },
});
