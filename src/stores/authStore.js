import {action, observable} from "mobx";
import axios from 'axios';
import {BASE_API as api, loginData} from '../env'


class AuthStore {
    @observable values = {
        email: '',
        password: '',
        login: ''
    };

    @action fetchLogin = (values, formik) => {

        formik.setSubmitting(false);
    }
}

export default new AuthStore();