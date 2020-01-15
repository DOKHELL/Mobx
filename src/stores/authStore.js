import {action, observable} from "mobx";


class AuthStore {
    @observable values = {
        email: '',
        password: '',
        login: ''
    };

    @action setLogin = (login) => {
        this.values.login = login
    };

    @action setPassword = (password) => {
        this.values.password = password;
    };

    @action setEmail = (email) => {
        this.values.email = email;
    };
}

export default new AuthStore();