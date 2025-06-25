import React from 'react'

function Breadcrumb() {
    return (
        <div className="nk-block-head nk-block-head-sm">
            <div className="nk-block-between">
                <div className="nk-block-head-content">
                    <h3 className="nk-block-title page-title">Dashboard</h3>
                    <div className="nk-block-des text-soft">
                        <p>Welcome to DashLite Dashboard Template.</p>
                    </div>
                </div>
                <div className="nk-block-head-content">
                    <div className="toggle-wrap nk-block-tools-toggle"><a href="#"
                        className="btn btn-icon btn-trigger toggle-expand me-n1"
                        data-target="pageMenu"><em className="icon ni ni-more-v"></em></a>
                        <div className="toggle-expand-content" data-content="pageMenu">
                            <ul className="nk-block-tools g-3">
                                <li>
                                    <div className="drodown"><a href="#"
                                        className="dropdown-toggle btn btn-white btn-dim btn-outline-light"
                                        data-bs-toggle="dropdown"><em
                                            className="d-none d-sm-inline icon ni ni-calender-date"></em><span><span
                                                className="d-none d-md-inline">Last</span> 30
                                            Days</span><em
                                                className="dd-indc icon ni ni-chevron-right"></em></a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <ul className="link-list-opt no-bdr">
                                                <li><a href="#"><span>Last 30 Days</span></a>
                                                </li>
                                                <li><a href="#"><span>Last 6 Months</span></a>
                                                </li>
                                                <li><a href="#"><span>Last 1 Years</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nk-block-tools-opt"><a href="#"
                                    className="btn btn-primary"><em
                                        className="icon ni ni-reports"></em><span>Reports</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb