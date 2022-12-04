import {connect} from 'react-redux';
import { logout } from 'actions/auth';
import { isEmpty } from 'utils/validation';

const Navbar = ({isAuthenticated, firstName, lastName, avatar, logout}) => {
    return (
        <div>
            {/* <!-- ==== header start ==== --> */}
            <header className="header">
                <nav className="navbar navbar-expand-xl">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="assets/images/logo.png" alt="Logo" className="logo" />
                        </a>
                        <div className="navbar__out order-2 order-xl-3">
                            {
                                isAuthenticated ? 
                                (<>
                                    <ul className="navbar-nav nav__group__btn">
                                        <li className="nav-item dropdown d-none d-sm-block">
                                            <a className="nav-link dropdown-toggle" href="#!" id="navbarHomeDropdown"
                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img className="avatar" src={isEmpty(avatar) ? "assets/images/profile.jpg" : avatar} alt="avatar" />
                                                {`${firstName} ${lastName}`}
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarHomeDropdown">
                                                <li><a className="dropdown-item" href="/myproperties">My Properties</a></li>
                                                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                                <li><a className="dropdown-item" href="#!" onClick={logout}>Log out</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </>) :
                                (<>
                                    <div className="nav__group__btn">
                                        <a href="login" className="log d-none d-sm-block"> Log In </a>
                                        <a href="registration" className="button button--effect d-none d-sm-block"> Join Now <i
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
                                (<li className="nav-item">
                                    <a className="nav-link" href="list-your-property">List your property</a>
                                </li>) : ''}
                                <li className="nav-item">
                                    <a className="nav-link" href="contact-us">Contact</a>
                                </li>
                                {
                                    isAuthenticated ? 
                                    (<>
                                        <li className="nav-item dropdown d-block d-sm-none">
                                            <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown"
                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img className="avatar" src={isEmpty(avatar) ? "assets/images/profile.jpg" : avatar} alt="avatar" />
                                                    {`${firstName} ${lastName}`}
                                            </a>
                                            <ul className="dropdown-menu d-block d-sm-none" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="/myproperties">My Properties</a></li>
                                                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                                <li><a className="dropdown-item" href="#!" onClick={logout}>Log out</a></li>
                                            </ul>
                                        </li>
                                    </>) :
                                    (<>
                                        <li className="nav-item d-block d-sm-none">
                                            <a href="login" className="nav-link">Log In</a>
                                        </li>
                                        <li className="nav-item d-block d-sm-none">
                                            <a href="registration" className="button button--effect button--last">Join Now <i
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
    firstName: state.auth.user && state.auth.user.firstName,
    lastName: state.auth.user && state.auth.user.lastName,
    avatar: state.auth.user && state.auth.user.avatar
});

export default connect(mapStateToProps, {logout}) (Navbar);