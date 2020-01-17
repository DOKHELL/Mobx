import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too short min 8 symbols')
        .max(20, 'Too long max 20 symbols')
        .required('Required'),
});

export const SignUpSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, 'Too short min 4 symbols')
        .max(12, 'Too long max 12 symbols')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too short min 8 symbols')
        .max(20, 'Too long max 20 symbols')
        .required('Required'),
});