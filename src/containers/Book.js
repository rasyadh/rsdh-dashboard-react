import React, { Component } from 'react';

class Book extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="container">
                    <div className="main-header">
                        <h1 className="title is-4 is-uppercase has-text-weight-light">Book</h1>
                    </div>
                    <div className="box">
                        <div className="box-wrapper">
                            <form className="form" enctype="multipart/form-data">
                                <div className="columns">
                                    <div className="column">
                                        <div className="field">
                                            <div className="file is-centered is-boxed has-name">
                                                <label className="file-label">
                                                    <input className="file-input" type="file" name="cover" id="cover" onchange="uploadFile()" />
                                                    <span className="file-cta">
                                                        <span className="file-icon">
                                                            <ion-icon name="image"></ion-icon>
                                                        </span>
                                                        <span className="file-label">
                                                            Choose a book cover...
                                                </span>
                                                    </span>
                                                    <span className="file-name" id="file-name">
                                                        File name
                                            </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Book Name</label>
                                            <div className="control">
                                                <input className="input" type="text" autofocus required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Author</label>
                                            <div className="control">
                                                <input className="input" type="text" autofocus required />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Phone Number</label>
                                            <div className="control">
                                                <input className="input" type="number" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Email</label>
                                            <div className="control">
                                                <input className="input" type="email" autofocus required />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Type of Book</label>
                                            <div className="control">
                                                <div className="select is-fullwidth">
                                                    <select required>
                                                        <option>Non-Fiction</option>
                                                        <option>Fiction</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Synopsis</label>
                                    <div className="control">
                                        <textarea className="textarea" required></textarea>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <label className="checkbox">
                                            <input type="checkbox" required />
                                            I agree to the terms and conditions
                                        </label>
                                    </div>
                                </div>
                                <button className="button is-primary is-fullwidth">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;