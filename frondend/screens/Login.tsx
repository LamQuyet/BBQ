import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Formik, Form, Field} from 'formik';
import {RegisterSchema} from '../components/validate';
import {ValidationError} from 'yup';
import * as PostData from '../API/PostData';
import * as AsynStore from '../components/AsyncStore';

const Login = ({navigation}: any) => {
  const [status, setStatus] = useState('');
  const [phone, setPhone] = useState();
  const [pass, setPass] = useState();

  const clickLogin = (values: any) => {
    PostData.Login(values.PhoneNumber, values.PassWord, setStatus);
    setPhone(values.PhoneNumber);
    setPass(values.PassWord);
  };
  useEffect(() => {
    AsynStore.CheckLogin().then(res => {
      if (res != null) {
        navigation.replace('Main');
      } else {
        console.log("can't login");
      }
    });
  }, []);

  useEffect(() => {
    if (status === 'user') {
      navigation.replace('Main');
      AsynStore.Login({phone, pass});
    }
    if (status === 'admin') {
      navigation.navigate('Admin');
    }
    if (status === 'Sai số điện thoại hoặc mật khẩu') {
      Alert.alert('Warning', status);
    }
    setStatus('');
  }, [status]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../images/logo.png')} />
      <Formik
        initialValues={{
          PhoneNumber: '',
          PassWord: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={values => {
          PostData.Login(values.PhoneNumber, values.PassWord, setStatus);
          console.log('STATUS', status);
          if (status === '') {
            Alert.alert('Đăng nhập thành công');
          } else {
            Alert.alert('Warning', status);
          }
        }}>
        {({
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          values,
        }) => (
          <View>
            <View style={styles.inputView}>
              <Icon name="mobile-alt" size={20} style={{marginLeft: 18}}></Icon>
              <TextInput
                style={styles.TextInput}
                placeholder="Phone number"
                placeholderTextColor="#003f5c"
                keyboardType="number-pad"
                onChangeText={handleChange('PhoneNumber')}
                onBlur={handleBlur('PhoneNumber')}
                value={values.PhoneNumber}
              />
              {errors.PhoneNumber && touched.PhoneNumber ? (
                <Text style={{color: 'red', fontSize: 12}}>
                  {errors.PhoneNumber}
                </Text>
              ) : null}
            </View>

            <View style={styles.inputView}>
              <Icon name="lock" size={20} style={{marginLeft: 18}}></Icon>
              <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={handleChange('PassWord')}
                onBlur={handleBlur('PassWord')}
                value={values.PassWord}
              />
              {errors.PassWord && touched.PassWord ? (
                <Text style={{color: 'red', fontSize: 12}}>
                  {errors.PassWord}
                </Text>
              ) : null}
            </View>

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                let status = '';
                if (values.PhoneNumber == '' || values.PassWord == '') {
                  Alert.alert('Erro', 'Data null');
                } else {
                  if (errors.PhoneNumber || errors.PassWord) {
                    Alert.alert('Error', 'Data is not valid');
                  } else {
                    clickLogin(values);
                  }
                }
              }}>
              <Text>LOGIN</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={styles.Register}>
        <Text> Are you a new user? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('Register');
          }}>
          <Text style={{color: 'orange'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 60,
    width: 200,
    height: 150,
  },

  inputView: {
    backgroundColor: '#DAA520',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    color: 'black',
  },

  forgot_button: {
    height: 30,
    // marginBottom: 30,
  },

  loginBtn: {
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'orange',
  },
  Register: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
});
