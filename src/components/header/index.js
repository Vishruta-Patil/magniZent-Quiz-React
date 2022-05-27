import "./header.css"
import "./collapseNavbar.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="container">
            <div className="header-container">
                <div className="header">
                    <div className="logo">

                        <Link to="/" className="primary-color" >
                            <h2 className="main-title">
                                magni<span className="secondary-color bold-main-title">Z</span>ent
                            </h2>
                        </Link>

                    </div>

                    <div className="header-main-content">
                        <div className="flex header-inner-container">
                        <Link to="/" className="secondary-color" >
                                <p className="header-item">Home</p>
                            </Link>
                            <p href="#">
                                <p className="header-item primary-color">Dashboard</p>
                            </p>
                        </div>
                    </div>

                    <div className="flex icon-container">
                        <div className="icon-unit">
                            <p className="flex-column flex-center secondary-color header-icon" >
                                <span className="material-icons icon"> account_circle </span>

                            </p>
                        </div>
                        <div className="icon-unit">
                            <p className="flex-column flex-center secondary-color header-icon" >
                                <span className="material-icons icon"> equalizer </span>

                            </p>
                        </div>
                        <div className="icon-unit">
                            <p className="flex-column flex-center secondary-color header-icon">
                                <span className="material-icons icon"> dark_mode </span>

                            </p>
                        </div>
                    </div>
                    <span className="material-icons icon hide-menu menu-logo"> menu </span>
                </div>
            </div>

            <div id="empty-box"></div>

            <nav className="collape-navbar-container hide-nav">
                <div className="header-navbar flex justify-between">
                    <h2>magni<span className="secondary-color highlight-letter-header">Z</span>ent</h2>
                    <button className="nav-close-btn"><span className="material-icons icon"> close </span></button>

                </div>
                <hr className="hr-line" />
                <div className="navbar-item-container secondary-color">
                    <div className="hide-mini-desktop">
                        <p className="secondary-color">
                            <div className="navbar-unit flex">
                                <span className="material-icons nav-icon"> home </span>
                                <div className="navbar-unit-title">Home</div>
                            </div>
                        </p>
                        <p className="secondary-color">
                            <div className="navbar-unit flex">
                                <span className="material-icons nav-icon"> dashboard </span>
                                <div className="navbar-unit-title">Dashboard</div>
                            </div>
                        </p>
                    </div>

                    <p className="secondary-color">
                        <div className="navbar-unit flex">
                            <span className="material-icons nav-icon"> account_circle </span>
                            <div className="navbar-unit-title">Login</div>
                        </div>
                    </p>
                    <p className="secondary-color">
                        <div className="navbar-unit flex">
                            <span className="material-icons nav-icon"> equalizer </span>
                            <div className="navbar-unit-title">LeaderBoard</div>
                        </div>
                    </p>
                </div>
            </nav>
        </div>
    )
}

export default Header