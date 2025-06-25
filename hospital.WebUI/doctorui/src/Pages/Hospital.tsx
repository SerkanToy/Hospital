import React from 'react'

import Breadcrumb from '../Container/Breadcrumb'
import Orders from '../Container/Orders'
import Revenue from '../Container/Revenue'
import Customers from '../Container/Customers'
import Visitors from '../Container/Visitors'


function Hospital() {
    return (
        <div className="nk-content ">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <Breadcrumb />

                        <div className="nk-block">

                            <div className="row g-gs">

                                <Orders />
                                <Revenue />
                                <Customers />
                                <Visitors />

                                <div className="col-md-6 col-xxl-3">
                                    <div className="card h-100">
                                        <div className="card-inner">
                                            <div className="card-title-group mb-2">
                                                <div className="card-title">
                                                    <h6 className="title">Hospital Statistics</h6>
                                                </div>
                                            </div>
                                            <ul className="nk-store-statistics">
                                                <li className="item">
                                                    <div className="info">
                                                        <div className="title">Todays' Appointment</div>
                                                        <div className="count">470</div>
                                                    </div><em
                                                        className="icon ni bg-blue-dim ni-list-index-fill"></em>
                                                </li>
                                                <li className="item">
                                                    <div className="info">
                                                        <div className="title">Doctors</div>
                                                        <div className="count">152</div>
                                                    </div><em className="icon bg-primary-dim ni ni-plus-medi"></em>
                                                </li>
                                                <li className="item">
                                                    <div className="info">
                                                        <div className="title">Patients</div>
                                                        <div className="count">2,327</div>
                                                    </div><em className="icon bg-info-dim ni ni-users"></em>
                                                </li>
                                                <li className="item">
                                                    <div className="info">
                                                        <div className="title">Nurses</div>
                                                        <div className="count">674</div>
                                                    </div><em
                                                        className="icon bg-pink-dim ni ni ni-plus-fill-c"></em>
                                                </li>
                                                <li className="item">
                                                    <div className="info">
                                                        <div className="title">Department</div>
                                                        <div className="count">12</div>
                                                    </div><em className="icon bg-purple-dim ni ni-network"></em>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-xxl-3">
                                    <div className="card card-bordered h-100">
                                        <div className="card-inner">
                                            <div className="card-title-group align-start pb-3 g-2">
                                                <div className="card-title">
                                                    <h6 className="title">Total Revenue</h6>
                                                    <p>In 30 days income of this hospital.</p>
                                                </div>
                                                <div className="card-tools"><em className="card-hint icon ni ni-help"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Revenue of this month"></em></div>
                                            </div>
                                            <div className="analytic-au">
                                                <div className="analytic-data-group analytic-au-group g-3">
                                                    <div className="analytic-data analytic-au-data">
                                                        <div className="title">Monthly</div>
                                                        <div className="amount">98K</div>
                                                        <div className="change up"><em
                                                            className="icon ni ni-arrow-long-up"></em>4.63%
                                                        </div>
                                                    </div>
                                                    <div className="analytic-data analytic-au-data">
                                                        <div className="title">Weekly</div>
                                                        <div className="amount">9.69K</div>
                                                        <div className="change down"><em
                                                            className="icon ni ni-arrow-long-down"></em>1.92%
                                                        </div>
                                                    </div>
                                                    <div className="analytic-data analytic-au-data">
                                                        <div className="title">Daily (Avg)</div>
                                                        <div className="amount">3.94K</div>
                                                        <div className="change up"><em
                                                            className="icon ni ni-arrow-long-up"></em>3.45%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="analytic-au-ck"><canvas className="analytics-au-chart"
                                                    id="analyticAuData"></canvas></div>
                                                <div className="chart-label-group">
                                                    <div className="chart-label">01 Jan, 2020</div>
                                                    <div className="chart-label">30 Jan, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-xxl-6">
                                    <div className="card card-bordered h-100">
                                        <div className="card-inner">
                                            <div className="card-title-group pb-3 g-2">
                                                <div className="card-title">
                                                    <h6 className="title">Income vs Expenses</h6>
                                                    <p>Last 30 days Income vs Expenses Statistics.</p>
                                                </div>
                                                <div className="card-tools shrink-0 d-none d-sm-block">
                                                    <ul className="nav nav-switch-s2 nav-tabs bg-white">
                                                        <li className="nav-item"><a href="#" className="nav-link">7
                                                            D</a></li>
                                                        <li className="nav-item"><a href="#"
                                                            className="nav-link active">1 M</a></li>
                                                        <li className="nav-item"><a href="#" className="nav-link">3
                                                            M</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="analytic-ov">
                                                <div className="analytic-data-group analytic-ov-group g-3">
                                                    <div className="analytic-data analytic-ov-data">
                                                        <div className="title">Month</div>
                                                        <div className="amount">12.57K</div>
                                                        <div className="change up"><em
                                                            className="icon ni ni-arrow-long-up"></em>12.37%
                                                        </div>
                                                    </div>
                                                    <div className="analytic-data analytic-ov-data">
                                                        <div className="title">Week</div>
                                                        <div className="amount">3.98K</div>
                                                        <div className="change up"><em
                                                            className="icon ni ni-arrow-long-up"></em>47.74%
                                                        </div>
                                                    </div>
                                                    <div className="analytic-data analytic-ov-data">
                                                        <div className="title">Month</div>
                                                        <div className="amount">4.49K</div>
                                                        <div className="change up"><em
                                                            className="icon ni ni-arrow-long-up"></em>12.37%
                                                        </div>
                                                    </div>
                                                    <div className="analytic-data analytic-ov-data">
                                                        <div className="title">Week</div>
                                                        <div className="amount">1.15K</div>
                                                        <div className="change down"><em
                                                            className="icon ni ni-arrow-long-down"></em>0.35%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="analytic-ov-ck"><canvas className="analytics-line-large"
                                                    id="analyticOvData"></canvas></div>
                                                <div className="chart-label-group ms-5">
                                                    <div className="chart-label">01 Jan, 2020</div>
                                                    <div className="chart-label d-none d-sm-block">15 Jan, 2020
                                                    </div>
                                                    <div className="chart-label">30 Jan, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4 col-xxl-4">
                                    <div className="card card-bordered card-full">
                                        <div className="card-inner-group">
                                            <div className="card-inner">
                                                <div className="card-title-group">
                                                    <div className="card-title">
                                                        <h6 className="title">New Patients</h6>
                                                    </div>
                                                    <div className="card-tools"><a href="#" className="link">View
                                                        All</a></div>
                                                </div>
                                            </div>
                                            <div className="card-inner card-inner-md">
                                                <div className="user-card">
                                                    <div className="user-avatar bg-primary-dim"><span>AB</span>
                                                    </div>
                                                    <div className="user-info"><span className="lead-text">Abu Bin
                                                        Ishtiyak</span><span
                                                            className="sub-text">info@softnio.com</span></div>
                                                    <div className="user-action">
                                                        <div className="drodown"><a href="#"
                                                            className="dropdown-toggle btn btn-icon btn-trigger me-n1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"><em
                                                                className="icon ni ni-more-h"></em></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <ul className="link-list-opt no-bdr">
                                                                    <li><a href="#"><em
                                                                        className="icon ni ni-setting"></em><span>Action
                                                                            Settings</span></a></li>
                                                                    <li><a href="#"><em
                                                                        className="icon ni ni-notify"></em><span>Push
                                                                            Notification</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-inner card-inner-md">
                                                <div className="user-card">
                                                    <div className="user-avatar bg-pink-dim"><span>SW</span></div>
                                                    <div className="user-info"><span className="lead-text">Sharon
                                                        Walker</span><span
                                                            className="sub-text">sharon-90@example.com</span></div>
                                                    <div className="user-action">
                                                        <div className="drodown"><a href="#"
                                                            className="dropdown-toggle btn btn-icon btn-trigger me-n1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"><em
                                                                className="icon ni ni-more-h"></em></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <ul className="link-list-opt no-bdr">
                                                                    <li><a href="#"><em
                                                                        className="icon ni ni-setting"></em><span>Action
                                                                            Settings</span></a></li>
                                                                    <li><a href="#"><em
                                                                        className="icon ni ni-notify"></em><span>Push
                                                                            Notification</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-inner card-inner-md">
                                                <div className="user-card">
                                                    <div className="user-avatar bg-warning-dim"><span>GO</span>
                                                    </div>
                                                    <div className="user-info"><span className="lead-text">Gloria
                                                        Oliver</span><span
                                                            className="sub-text">gloria_72@example.com</span></div>
                                                    <div className="user-action">
                                                        <div className="drodown"><a href="#"
                                                            className="dropdown-toggle btn btn-icon btn-trigger me-n1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"><em
                                                                className="icon ni ni-more-h"></em></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <ul className="link-list-opt no-bdr">
                                                                    <li><a href="#"><em
                                                                        className="icon ni ni-setting"></em><span>Action
                                                                            Settings</span></a></li>
                                                                    <li><a href="#"><em
                                                                        className="icon ni ni-notify"></em><span>Push
                                                                            Notification</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-inner card-inner-md">
                                                <div className="user-card">
                                                    <div className="user-avatar bg-success-dim"><span>PS</span>
                                                    </div>
                                                    <div className="user-info"><span className="lead-text">Phillip
                                                        Sullivan</span><span
                                                            className="sub-text">phillip-85@example.com</span></div>
                                                    <div className="user-action">
                                                        <div className="drodown"><a href="#"
                                                            className="dropdown-toggle btn btn-icon btn-trigger me-n1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"><em
                                                                className="icon ni ni-more-h"></em></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <ul className="link-list-opt no-bdr">
                                                                    <li><a href="#"><em
                                                                        className="icon ni ni-setting"></em><span>Action
                                                                            Settings</span></a></li>
                                                                    <li><a href="#"><em
                                                                        className="icon ni ni-notify"></em><span>Push
                                                                            Notification</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-xxl-4">
                                    <div className="card card-bordered h-100">
                                        <div className="card-inner border-bottom">
                                            <div className="card-title-group">
                                                <div className="card-title">
                                                    <h6 className="title">Support Requests</h6>
                                                </div>
                                                <div className="card-tools"><a href="#" className="link">View All</a>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="nk-support">
                                            <li className="nk-support-item">
                                                <div className="user-avatar">
                                                    <img src="assets/img/avatar/a-sm.jpg" alt="" /></div>
                                                <div className="nk-support-content">
                                                    <div className="title"><span>Vincent Lopez</span><span
                                                        className="badge badge-dot badge-dot-xs bg-warning ms-1">Pending</span>
                                                    </div>
                                                    <p>Thanks for contact us with your issues...</p><span
                                                        className="time">6 min ago</span>
                                                </div>
                                            </li>
                                            <li className="nk-support-item">
                                                <div className="user-avatar bg-purple-dim"><span>DM</span></div>
                                                <div className="nk-support-content">
                                                    <div className="title"><span>Daniel Moore</span><span
                                                        className="badge badge-dot badge-dot-xs bg-info ms-1">Open</span>
                                                    </div>
                                                    <p>Thanks for contact us with your issues...</p><span
                                                        className="time">2 Hours ago</span>
                                                </div>
                                            </li>
                                            <li className="nk-support-item">
                                                <div className="user-avatar"><img src="assets/img/avatar/b-sm.jpg"
                                                    alt="" /></div>
                                                <div className="nk-support-content">
                                                    <div className="title"><span>Larry Henry</span><span
                                                        className="badge badge-dot badge-dot-xs bg-success ms-1">Solved</span>
                                                    </div>
                                                    <p>Thanks for contact us with your issues...</p><span
                                                        className="time">3 Hours ago</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-6 col-xxl-4">
                                    <div className="card card-bordered h-100">
                                        <div className="card-inner border-bottom">
                                            <div className="card-title-group">
                                                <div className="card-title">
                                                    <h6 className="title">Notifications</h6>
                                                </div>
                                                <div className="card-tools"><a href="#" className="link">View All</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-inner">
                                            <div className="timeline">
                                                <h6 className="timeline-head">November, 2019</h6>
                                                <ul className="timeline-list">
                                                    <li className="timeline-item">
                                                        <div className="timeline-status bg-primary is-outline">
                                                        </div>
                                                        <div className="timeline-date">13 Nov <em
                                                            className="icon ni ni-alarm-alt"></em></div>
                                                        <div className="timeline-data">
                                                            <h6 className="timeline-title">Test Reports In Labotory
                                                                Sample</h6>
                                                            <div className="timeline-des">
                                                                <p>Re-check tets results asap.</p><span
                                                                    className="time">09:30am</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="timeline-item">
                                                        <div className="timeline-status bg-primary"></div>
                                                        <div className="timeline-date">13 Nov <em
                                                            className="icon ni ni-alarm-alt"></em></div>
                                                        <div className="timeline-data">
                                                            <h6 className="timeline-title">Office Hours in Lockdown
                                                            </h6>
                                                            <div className="timeline-des">
                                                                <p>About hospital policies in lockdown.</p><span
                                                                    className="time">09:30am</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="timeline-item">
                                                        <div className="timeline-status bg-pink"></div>
                                                        <div className="timeline-date">13 Nov <em
                                                            className="icon ni ni-alarm-alt"></em></div>
                                                        <div className="timeline-data">
                                                            <h6 className="timeline-title">COVID-19 Tests Result
                                                                Report</h6>
                                                            <div className="timeline-des">
                                                                <p>About COVID-19 patients tests.</p><span
                                                                    className="time">09:30am</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hospital

