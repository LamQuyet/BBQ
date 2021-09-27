import axios from 'axios'

export const Search = (text: String) => {
    axios.post('http://10.0.2.2:3000/food/search', {
        search: text,
    },
    )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}

export const Register = (name: String, phonenumber: String, password: String) => {
    axios.post('http://10.0.2.2:3000/account/register', {
        Name: name,
        PhoneNumber: phonenumber,
        Password: password
    },
    )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}

export const Login = (phonenumber: String, password: String) => {
    axios.post('http://10.0.2.2:3000/food/search', {
        phonenumber: phonenumber,
        password: password
    },
    )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}