import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="main-navbar">
                <nav className="navbar is-transparent" role="navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <div role="button" className="navbar-item is-hidden-desktop is-hidden-tablet" id="toggle-sidebar">
                                <span className="icon has-text-grey" title="sidebar">
                                    <ion-icon name="list" size="large"></ion-icon>
                                </span>
                            </div>
                            <div className="navbar-item">
                                <h1 className="title is-5 has-text-weight-light">RSDH Dashboard</h1>
                            </div>
                            <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navmenu">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </div>
                        </div>
                        <div className="navbar-menu" id="navmenu">
                            <div className="navbar-end is-hidden-mobile is-hidden-touch">
                                <div className="navbar-item has-nav-spaced">
                                    <div className="control has-icons-right">
                                        <input className="input is-shadowless" type="text" />
                                        <span className="icon is-right has-text-grey">
                                            <ion-icon name="search"></ion-icon>
                                        </span>
                                    </div>
                                </div>
                                <div className="navbar-item has-nav-spaced" style={{cursor: 'pointer'}}>
                                    <span className="icon has-text-grey" title="Notifications">
                                        <ion-icon name="notifications" size="large"></ion-icon>
                                    </span>
                                </div>
                                <Link className="navbar-item has-nav-spaced" to="/account">
                                    <span className="icon has-text-grey" title="Profile">
                                        <ion-icon name="person" size="large"></ion-icon>
                                    </span>
                                </Link>
                            </div>
                            <div className="navbar-end is-hidden-desktop">
                                <div className="navbar-item has-nav-spaced">
                                    <div className="control has-icons-right">
                                        <input className="input is-shadowless" type="text" />
                                        <span className="icon is-right has-text-grey">
                                            <ion-icon name="search"></ion-icon>
                                        </span>
                                    </div>
                                </div>
                                <div className="navbar-item has-nav-spaced" style={{cursor: 'pointer'}}>
                                    <span className="icon has-text-grey">
                                        <ion-icon name="notifications"></ion-icon>
                                    </span>
                                    <span>Notifications</span>
                                </div>
                                <Link className="navbar-item has-nav-spaced" to="/account">
                                    <span className="icon has-text-grey">
                                        <ion-icon name="person"></ion-icon>
                                    </span>
                                    <span>Profile</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;