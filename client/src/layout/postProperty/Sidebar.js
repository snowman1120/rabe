
const Sidebar = () => {
    return (
        <div className="sidebar">
            <a href="javascript:void(0)" className="close__sidebar">
                <i className="fa-solid fa-xmark"></i>
            </a>
            <div className="sidenav__wrapper">
                <ul>
                    <li>
                        <a href="#location-information" className="sidenav__active">
                            <img src="assets/images/icons/dashboard.png" alt="Dashboard" /> Location Information
                        </a>
                    </li>
                    <li>
                        <a href="#property-value">
                            <img src="assets/images/icons/investments.png" alt="Investments" />
                            Property value
                        </a>
                    </li>
                    <li>
                        <a href="transaction.html">
                            <img src="assets/images/icons/transactions.png" alt="Transactions" />
                            Property features
                        </a>
                    </li>
                    <li>
                        <a href="withdraw.html">
                            <img src="assets/images/icons/withdraw.png" alt="Withdraw" /> Lot information
                        </a>
                    </li>
                    <li>
                        <a href="account.html">
                            <img src="assets/images/icons/account.png" alt="Account" /> Utility information
                        </a>
                    </li>
                    <li>
                        <a href="account.html">
                            <img src="assets/images/icons/account.png" alt="Account" /> Environmental information
                        </a>
                    </li>
                    <li>
                        <a href="account.html">
                            <img src="assets/images/icons/account.png" alt="Account" /> Information about equipment and systems
                        </a>
                    </li>
                    <li>
                        <a href="account.html">
                            <img src="assets/images/icons/account.png" alt="Account" /> Information about structure / other
                        </a>
                    </li>
                    <li>
                        <a href="account.html">
                            <img src="assets/images/icons/account.png" alt="Account" /> Miscellaneous information about property
                        </a>
                    </li>
                    <li>
                        <a href="account.html">
                            <img src="assets/images/icons/account.png" alt="Account" /> Information about foundation
                        </a>
                    </li>
                    <li>
                        <a href="account.html">
                            <img src="assets/images/icons/account.png" alt="Account" /> Auction details
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;