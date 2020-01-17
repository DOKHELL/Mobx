import {action} from "mobx";
import axios from 'axios';
import {BASE_API as api} from '../env'

class AuthStore {

    @action fetchLogin = async (values, formik) => {
        try {
            await axios.post(`${api}/users/login`, {user: {email: values.email, password: values.password}});
            formik.setSubmitting(false);
            formik.setStatus(null)
        } catch (e) {
            formik.setStatus('error');
        }
    };
    @action fetchRegister = async (values, formik) => {
        try {
            await axios.post(`${api}/users`, {user: {
                    username: values.username,
                    email: values.email,
                    password: values.password}});

            formik.setSubmitting(false);
            formik.setStatus(null)
        } catch (e) {
            formik.setStatus('error');
        }
    }
}

export default new AuthStore();