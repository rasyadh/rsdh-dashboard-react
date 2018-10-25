import React, { Component } from 'react';

class Collection extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="container">
                    <div className="main-header">
                        <h1 className="title is-4 is-uppercase has-text-weight-light">Collection</h1>
                    </div>
                    <div className="box">
                        <div className="box-wrapper">
                            <div className="table-wrapper">
                                <table className="table is-fullwidth is-hoverable">
                                    <thead>
                                        <tr>
                                            <th>Book ID</th>
                                            <th>Book Name</th>
                                            <th>Author</th>
                                            <th>Type of Book</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>FF001</td>
                                            <td>The Little Prince</td>
                                            <td>Antoine de Saint-Exupéry</td>
                                            <td>Fiction</td>
                                            <td>
                                                <div className="buttons">
                                                    <span className="button is-success">
                                                        <span className="icon">
                                                            <ion-icon name="information-circle"></ion-icon>
                                                        </span>
                                                    </span>
                                                    <span className="button is-warning">
                                                        <span className="icon has-text-white">
                                                            <ion-icon name="create"></ion-icon>
                                                        </span>
                                                    </span>
                                                    <span className="button is-danger">
                                                        <span className="icon">
                                                            <ion-icon name="trash"></ion-icon>
                                                        </span>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>NF001</td>
                                            <td>Nyanyi Sunyi Seorang Bisu 1</td>
                                            <td>Pramoedya Ananta Toer</td>
                                            <td>Non-Fiction</td>
                                            <td>
                                                <div className="buttons">
                                                    <span className="button is-success">
                                                        <span className="icon">
                                                            <ion-icon name="information-circle"></ion-icon>
                                                        </span>
                                                    </span>
                                                    <span className="button is-warning">
                                                        <span className="icon has-text-white">
                                                            <ion-icon name="create"></ion-icon>
                                                        </span>
                                                    </span>
                                                    <span className="button is-danger">
                                                        <span className="icon">
                                                            <ion-icon name="trash"></ion-icon>
                                                        </span>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>FF002</td>
                                            <td>Inteligensi Embun Pagi</td>
                                            <td>Dee Lestari</td>
                                            <td>Fiction</td>
                                            <td>
                                                <div className="buttons">
                                                    <span className="button is-success">
                                                        <span className="icon">
                                                            <ion-icon name="information-circle"></ion-icon>
                                                        </span>
                                                    </span>
                                                    <span className="button is-warning">
                                                        <span className="icon has-text-white">
                                                            <ion-icon name="create"></ion-icon>
                                                        </span>
                                                    </span>
                                                    <span className="button is-danger">
                                                        <span className="icon">
                                                            <ion-icon name="trash"></ion-icon>
                                                        </span>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Collection;