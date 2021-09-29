import axios from 'axios'

export const Search = (text: String, setState: any) => {
    axios.post('http://10.0.2.2:3000/food/search', {
        search: text,
    },
    )
        .then(function (response) {
            console.log(response.data)
            setState(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

}

// export const Search = (text: String, data: any) => (
//     fetch('http://10.0.2.2:3000/food/search',
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

export const Register = (name: String, phonenumber: String, password: String, setState: any) => {
    axios.post('http://10.0.2.2:3000/account/register', {
        Name: name,
        PhoneNumber: phonenumber,
        Password: password
    },
    )
        .then(function (response) {
            setState(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

}

export const Login = (phonenumber: String, password: any, setState: any) => {
    axios.post('http://10.0.2.2:3000/account/login', {
        PhoneNumber: phonenumber,
        Password: password
    },
    )
        .then(function (response) {
            setState(response.data);
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

}