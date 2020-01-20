import React, {Component} from "react";
import Banner from "./Banner";
import Container from "@material-ui/core/Container";
import {inject, observer} from "mobx-react";
import Box from "@material-ui/core/Box";
import Tags from "../../components/Tags";
import ArticleList from "../../components/ArticleList";
import {parse} from "querystring";

@inject('commonStore', 'articleStore')
@observer

class Home extends Component {

    getTag = () => {
        return parse(this.props.location.search).tag || "";
    };

    getTab = () => {
        return parse(this.props.location.search).tab || "all";
    };

    getParams = () => {
        const params = {
            tag: `${this.getTag(this.props.location.search)}`,
            tab: `${this.getTab(this.props.location.search)}`
        };
        return params
    };
    componentDidMount() {
        this.props.commonStore.loadTags();
        this.props.articleStore.setParams(this.getParams());
        this.props.articleStore.fetchArticles();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const params = {tag: `${this.getTag()}`, tab: `${this.getTab()}`};
        if (prevProps.location.search !== this.props.location.search) {
            this.props.articleStore.setParams(params);
            this.props.articleStore.fetchArticles();
        }
    }

    render() {
        return (
            // <div>
            //     <Banner token={this.props.commonStore.token}/>
            //     <div className='container'>
            //         <div className='home-wrapper'>
            //             <div className='home-content'>
            //                 <ul>
            //                     <li>Global feed</li>
            //                 </ul>
            //                 <ArticleList
            //                     articles={this.props.articleStore.articles}
            //                 />
            //             </div>
            //             <aside className='tag-popular'>
            //                 <div className='tag-wrap'>
            //                     <h4 style={{margin: '5px 0'}}>Popular Tags</h4>
            //                     <Tags tags={this.props.commonStore.tags}/>
            //                 </div>
            //             </aside>
            //         </div>
            //     </div>
            // </div>
            <div className="home-page">
                <Banner token={this.props.commonStore.token}/>

                <div className="container page">
                    <div className="row">

                        <div className="col-md-9">
                            <div className="feed-toggle">
                                <ul className="nav nav-pills outline-active">
                                    {/*<li className="nav-item">*/}
                                    {/*    <a className="nav-link disabled" href="">Your Feed</a>*/}
                                    {/*</li>*/}
                                    <li className="nav-item">
                                        <a className="nav-link active" href="">Global Feed</a>
                                    </li>
                                </ul>
                            </div>
                            <ArticleList articles={this.props.articleStore.articles}/>

                        </div>
                        <div className="col-md-3">
                            <div className="sidebar">
                                <Tags tags={this.props.commonStore.tags}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Home;