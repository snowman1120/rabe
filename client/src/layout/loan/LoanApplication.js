
const LoanApplication = () => {
    return (
        <div>
            {/* <!-- ==== banner section start ==== --> */}
            <section class="banner banner__application clear__top bg__img"
                data-background="./assets/images/banner/banner-bg.png">
                <div class="container">
                    <div class="banner__area">
                        <h1 class="neutral-top">Take a Loan</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    Loan
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    Loan Aplication
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #banner section end ==== --> */}

            {/* <!-- ==== alert newsletter section start ==== --> */}
            <section class="alert__newsletter alert__newsletter__alt">
                <div class="container">
                    <div class="alert__newsletter__area">
                        <div class="section__header">
                            <h5 class="neutral-top">Fill out an application</h5>
                            <h2>Grow Your
                                Business Faster!</h2>
                            <p class="neutral-bottom">Getting a business loan secured through collateral
                                is much easier and faster with Revest</p>
                        </div>
                        <form action="#" name="property__alert__from" method="post">
                            <div class="input input--secondary">
                                <label htmlFor="alertAltcom">Company Name*</label>
                                <input type="email" name="alertAlt__com" id="alertAltcom" placeholder="Enter Your Company"
                                    required="required" />
                            </div>
                            <div class="input input--secondary">
                                <label htmlFor="alertAltRegistrationMail">Company Email*</label>
                                <input type="email" name="alertAlt__registration__email" id="alertAltRegistrationMail"
                                    placeholder="Enter Your Email" required="required" />
                            </div>
                            <div class="input input--secondary input__alt">
                                <label htmlFor="alertAltNumber">Phone*</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <select class="number__code__select" id="numberAltCodeSelectAlert">
                                            <option selected value="0">+1</option>
                                            <option value="1">+2</option>
                                            <option value="2">+3</option>
                                            <option value="3">+4</option>
                                            <option value="4">+5</option>
                                            <option value="5">+6</option>
                                        </select>
                                    </div>
                                    <input type="number" name="alertAlt__number" id="alertAltNumber" required="required"
                                        placeholder="345-323-1234" />
                                </div>
                            </div>
                            <div class="regi__type">
                                <label>Amount of money required (not less than 5000 €) **</label>
                                <select class="type__select" id="coutryAltSelect">
                                    <option value="5">5000</option>
                                    <option value="4">4000</option>
                                    <option value="3">3000</option>
                                    <option value="2">2000</option>
                                    <option value="1">1000</option>
                                </select>
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="condtion" name="accept__condition" value="agree" />
                                    <span class="checkmark"></span>
                                    I have read and I agree to the <a href="privacy-policy.html">
                                        Privacy Policy</a>
                                </label>
                            </div>
                            <div class="input__button">
                                <button type="submit" class="button button--effect">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #alert newsletter section end ==== --> */}

            {/* <!-- ==== investment amount section start ==== --> */}
            <section class="investment__amount section__space__top bg__img" data-background="./assets/images/gd-bg.png">
                <div class="container">
                    <div class="investment__amount__area">
                        <div class="investment__wrapper">
                            <div class="investment__wrapper__inner">
                                <h5>Investment Amount (100 €-30991€)</h5>
                                <div class="input input--secondary">
                                    <input type="number" name="invest__amount" id="investAmount" placeholder="5000"
                                        required="required" />
                                </div>
                                <div class="radio__group">
                                    <div>
                                        <input type="radio" id="pone" checked class="radio-input" name="radio-group"/>
                                        <label htmlFor="pone" class="radio-label"> <span class="radio-border"></span> 13% </label>
                                    </div>
                                    <div>
                                        <input type="radio" id="ptwo" checked class="radio-input" name="radio-group"/>
                                        <label htmlFor="ptwo" class="radio-label"> <span class="radio-border"></span> 13.25%
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" id="pthree" checked class="radio-input" name="radio-group"/>
                                        <label htmlFor="pthree" class="radio-label"> <span class="radio-border"></span> 13.5%
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" id="pfour" checked class="radio-input" name="radio-group"/>
                                        <label htmlFor="pfour" class="radio-label"> <span class="radio-border"></span> 14% </label>
                                    </div>
                                </div>
                            </div>
                            <div class="investment__footer">
                                <div>
                                    <p class="secondary">I will earn ( 01 Month )</p>
                                    <h4 class="neutral-bottom">O.72 <i class="fa-solid fa-euro-sign"></i></h4>
                                </div>
                                <div>
                                    <p class="secondary">I will earn ( 12 Month )</p>
                                    <h4 class="neutral-bottom">11.72 <i class="fa-solid fa-euro-sign"></i></h4>
                                </div>
                                <div>
                                    <p class="secondary">I will earn ( 24 Month )</p>
                                    <h4 class="neutral-bottom">17.72 <i class="fa-solid fa-euro-sign"></i></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="investment__inner__area section__space__top wow fadeInUp">
                        <div class="section__header">
                            <h5 class="neutral-top">Revest Statistic</h5>
                            <h2>Numbers Said
                                More Than Words</h2>
                            <p class="neutral-bottom">Businesses have been able to easily and quickly raise funds for the
                                implementation of real estate projects, business start-ups or its development.</p>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-xl-3">
                                <div class="invest__single">
                                    <h4 class="neutral-top "><span class="counterThree">23875805</span> <i
                                            class="fa-solid fa-euro-sign"></i></h4>
                                    <p class="neutral-bottom">Money lent</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-3">
                                <div class="invest__single">
                                    <h4 class="neutral-top"><span class="counterThree">74660 </span><i
                                            class="fa-solid fa-euro-sign"></i></h4>
                                    <p class="neutral-bottom">Average loan size</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-3">
                                <div class="invest__single">
                                    <h4 class="neutral-top counterThree">327</h4>
                                    <p class="neutral-bottom">Funded Loans</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-3">
                                <div class="invest__single">
                                    <h4 class="neutral-top"><span class="counterThree">12</span> Mo.</h4>
                                    <p class="neutral-bottom">Average Loan Term</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #investment amount section end ==== --> */}

            {/* <!-- ==== faq section start ==== --> */}
            <section class="faq section__space">
                <div class="container">
                    <div class="faq__area">
                        <div class="section__header">
                            <h2 class="neutral-top">Frequently Asked
                                Questions</h2>
                        </div>
                        <div class="faq__group">
                            <div class="accordion" id="accordionExampleQuestions">
                                <div class="accordion-item content__space">
                                    <h5 class="accordion-header" id="headingQuestionsOne">
                                        <span class="icon_box">
                                            <img src="assets/images/icons/message.png" alt="Questions" />
                                        </span>
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseQuestionsOne" aria-expanded="true"
                                            aria-controls="collapseQuestionsOne">
                                            Who may apply for investment ?
                                        </button>
                                    </h5>
                                    <div id="collapseQuestionsOne" class="accordion-collapse collapse show"
                                        aria-labelledby="headingQuestionsOne" data-bs-parent="#accordionExampleQuestions">
                                        <div class="accordion-body">
                                            <p>combined with a handful of model sentence structures, to generate Lorem Ipsum
                                                which looks reasonable. The generated Lorem Ipsum is therefore always free from
                                                repetition, injected humour, or</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item content__space">
                                    <h5 class="accordion-header" id="headingQuestionsTwo">
                                        <span class="icon_box">
                                            <img src="assets/images/icons/message.png" alt="Questions" />
                                        </span>
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseQuestionsTwo" aria-expanded="false"
                                            aria-controls="collapseQuestionsTwo">
                                            How long does it take to collect the amount necessary for my project?
                                        </button>
                                    </h5>
                                    <div id="collapseQuestionsTwo" class="accordion-collapse collapse"
                                        aria-labelledby="headingQuestionsTwo" data-bs-parent="#accordionExampleQuestions">
                                        <div class="accordion-body">
                                            <p>combined with a handful of model sentence structures, to generate Lorem Ipsum
                                                which looks reasonable. The generated Lorem Ipsum is therefore always free from
                                                repetition, injected humour, or</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item content__space">
                                    <h5 class="accordion-header" id="headingQuestionsThree">
                                        <span class="icon_box">
                                            <img src="assets/images/icons/message.png" alt="Questions" />
                                        </span>
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseQuestionsThree" aria-expanded="false"
                                            aria-controls="collapseQuestionsThree">
                                            What will happen if the full amount required for the project
                                            is not collected?
                                        </button>
                                    </h5>
                                    <div id="collapseQuestionsThree" class="accordion-collapse collapse"
                                        aria-labelledby="headingQuestionsThree" data-bs-parent="#accordionExampleQuestions">
                                        <div class="accordion-body">
                                            <p>combined with a handful of model sentence structures, to generate Lorem Ipsum
                                                which looks reasonable. The generated Lorem Ipsum is therefore always free from
                                                repetition, injected humour, or</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item content__space">
                                    <h5 class="accordion-header" id="headingQuestionsFour">
                                        <span class="icon_box">
                                            <img src="assets/images/icons/message.png" alt="Questions" />
                                        </span>
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseQuestionsFour" aria-expanded="false"
                                            aria-controls="collapseQuestionsFour">
                                            Is it possible to change the term of the project, the schedule of
                                            repayment of the received investments?
                                        </button>
                                    </h5>
                                    <div id="collapseQuestionsFour" class="accordion-collapse collapse"
                                        aria-labelledby="headingQuestionsFour" data-bs-parent="#accordionExampleQuestions">
                                        <div class="accordion-body">
                                            <p>combined with a handful of model sentence structures, to generate Lorem Ipsum
                                                which looks reasonable. The generated Lorem Ipsum is therefore always free from
                                                repetition, injected humour, or</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item content__space">
                                    <h5 class="accordion-header" id="headingQuestionsFive">
                                        <span class="icon_box">
                                            <img src="assets/images/icons/message.png" alt="Questions" />
                                        </span>
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseQuestionsFive" aria-expanded="false"
                                            aria-controls="collapseQuestionsFive">
                                            Do I need to present any documents on the use of the collected
                                            investments?
                                        </button>
                                    </h5>
                                    <div id="collapseQuestionsFive" class="accordion-collapse collapse"
                                        aria-labelledby="headingQuestionsFive" data-bs-parent="#accordionExampleQuestions">
                                        <div class="accordion-body">
                                            <p>combined with a handful of model sentence structures, to generate Lorem Ipsum
                                                which looks reasonable. The generated Lorem Ipsum is therefore always free from
                                                repetition, injected humour, or</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item content__space">
                                    <h5 class="accordion-header" id="headingQuestionsSix">
                                        <span class="icon_box">
                                            <img src="assets/images/icons/message.png" alt="Questions" />
                                        </span>
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseQuestionsSix" aria-expanded="false"
                                            aria-controls="collapseQuestionsSix">
                                            What should I do if the project is unsuccessful and I am unable to
                                            repay the sum borrowed?
                                        </button>
                                    </h5>
                                    <div id="collapseQuestionsSix" class="accordion-collapse collapse"
                                        aria-labelledby="headingQuestionsSix" data-bs-parent="#accordionExampleQuestions">
                                        <div class="accordion-body">
                                            <p class="neutral-top neutral-bottom">combined with a handful of model sentence
                                                structures, to generate Lorem Ipsum
                                                which looks reasonable. The generated Lorem Ipsum is therefore always free from
                                                repetition, injected humour, or</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #faq section end ==== --> */}
        </div>
    )
}

export default LoanApplication;