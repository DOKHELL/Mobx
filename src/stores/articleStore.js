import axios from 'axios';
import {action, observable} from "mobx";
import {BASE_API as api} from "../env";

class ArticleStore {
    @observable articles = [];
    @observable params = {
        tag: '',
        tab: ''
    };

    @action setParams = (value) => {
        this.params = value;
    };

    @action createUrl = () => {
        let url = `${api}/articles`;
       if (this.params.tag.length > 0) {
            url += `?tag=${this.params.tag}`;
            return url
        } else {
            return url;
        }
    };

    @action fetchArticles = async () => {
        try {
            const response = await axios.get(this.createUrl());
            this.articles = response.data.articles;
            console.log(response.data.articles)

        } catch (e) {
            console.log(e)
        }
    }
}

export default new ArticleStore();