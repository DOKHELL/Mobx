import {action, observable} from "mobx";
import axios from 'axios';
import {BASE_API as api} from '../env'

class AuthStore {
    // @observable values = {
    //     email: '',
    //     password: '',
    //     login: ''
    // };

    @action fetchLogin = async (values, formik) => {
        try {
            await axios.post(`${api}/users/login`, {user: {email: values.email, password: values.password}});
            formik.setSubmitting(false)
        } catch (e) {
            formik.setErrors(e)
        }
    }
}

export default new AuthStore();