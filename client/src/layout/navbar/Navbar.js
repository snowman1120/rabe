import {connect} from 'react-redux';
import { logout } from 'actions/auth';
import { isEmpty } from 'utils/validation';

import {convertSeconds2DHMS} from 'utils/helper';
import {markAllReadNotification} from 'actions/auth';
import $ from 'jquery';
import { useEffect } from 'react';

const Navbar = ({socket, isAuthenticated, user, notifications, avatar, markAllReadNotification, logout}) => {
    
    useEffect(() => {
        if(!socket) return;
        socket.on('ENDED_YOUR_PROPERTY', (data) => {
            console.log(data)
        })
    }, [socket]);
    
    const handlePopupNotification = () => {
        $(".notification__wrapper").toggleClass("notification__wrapper__active");

        if(socket) {
            socket.emit("message", 
                {
                text: "This is a message from snowman", 
                name: "snowman", 
                id: `${socket.id}${Math.random()}`
                }
            )
        }
    }

    const getNotificationTime = (date) => {
        const time = ((new Date()).getTime() - (new Date(date)).getTime()) / 1000;
        const DHMS = convertSeconds2DHMS(time);
        if(DHMS.days !== '00') return `${parseInt(DHMS.days)} days ago`;
        if(DHMS.hours !== '00') return `${parseInt(DHMS.hours)} hours ago`;
        if(DHMS.minutes !== '00') return `${parseInt(DHMS.minutes)} minutes ago`;
        return '1 minute ago';
    }

    const handleMarkAllRead = () => {
        markAllReadNotification();
    }

    return (
        <div>
            {/* <!-- ==== header start ==== --> */}
            <header className="header">
                <nav className="navbar navbar-expand-xl">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="/assets/images/logo.png" alt="Logo" className="logo" />
                        </a>
                        <div className="navbar__out order-2 order-xl-3">
                            {
                                isAuthenticated ? 
                                (<>
                                    <div className="notification-area" onClick={handlePopupNotification}>
                                        <a href="#!" className="icon__wrapper notification__icon">
                                            <i className="fa-solid fa-bell"></i>
                                            <span className={notifications && notifications.length > 0 ? '' : 'd-none'}>{notifications && notifications.length}</span>
                                        </a>
                                        <div className="notification__wrapper">
                                            <div className="notification__head">
                                                <p className="text-center">{notifications && notifications.length} New</p>
                                                <p className="text-center">Notification</p>
                                            </div>
                                            <div className="notification__single-wrapper">
                                                {
                                                    notifications && notifications.length > 0 ?
                                                    notifications.map(notification => (
                                                        <div key={notification._id} className="notification__single">
                                                            <a href="#!">
                                                                <p>{notification.message}
                                                                </p>
                                                            </a>
                                                            <p className="time">{getNotificationTime(notification.date)}</p>
                                                        </div>
                                                    )) : ''
                                                }
                                            </div>
                                            <div className="mark__read">
                                                <a href="#!" onClick={handleMarkAllRead}>Mark all as read</a>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="navbar-nav nav__group__btn">
                                        <li className="nav-item dropdown d-none d-sm-block">
                                            <a className="nav-link dropdown-toggle" href="#!" id="navbarHomeDropdown"
                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img className="avatar" src={isEmpty(avatar) ? "/assets/images/profile.jpg" : avatar} alt="avatar" />
                                                {`${user.firstName} ${user.lastName}`}
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarHomeDropdown">
                                                <li><a className="dropdown-item" href={user && user.role === 'seller' ? "/my-properties" : "/my-proposals"}>
                                                    {user && user.role === 'seller' ? "My Properties" : "My Proposals"}</a></li>
                                                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                                <li><a className="dropdown-item" href="#!" onClick={logout}>Log out</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </>) :
                                (<>
                                    <div className="nav__group__btn">
                                        <a href="/login" className="log d-none d-sm-block"> Log In </a>
                                        <a href="/registration" className="button button--effect d-none d-sm-block"> Join Now <i
                                                className="fa-solid fa-arrow-right-long"></i> </a>
                                    </div>
                                </>)
                            }
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primaryNav"
                                aria-controls="primaryNav" aria-expanded="false" aria-label="Toggle Primary Nav">
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse order-3 order-xl-2" id="primaryNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/" id="navbarHomeDropdown">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="/properties" id="navbarPropertyDropdown">Properties</a>
                                </li>
                                { isAuthenticated ? 
                                    (
                                        user.role === 'seller' ? 
                                            <li className="nav-item"><a className="nav-link" href="/my-properties">My Properties</a></li> : 
                                            <li className="nav-item"><a className="nav-link" href="/my-proposals">My Proposals</a></li>
                                    ) : 
                                    ''
                                }
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact-us">Contact</a>
                                </li>
                                {
                                    isAuthenticated ? 
                                    (<>
                                        <li className="nav-item dropdown d-block d-sm-none">
                                            <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown"
                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img className="avatar" src={isEmpty(avatar) ? "/assets/images/profile.jpg" : avatar} alt="avatar" />
                                                    {`${user.firstName} ${user.lastName}`}
                                            </a>
                                            <ul className="dropdown-menu d-block d-sm-none" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href={user && user.role === 'seller' ? "/my-properties" : "/my-proposals"}>
                                                    {user && user.role === 'seller' ? "My Properties" : "My Proposals"}</a></li>
                                                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                                <li><a className="dropdown-item" href="#!" onClick={logout}>Log out</a></li>
                                            </ul>
                                        </li>
                                    </>) :
                                    (<>
                                        <li className="nav-item d-block d-sm-none">
                                            <a href="/login" className="nav-link">Log In</a>
                                        </li>
                                        <li className="nav-item d-block d-sm-none">
                                            <a href="/registration" className="button button--effect button--last">Join Now <i
                                                    className="fa-solid fa-arrow-right-long"></i></a>
                                        </li>
                                    </>)
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/* <!-- ==== #header end ==== --> */}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth && state.auth.isAuthenticated,
    user: state.auth.user && state.auth.user,
    socket: state.auth.user && state.auth.socket,
    avatar: state.auth.user && state.auth.user.avatar,
    notifications: state.auth.user && state.auth.user.notifications
});

export default connect(mapStateToProps, {logout, markAllReadNotification}) (Navbar);