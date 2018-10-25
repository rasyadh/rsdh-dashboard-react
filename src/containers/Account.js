import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../assets/profile.jpg';

class Account extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="container">
                    <div className="main-header">
                        <h1 className="title is-4 is-uppercase has-text-weight-light">Account</h1>
                    </div>
                    <div className="columns">
                        <div className="column is-5">
                            <div className="box">
                                <div className="box-wrapper has-text-centered">
                                    <figure className="avatar-wrapper">
                                        <img className="is-avatar" src={ProfilePicture} alt="account" width="100" height="100" />
                                    </figure>
                                    <h1 className="has-text-weight-semibold">Rasyadh Abdul Aziz</h1>
                                    <p className="has-text-weight-light">rasyadhabdulaziz@gmail.com</p>
                                    <br />
                                    <div className="buttons is-centered">
                                        <Link className="button is-primary" to="/account/edit/">Edit Account</Link>
                                        <Link className="button is-danger" to="/logout">Log Out</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-7">
                            <div className="card has-card-round is-shadowless">
                                <div className="card-content">
                                    <p className="has-text-weight-semibold">Account Details</p>
                                </div>
                                <div className="card-footer">
                                    <div className="container account-wrapper">
                                        <div className="columns">
                                            <div className="column is-6">
                                                <div className="field">
                                                    <label className="field has-text-weight-semibold">Name</label>
                                                    <div className="control">
                                                        <p className="has-text-weight-light">Rasyadh Abdul Aziz</p>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <label className="field has-text-weight-semibold">Phone</label>
                                                    <div className="control">
                                                        <p className="has-text-weight-light">0838-5653-5951</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column is-6">
                                                <div className="field">
                                                    <label className="field has-text-weight-semibold">Email</label>
                                                    <div className="control">
                                                        <p className="has-text-weight-light">rasyadhabdulaziz@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <label className="field has-text-weight-semibold">Address</label>
                                                    <div className="control">
                                                        <p className="has-text-weight-light">Dupak 5 / 42 Surabaya</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;