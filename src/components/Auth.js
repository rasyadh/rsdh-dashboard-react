import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LoginForm from '../containers/LoginForm';
import RegisterForm from '../containers/RegisterForm';
import ForgotPasswordForm from '../containers/ForgotPasswordForm';
import Logo from '../assets/ic_logo_white.svg';
import './Auth.css';

const Tab = ({ name, url, active, changeActiveTab }) => {
    return (
        <li
            className={url === active ? 'tab is-active' : 'tab'}
            onClick={() => changeActiveTab(url)}>
            <Link to={url} className="is-uppercase">{name}</Link>
        </li>
    );
}

class Auth extends Component {
    state = {
        active: this.props.match.path,
        tabList: [
            { name: 'Login', url: '/login', isForgot: false },
            { name: 'Register', url: '/register', isForgot: false },
            { name: 'Forgot Password', url: '/forgot-password', isForgot: true }
        ]
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.active !== nextProps.match.path) {
            this.setState({ active: nextProps.match.path });
        }
    }

    onChangeActiveTab(tab) {
        this.setState({ active: tab });
    }

    renderTab(path) {
        if (path === '/login' || path === '/register') {
            return (
                this.state.tabList.filter(tab => !tab.isForgot).map(tab => (
                    <Tab
                        key={tab.name}
                        name={tab.name}
                        url={tab.url}
                        active={this.state.active}
                        changeActiveTab={this.onChangeActiveTab.bind(this)} />
                ))
            );
        }
        else {
            return (
                this.state.tabList.filter(tab => tab.isForgot).map(tab => (
                    <Tab
                        key={tab.name}
                        name={tab.name}
                        url={tab.url}
                        active={this.state.active}
                        changeActiveTab={this.onChangeActiveTab.bind(this)} />
                ))
            );
        }
    }

    render() {
        const { match } = this.props;
        return (
            <div className="auth-wrapper">
                <div className="columns is-padingless">
                    <div className="column is-6">
                        <section className="hero is-primary is-fullheight has-text-centered is-hidden-mobile">
                            <div className="hero-body">
                                <div className="container">
                                    <figure className="auth-logo">
                                        <img src={Logo} alt="logo" width="80" height="80" />
                                    </figure>
                                    <p className="subtitle is-uppercase has-text-weight-light has-text-white">RSDH<br />Dashboard</p>
                                </div>
                            </div>
                        </section>
                        <section className="hero is-primary has-text-centered is-hidden-desktop is-hidden-tablet">
                            <div className="hero-body">
                                <div className="container">
                                    <figure className="auth-logo">
                                        <img src={Logo} alt="logo" width="40" height="40" />
                                    </figure>
                                    <p className="is-uppercase has-text-weight-light has-text-white">RSDH Dashboard</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="column is-6">
                        <section className="auth-form-wrapper">
                            <div className="auth-form-nav">
                                <div className="tabs">
                                    <ul>
                                        {this.renderTab(match.path)}
                                    </ul>
                                </div>
                            </div>
                            <div className="form-wrapper">
                                <Route path='/login' component={LoginForm} />
                                <Route path='/register' component={RegisterForm} />
                                <Route path='/forgot-password' component={ForgotPasswordForm} />
                            </div>
                            <div className="bulma-badge">
                                <Link to="https://bulma.io">
                                    <img src="https://bulma.io/images/made-with-bulma--semiblack.png" alt="Made with Bulma" width="128" height="24" />
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;