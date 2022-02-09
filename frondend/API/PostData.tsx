import axios from 'axios';
import {Alert} from 'react-native';

export const Search = async (text: String, setState: any) => {
  axios
    .post('http://192.168.1.9:3000/food/search', {
      search: text,
    })
    .then(function (response) {
      console.log('SEARCH', response.data);
      setState(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// export const Search = (text: String, data: any) => (
//     fetch('http://192.168.0.102:3000/food/search',
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json'
//             },
//             body: JSON.stringify({ text })
//         })
//         .then(res => res.json())
// );

export const Register = (
  name: String,
  phonenumber: String,
  password: String,
  type: string,
  setState?: any,
) => {
  axios
    .post('http://192.168.1.9:3000/account/register', {
      Name: name,
      PhoneNumber: phonenumber,
      Password: password,
      Type: type,
    })
    .then(function (response) {
      setState(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const Login = (phonenumber: String, password: any, setState: any) => {
  axios
    .post('http://192.168.1.9:3000/account/login', {
      PhoneNumber: phonenumber,
      Password: password,
    })
    .then(res => {
      setState(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const Order = (
  account: String,
  name: String,
  address: String,
  phone: String,
  foods: Object,
  totalprice: number,
) => {
  axios
    .post('http://192.168.1.9:3000/bill/order', {
      Account: account,
      Name: name,
      Addres: address,
      PhoneNumber: phone,
      Foods: foods,
      TotalPrice: totalprice,
    })
    .then(res => {
      // setState(res.data)
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const DeleteAccount = (phone: string, setState: any) => {
  axios
    .post('http://192.168.1.9:3000/account/deleteAccount', {
      PhoneNumber: phone,
    })
    .then(res => {
      console.log(res.data);
      setState(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const UpdateAccount = (
  phoneNumber: string,
  name: string,
  phone: string,
  pass: string,
  type: string,
  setState?: any,
) => {
  axios
    .post('http://192.168.1.9:3000/account/updateAccount', {
      phone: phoneNumber,
      Name: name,
      PhoneNumber: phone,
      Password: pass,
      Type: type,
    })
    .then(res => {
      console.log(res.data);
      setState(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const NewFood = (
  name: string,
  cost: number,
  category: string,
  image: string,
  setState?: any,
) => {
  axios
    .post('http://192.168.1.9:3000/food/new', {
      Name: name,
      Cost: cost,
      Category: category,
      Image: image,
    })
    .then(res => {
      console.log(res.data);
      setState(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const UpdateFoods = (
  update: string,
  name: string,
  cost: number,
  category: string,
  image: string,
  setState?: any,
) => {
  axios
    .post('http://192.168.1.9:3000/food/update', {
      Search: update,
      Name: name,
      Cost: cost,
      Category: category,
      Image: image,
    })
    .then(res => {
      console.log(res.data);
      setState(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const DeleteFoods = (name: string, setState: any) => {
  axios
    .post('http://192.168.1.9:3000/food/delete', {
      Name: name,
    })
    .then(res => {
      console.log(res.data);
      setState(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const AcceptBill = (
  id: Object,
  account: string,
  name: string,
  addres: string,
  phone: string,
  foods: [],
  totalprice: number,
  status: string,
  time: Date,
  setState?: any,
) => {
  axios
    .post('http://192.168.1.9:3000/bill/accept', {
      id: id,
      Account: account,
      Name: name,
      Addres: addres,
      PhoneNumber: phone,
      Foods: foods,
      TotalPrice: totalprice,
      Status: status,
      Time: time,
    })
    .then(res => {
      console.log(res.data);
      setState(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const Statistical = (time: any, setState?: any) => {
  axios
    .post('http://192.168.1.9:3000/bill/day', {
      Time: time,
    })
    .then(res => {
      setState(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
