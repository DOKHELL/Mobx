import React, {Component} from "react";
import Banner from "./Banner";
import Container from "@material-ui/core/Container";
import {inject, observer} from "mobx-react";
import Box from "@material-ui/core/Box";
import Tags from "./Tags";
import Article from "../Article";

@inject('commonStore')
@observer

class Home extends Component {
    componentDidMount() {
        this.props.commonStore.loadTags();
    }

    render() {
        const style = {
            display: 'flex',
            justifyContent: 'space-between',
        };
        return (
            <div>
                <Banner token={this.props.commonStore.token}/>
                <Container maxWidth='md' style={style}>
                    <Box maxWidth='75%' width='100%'>
                        <Article/>
                    </Box>
                    <Box maxWidth='25%' width='100%'>
                        <Tags tags={this.props.commonStore.tags}/>
                    </Box>
                </Container>
            </div>
        )
    }
}

export default Home;