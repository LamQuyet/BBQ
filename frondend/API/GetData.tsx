import axios from 'axios';

export const getHotpot = (setState: any) => {
  axios({
    method: 'GET',
    url: 'http://192.168.1.9:3000/food/getHotpot',
    data: null,
  })
    .then(res => {
      setState(res.data), console.log('res.data', res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getBBQ = (setState: any) => {
  axios({
    method: 'GET',
    url: 'http://192.168.1.9:3000/food/getBBQ',
    data: null,
  })
    .then(res => {
      setState(res.data), console.log('res.data', res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getDrink = (setState: any) => {
  axios({
    method: 'GET',
    url: 'http://192.168.1.9:3000/food/getDrink',
    data: null,
  })
    .then(res => {
      setState(res.data), console.log('res.data', res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getAllFood = (setState: any) => {
  axios({
    method: 'GET',
    url: 'http://192.168.1.9:3000/food/getAll',
    data: null,
  })
    .then(res => {
      setState(res.data), console.log('res.data', res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getBill = (setState: any) => {
  axios({
    method: 'GET',
    url: 'http://192.168.1.9:3000/bill/getbill',
    data: null,
  })
    .then(res => {
      setState(res.data), console.log('res.data', res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getNewBill = (setState: any) => {
  axios({
    method: 'GET',
    url: 'http://192.168.1.9:3000/bill/newbills',
    data: null,
  })
    .then(res => {
      setState(res.data), console.log('res.data', res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getBillCanceled = (setState: any) => {
  axios({
    method: 'GET',
    url: 'http://192.168.1.9:3000/bill/billscanceled',
    data: null,
  })
    .then(res => {
      setState(res.data), console.log('res.data', res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getHistory = (setState: any) => {
  axios({
    method: 'GET',
    url: 'http://192.168.1.9:3000/bill/history',
    data: null,
  })
    .then(res => {
      setState(res.data), console.log('res.data', res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getAccount = (setState: any) => {
  axios({
    method: 'GET',
    url: 'http://192.168.1.9:3000/account/getAccount',
    data: null,
  })
    .then(res => {
      setState(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};
// export const getAll = (setState: any) => {
//     axios({
//         method: 'GET',
//         url: 'http://10.0.2.2:3000/food/getAllFood',
//         data: null
//     })
//         .then((res) => { setState(res.data), console.log('res.data', res.data) })
//         .catch(err => { console.log(err) })
// }

// export const getSearch = (setState: any) => {
//     axios({
//         method: 'GET',
//         url: 'http://10.0.2.2:3000/food/search',
//         data: null
//     })
//         .then((res) => { setState(res.data), console.log('res.data', res.data) })
//         .catch(err => { console.log(err) })
// }
