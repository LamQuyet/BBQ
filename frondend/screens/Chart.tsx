import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Platform,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Statistical} from '../API/PostData';

const screenWidth = Dimensions.get('window').width;

interface Bill {
  _id: Object;
  Account: string;
  Name: string;
  Addres: string;
  PhoneNumber: string;
  Foods: [
    {
      _id: Object;
      quantity: number;
      name: string;
      image: string;
      category: string;
      price: number;
    },
  ];
  TotalPrice: number;
  Status: string;
  Time: Date;
}

interface Food {
  _id: Object;
  quantity: number;
  name: string;
  image: string;
  category: string;
  price: number;
}

const Chart = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<any>('date');
  const [show, setShow] = useState(false);
  const [income, setIncome] = useState(0);
  const [foods, setFoods] = useState([]);
  const [bbq, setBBQ] = useState(0);
  const [hotpot, setHotpot] = useState(0);
  const [drink, setDrink] = useState(0);

  const onChange = async (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    await setDate(currentDate);
    console.log(currentDate);
    Statistical(currentDate.toISOString().slice(0, 10), setData);
  };

  const format = (price: number) => {
    var money = '' + price;
    return money
      .split('')
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + '.') + prev;
      });
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  useEffect(() => {
    Statistical(date.toISOString().slice(0, 10), setData);
  }, []);

  useEffect(() => {
    let Income: number = 0;
    let foods: any = [];
    if (data == null) {
      Income = 0;
    } else {
      data.forEach(
        (bill: Bill) => ((Income += bill.TotalPrice), foods.push(bill.Foods)),
      );
    }
    setIncome(Income);
    setFoods(foods[0]);
  }, [data]);

  useEffect(() => {
    let bbq: any = 0;
    let hotpot: any = 0;
    let drink: any = 0;
    if (foods != undefined) {
      foods.forEach((food: any) => {
        if (food.category == 'BBQ') {
          bbq += food.price * food.quantity;
        }
        if (food.category == 'Hotpot') {
          hotpot += food.price * food.quantity;
        }
        if (food.category == 'Drink') {
          drink += food.price * food.quantity;
        }
      });
    } else {
      setFoods([]);
    }
    setBBQ(bbq);
    setHotpot(hotpot);
    setDrink(drink);
  }, [foods]);

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

  const dataChart = [
    {
      name: 'BBQ',
      population: bbq,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Hotpot',
      population: hotpot,
      color: 'orange',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Drink',
      population: drink,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

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
            <Text style={styles.income}>{`${format(income)} VNĐ`}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{flex: 0.8}}>
        <View style={{flex: 0.1, marginTop: 20, marginHorizontal: 10}}>
          <TouchableWithoutFeedback
            onPress={() => {
              showDatepicker();
            }}>
            <Text style={styles.today}>
              {`${date.getDate()} - ${
                date.getMonth() + 1
              } - ${date.getFullYear()}`}
            </Text>
          </TouchableWithoutFeedback>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="calendar"
              onChange={onChange}
            />
          )}
        </View>
        <View style={{backgroundColor: '#1c1c1c', flex: 0.5}}>
          <PieChart
            data={dataChart}
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
              <Text>{`${format(bbq)} VNĐ`}</Text>
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
              <Text>{`${format(hotpot)} VNĐ`}</Text>
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
              <Text>{`${format(drink)} VNĐ`}</Text>
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
    fontSize: 22,
  },
  detailLable: {
    fontSize: 20,
  },
});
