import axios from 'axios';
import {action, observable} from "mobx";
import {BASE_API as api} from "../env";

class ArticleStore {
    @observable articles = [];

    @action getArticle = async () => {
        try {
            const response = await axios.get(`${api}/articles`);
            this.articles = response.data.articles;

        } catch (e) {
            console.log(e)
        }
    }
}

export default new ArticleStore();