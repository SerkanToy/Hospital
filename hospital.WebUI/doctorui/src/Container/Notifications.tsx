import React from 'react'

function Notifications() {
    return (
        <>
            <a href="#" className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                <div className="icon-status icon-status-info">
                    <em className="icon ni ni-bell"></em>
                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
                <div className="dropdown-head"><span
                    className="sub-title nk-dropdown-title">Notifications</span><a
                        href="#">Mark All as Read</a></div>
                <div className="dropdown-body">
                    <div className="nk-notification">
                        <div className="nk-notification-item dropdown-inner">
                            <div className="nk-notification-icon"><em
                                className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                            </div>
                            <div className="nk-notification-content">
                                <div className="nk-notification-text">You have requested to
                                    <span>Widthdrawl</span></div>
                                <div className="nk-notification-time">2 hrs ago</div>
                            </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                            <div className="nk-notification-icon"><em
                                className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                            </div>
                            <div className="nk-notification-content">
                                <div className="nk-notification-text">Your <span>Deposit
                                    Order</span> is placed</div>
                                <div className="nk-notification-time">2 hrs ago</div>
                            </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                            <div className="nk-notification-icon"><em
                                className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                            </div>
                            <div className="nk-notification-content">
                                <div className="nk-notification-text">You have requested to
                                    <span>Widthdrawl</span></div>
                                <div className="nk-notification-time">2 hrs ago</div>
                            </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                            <div className="nk-notification-icon"><em
                                className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                            </div>
                            <div className="nk-notification-content">
                                <div className="nk-notification-text">Your <span>Deposit
                                    Order</span> is placed</div>
                                <div className="nk-notification-time">2 hrs ago</div>
                            </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                            <div className="nk-notification-icon"><em
                                className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                            </div>
                            <div className="nk-notification-content">
                                <div className="nk-notification-text">You have requested to
                                    <span>Widthdrawl</span></div>
                                <div className="nk-notification-time">2 hrs ago</div>
                            </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                            <div className="nk-notification-icon"><em
                                className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                            </div>
                            <div className="nk-notification-content">
                                <div className="nk-notification-text">Your <span>Deposit
                                    Order</span> is placed</div>
                                <div className="nk-notification-time">2 hrs ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown-foot center"><a href="#">View All</a></div>
            </div>
        </>
    )
}

export default Notifications