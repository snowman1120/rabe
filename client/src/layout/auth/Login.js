
const Login = () => {
    return (
        <div>
            {/* <!-- ==== registration section start ==== --> */}
            <section className="registration clear__top">
                <div className="container">
                    <div className="registration__area">
                        <h4 className="neutral-top">Log in</h4>
                        <p>Don't have an account? <a href="registration">Register here.</a></p>
                        <form action="#" method="post" name="login__form" className="form__login">
                            <div className="input input--secondary">
                                <label for="loginMail">Email*</label>
                                <input type="email" name="login__email" id="loginMail" placeholder="Enter your email"
                                    required="required" />
                            </div>
                            <div className="input input--secondary">
                                <label for="loginPass">Password*</label>
                                <input type="password" name="login__pass" id="loginPass" placeholder="Password"
                                    required="required" />
                            </div>
                            <div className="checkbox login__checkbox">
                                <label>
                                    <input type="checkbox" id="remeberPass" name="remeber__pass" value="remember" />
                                    <span className="checkmark"></span>
                                    Remember Me
                                </label>
                                <a href="javascript:void(0)">Forget Password</a>
                            </div>
                            <div className="input__button">
                                <button type="submit" className="button button--effect">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #registration section end ==== --> */}
        </div>
    )
}

export default Login;