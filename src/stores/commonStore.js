import {action, observable} from "mobx";
import axios from 'axios';
import { BASE_API as api } from "../env";


class CommonStore {
    @observable token = localStorage.getItem('token') || null;
    @observable tags = null;

    @action setToken = (token) => {
        this.token = token;
    };
    @action loadTags = async () => {
        try {
            const response = await axios.get(`${api}/tags`);
            const tags = response.data.tags;
            this.tags = tags;
        } catch (e) {
            console.log(e)
        }
    }
}

export default new CommonStore();