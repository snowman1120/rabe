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
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#!" id="navbarHomeDropdown"
                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img className="avatar" src={isEmpty(avatar) ? "assets/images/profile.jpg" : avatar} alt="avatar" />
                                                {`${firstName} ${lastName}`}
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarHomeDropdown">
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
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#!" id="navbarHomeDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Home
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarHomeDropdown">
                                        <li><a className="dropdown-item" href="/">Home</a></li>
                                        <li><a className="dropdown-item" href="/home2">Home Two</a></li>
                                        <li><a className="dropdown-item" href="/home3">Home Three</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#!" id="navbarPropertyDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Properties
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarPropertyDropdown">
                                        <li><a className="dropdown-item" href="properties">Properties</a></li>
                                        <li><a className="dropdown-item" href="property-details">Property Details</a></li>
                                        <li><a className="dropdown-item" href="property-alert">Property Alert</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#!" id="navbarLoanDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Loan
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarLoanDropdown">
                                        <li><a className="dropdown-item" href="business-loan">Business Loan</a></li>
                                        <li><a className="dropdown-item" href="business-loan-details">Business Loan Details</a>
                                        </li>
                                        <li><a className="dropdown-item" href="loan-application">Loan Application</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="list-your-property">List your property</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="dashboard">Dashboard</a></li>
                                        <li><a className="dropdown-item" href="about-us">About Us</a></li>
                                        <li><a className="dropdown-item" href="affiliate-program">Affiliate Program</a></li>
                                        <li><a className="dropdown-item" href="blog">Blog</a></li>
                                        <li><a className="dropdown-item" href="blog-two">Blog Two</a></li>
                                        <li><a className="dropdown-item" href="blog-single">Blog Single</a></li>
                                        <li><a className="dropdown-item" href="career">Career</a></li>
                                        <li><a className="dropdown-item" href="career-details">Career Details</a></li>
                                        <li><a className="dropdown-item" href="how-it-works">How It Works</a></li>
                                        <li><a className="dropdown-item" href="key-risks">Key Risks</a></li>
                                        <li><a className="dropdown-item" href="loyality-program">Loyality Program</a></li>
                                        <li><a className="dropdown-item" href="terms-conditions">Terms Conditions</a></li>
                                        <li><a className="dropdown-item" href="privacy-policy">Privacy Policy</a></li>
                                        <li><a className="dropdown-item" href="cookie-policy">Cookie Policy</a></li>
                                        <li><a className="dropdown-item" href="support">Support</a></li>
                                        <li><a className="dropdown-item" href="404">Error</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact-us">Contact</a>
                                </li>
                                <li className="nav-item d-block d-sm-none">
                                    <a href="login" className="nav-link">Log In</a>
                                </li>
                                <li className="nav-item d-block d-sm-none">
                                    <a href="registration" className="button button--effect button--last">Join Now <i
                                            className="fa-solid fa-arrow-right-long"></i></a>
                                </li>
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