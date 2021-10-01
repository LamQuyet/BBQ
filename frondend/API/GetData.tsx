import axios from 'axios'

export const getHotpot = (setState: any) => {
    axios({
        method: 'GET',
        url: 'http://10.0.2.2:3000/food/getHotpot',
        data: null
    })
        .then((res) => { setState(res.data), console.log('res.data', res.data) })
        .catch(err => { console.log(err) })
}

export const getBBQ = (setState: any) => {
    axios({
        method: 'GET',
        url: 'http://10.0.2.2:3000/food/getBBQ',
        data: null
    })
        .then((res) => { setState(res.data), console.log('res.data', res.data) })
        .catch(err => { console.log(err) })
}

export const getDrink = (setState: any) => {
    axios({
        method: 'GET',
        url: 'http://10.0.2.2:3000/food/getDrink',
        data: null
    })
        .then((res) => { setState(res.data), console.log('res.data', res.data) })
        .catch(err => { console.log(err) })
}

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