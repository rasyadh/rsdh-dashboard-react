import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOverviews, updateOverviews } from '../actions/overviewActions';
import { Line } from 'react-chartjs-2';

class Overview extends Component {
    componentDidMount() {
        this.props.fetchOverviews();
    }

    renderOverviewList(categories) {
        return Object.values(categories).map(category => (
            <div className="column is-3" key={category.name}>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <span className={`icon is-large has-text-${category.color}`}>
                                <ion-icon name={category.icon} size="large"></ion-icon>
                            </span>
                        </div>
                        <div className="media-content">
                            <h1 className="title has-text-weight-light">{category.value}</h1>
                            <h2 className="subtitle has-text-weight-light"><small>{category.name}</small></h2>
                        </div>
                    </article>
                </div>
            </div>
        ));
    }

    render() {
        const { categories, sales } = this.props.overview;
        console.log(categories);
        return (
            <div className="main-wrapper">
                <div className="container">
                    <div className="main-header">
                        <h1 className="title is-4 is-uppercase has-text-weight-light">Overview</h1>
                    </div>
                    <div className="columns">
                        {categories && this.renderOverviewList(categories)}
                    </div>
                    <div className="columns is-multiline">
                        <div className="column is-6">
                            <div className="box">
                                <h1 className="subtitle has-text-weight-light">{sales && sales.name}</h1>
                                <Line data={sales && sales} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        overview: state.overview
    }
}

export default connect(mapStateToProps, { fetchOverviews, updateOverviews })(Overview);