import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Overview from '../containers/Overview';
import Book from '../containers/Book';
import Collection from '../containers/Collection';
import Account from '../containers/Account';
import './App.css';

class App extends Component {
    render() {
        const { match } = this.props;
        return (
            <main>
                <Sidebar path={match.path} />
                <Navbar />
                <Route exact path={'/'} component={Overview} />
                <Route path={'/overview'} component={Overview} />
                <Route path={'/book'} component={Book} />
                <Route path={'/collection'} component={Collection} />
                <Route path={'/account'} component={Account} />
            </main>
        );
    }
}

export default App;