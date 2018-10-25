import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ic_logo.svg';
import './Sidebar.css';

class Sidebar extends Component {
    state = {
        active: this.props.path,
        tabList: [
            { title: 'Overview', icon: 'stats', url: '/' },
            { title: 'Book', icon: 'document', url: '/book' },
            { title: 'Collection', icon: 'bookmarks', url: '/collection' }
        ]
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.active !== nextProps.path) {
            this.setState({ active: nextProps.path });
        }
    }

    onChangeActiveTab(tab) {
        this.setState({ active: tab });
    }

    renderTabSidebar(tab) {
        const className = `${this.state.active === tab.url ? 'is-active' : ''}`;
        return (
            <li className={className} key={tab.title}>
                <Link to={tab.url}>
                    <span className="icon has-text-grey" title={tab.title}>
                        <ion-icon name={tab.icon} size="large"></ion-icon>
                    </span>
                </Link>
            </li>
        );
    }

    render() {
        return (
            <div className="main-sidebar">
                <div className="sidebar-brand">
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="sidebar-inner">
                    <ul className="icon-menu">
                        {this.state.tabList.map(tab =>
                            this.renderTabSidebar(tab)
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;