import * as Yup from 'yup';
const { rePhoneNumber } = require('./yup-phone')

export const RegisterSchema = Yup.object().shape({
    Name: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    PhoneNumber: Yup.string()
        .min(9, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    PassWord: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    ConfirmPass: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

export const LoginSchema = Yup.object().shape({
    PhoneNumber: Yup.string()
        .min(9, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    PassWord: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});