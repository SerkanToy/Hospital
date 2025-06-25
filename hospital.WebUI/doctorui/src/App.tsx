import React from 'react';

/*import './App.css';

import './Css/dashlite9b70.css'
import './Css/theme9b70.css'*/

import Menu from './Container/menu'
import Country from './Container/Country'
import Breadcrumb from './Container/Breadcrumb'
import Orders from './Container/Orders'
import Revenue from './Container/Revenue'
import Customers from './Container/Customers'
import Visitors from './Container/Visitors'
import Login from './Pages/Account/Login'
/*
function App() {
  return (
    <>     
     <Login />
    </>
  );
}
*/

function App() {
  return (
    <>
      <div className="nk-app-root has-sidebar">
        
        <Menu />

        <div className="nk-main ">
          <div className="nk-wrap ">
            <div className="nk-header nk-header-fixed nk-header-fluid">
              <div className="container-fluid">
                <div className="nk-header-wrap">
                  <div className="nk-menu-trigger d-xl-none ms-n1">
                    <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu">
                      <em className="icon ni ni-menu"></em></a></div>
                  <div className="nk-header-brand d-xl-none">
                    <a href="index.html" className="logo-link">
                      <img className="logo-light logo-img" src="images/logo.png" alt="logo" />
                      <img className="logo-dark logo-img" src="images/logo-dark.png" alt="logo-dark" /></a></div>
                  <div className="nk-header-search ms-3 ms-xl-0 d-none d-md-flex">
                    <em className="icon ni ni-search"></em>
                    <input type="text" className="form-control border-transparent form-focus-none" placeholder="Ara..." />
                  </div>
                  <div className="nk-header-tools">
                    <ul className="nk-quick-nav">
                      <li className="nav-item"><a data-bs-toggle="modal" href="#region"
                        className="nk-quick-nav-icon"><em className="icon ni ni-globe"></em></a></li>
                      <li className="dropdown chats-dropdown hide-mb-xs"><a href="#"
                        className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                        <div className="icon-status icon-status-na"><em
                          className="icon ni ni-comments"></em></div>
                      </a>
                        <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
                          <div className="dropdown-head"><span className="sub-title nk-dropdown-title">Recent
                            Chats</span><a href="#">Setting</a></div>
                          <div className="dropdown-body">
                            <ul className="chat-list">
                              <li className="chat-item"><a className="chat-link" href="apps-chats.html">
                                <div className="chat-media user-avatar"><span>IH</span><span
                                  className="status dot dot-lg dot-gray"></span></div>
                                <div className="chat-info">
                                  <div className="chat-from">
                                    <div className="name">Iliash Hossain</div><span
                                      className="time">Now</span>
                                  </div>
                                  <div className="chat-context">
                                    <div className="text">You: Please confrim if you got my
                                      last messages.</div>
                                    <div className="status delivered"><em
                                      className="icon ni ni-check-circle-fill"></em>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="chat-item is-unread"><a className="chat-link"
                                href="apps-chats.html">
                                <div className="chat-media user-avatar bg-pink">
                                  <span>AB</span><span
                                    className="status dot dot-lg dot-success"></span></div>
                                <div className="chat-info">
                                  <div className="chat-from">
                                    <div className="name">Abu Bin Ishtiyak</div><span
                                      className="time">4:49 AM</span>
                                  </div>
                                  <div className="chat-context">
                                    <div className="text">Hi, I am Ishtiyak, can you help me
                                      with this problem ?</div>
                                    <div className="status unread"><em
                                      className="icon ni ni-bullet-fill"></em></div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="chat-item"><a className="chat-link" href="apps-chats.html">
                                <div className="chat-media user-avatar">
                                  <img src="images/avatar/b-sm.jpg" alt="" /></div>
                                <div className="chat-info">
                                  <div className="chat-from">
                                    <div className="name">George Philips</div><span
                                      className="time">6 Apr</span>
                                  </div>
                                  <div className="chat-context">
                                    <div className="text">Have you seens the claim from
                                      Rose?</div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="chat-item"><a className="chat-link" href="apps-chats.html">
                                <div className="chat-media user-avatar user-avatar-multiple">
                                  <div className="user-avatar">
                                    <img src="images/avatar/c-sm.jpg" alt="" /></div>
                                  <div className="user-avatar"><span>AB</span></div>
                                </div>
                                <div className="chat-info">
                                  <div className="chat-from">
                                    <div className="name">Softnio Group</div><span
                                      className="time">27 Mar</span>
                                  </div>
                                  <div className="chat-context">
                                    <div className="text">You: I just bought a new computer
                                      but i am having some problem</div>
                                    <div className="status sent"><em
                                      className="icon ni ni-check-circle"></em></div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="chat-item"><a className="chat-link" href="apps-chats.html">
                                <div className="chat-media user-avatar">
                                  <img src="images/avatar/a-sm.jpg" alt="" /><span
                                    className="status dot dot-lg dot-success"></span></div>
                                <div className="chat-info">
                                  <div className="chat-from">
                                    <div className="name">Larry Hughes</div><span
                                      className="time">3 Apr</span>
                                  </div>
                                  <div className="chat-context">
                                    <div className="text">Hi Frank! How is you doing?</div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="chat-item"><a className="chat-link" href="apps-chats.html">
                                <div className="chat-media user-avatar bg-purple">
                                  <span>TW</span></div>
                                <div className="chat-info">
                                  <div className="chat-from">
                                    <div className="name">Tammy Wilson</div><span
                                      className="time">27 Mar</span>
                                  </div>
                                  <div className="chat-context">
                                    <div className="text">You: I just bought a new computer
                                      but i am having some problem</div>
                                    <div className="status sent"><em
                                      className="icon ni ni-check-circle"></em></div>
                                  </div>
                                </div>
                              </a></li>
                            </ul>
                          </div>
                          <div className="dropdown-foot center"><a href="apps-chats.html">View All</a>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown notification-dropdown"><a href="#"
                        className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                        <div className="icon-status icon-status-info"><em className="icon ni ni-bell"></em>
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
                      </li>
                      <li className="dropdown language-dropdown d-none d-sm-block me-n1"><a href="#"
                        className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                        <div className="quick-icon border border-light">
                          <img className="icon" src="asstes/images/flags/english-sq.png" alt="" /></div>
                      </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-s1">
                          <ul className="language-list">
                            <li><a href="#" className="language-item"><img
                              src="asstes/images/flags/english.png" alt=""
                              className="language-flag" /><span
                                className="language-name">English</span></a></li>
                            <li><a href="#" className="language-item"><img
                              src="asstes/images/flags/spanish.png" alt=""
                              className="language-flag" /><span
                                className="language-name">Español</span></a></li>
                            <li><a href="#" className="language-item"><img src="asstes/images/flags/french.png"
                              alt="" className="language-flag" /><span
                                className="language-name">Français</span></a></li>
                            <li><a href="#" className="language-item"><img src="asstes/images/flags/turkey.png"
                              alt="" className="language-flag" /><span
                                className="language-name">Türkçe</span></a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown user-dropdown"><a href="#" className="dropdown-toggle me-n1"
                        data-bs-toggle="dropdown">
                        <div className="user-toggle">
                          <div className="user-avatar sm"><em className="icon ni ni-user-alt"></em></div>
                        </div>
                      </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-end">
                          <div className="dropdown-inner user-card-wrap bg-lighter">
                            <div className="user-card">
                              <div className="user-avatar"><span>AB</span></div>
                              <div className="user-info"><span className="lead-text">Abu Bin
                                Ishtiyak</span><span
                                  className="sub-text">info@softnio.com</span></div>
                            </div>
                          </div>
                          <div className="dropdown-inner">
                            <ul className="link-list">
                              <li><a href="user-profile-regular.html"><em
                                className="icon ni ni-user-alt"></em><span>View
                                  Profile</span></a></li>
                              <li><a href="user-profile-setting.html"><em
                                className="icon ni ni-setting-alt"></em><span>Account
                                  Setting</span></a></li>
                              <li><a href="user-profile-activity.html"><em
                                className="icon ni ni-activity-alt"></em><span>Login
                                  Activity</span></a></li>
                            </ul>
                          </div>
                          <div className="dropdown-inner">
                            <ul className="link-list">
                              <li><a href="#"><em className="icon ni ni-signout"></em><span>Sign
                                out</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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

                        <div className="col-xxl-6">
                          <div className="card card-full">
                            <div className="nk-ecwg nk-ecwg8 h-100">
                              <div className="card-inner">
                                <div className="card-title-group mb-3">
                                  <div className="card-title">
                                    <h6 className="title">Sales Statistics</h6>
                                  </div>
                                  <div className="card-tools">
                                    <div className="dropdown"><a href="#"
                                      className="dropdown-toggle link link-light link-sm dropdown-indicator"
                                      data-bs-toggle="dropdown">Weekly</a>
                                      <div
                                        className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                        <ul className="link-list-opt no-bdr">
                                          <li><a href="#"><span>Daily</span></a></li>
                                          <li><a href="#"
                                            className="active"><span>Weekly</span></a>
                                          </li>
                                          <li><a href="#"><span>Monthly</span></a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <ul className="nk-ecwg8-legends">
                                  <li>
                                    <div className="title"><span className="dot dot-lg sq"
                                      data-bg="#0fac81"></span><span>Total
                                        Order</span></div>
                                  </li>
                                  <li>
                                    <div className="title"><span className="dot dot-lg sq"
                                      data-bg="#eb6459"></span><span>Canceled
                                        Order</span></div>
                                  </li>
                                </ul>
                                <div className="nk-ecwg8-ck"><canvas className="ecommerce-line-chart-s4"
                                  id="salesStatistics"></canvas></div>
                                <div className="chart-label-group ps-5">
                                  <div className="chart-label">01 Jul, 2020</div>
                                  <div className="chart-label">30 Jul, 2020</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-xxl-3 col-md-6">
                          <div className="card card-full overflow-hidden">
                            <div className="nk-ecwg nk-ecwg7 h-100">
                              <div className="card-inner flex-grow-1">
                                <div className="card-title-group mb-4">
                                  <div className="card-title">
                                    <h6 className="title">Order Statistics</h6>
                                  </div>
                                </div>
                                <div className="nk-ecwg7-ck"><canvas className="ecommerce-doughnut-s1"
                                  id="orderStatistics"></canvas></div>
                                <ul className="nk-ecwg7-legends">
                                  <li>
                                    <div className="title"><span className="dot dot-lg sq"
                                      data-bg="#0fac81"></span><span>Completed</span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="title"><span className="dot dot-lg sq"
                                      data-bg="#e85347"></span><span>Canclled</span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="title"><span className="dot dot-lg sq"
                                      data-bg="#816bff"></span><span>Processing</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-md-6">
                          <div className="card h-100">
                            <div className="card-inner">
                              <div className="card-title-group mb-2">
                                <div className="card-title">
                                  <h6 className="title">Store Statistics</h6>
                                </div>
                              </div>
                              <ul className="nk-store-statistics">
                                <li className="item">
                                  <div className="info">
                                    <div className="title">Orders</div>
                                    <div className="count">1,795</div>
                                  </div><em className="icon bg-primary-dim ni ni-bag"></em>
                                </li>
                                <li className="item">
                                  <div className="info">
                                    <div className="title">Customers</div>
                                    <div className="count">2,327</div>
                                  </div><em className="icon bg-info-dim ni ni-users"></em>
                                </li>
                                <li className="item">
                                  <div className="info">
                                    <div className="title">Products</div>
                                    <div className="count">674</div>
                                  </div><em className="icon bg-pink-dim ni ni-box"></em>
                                </li>
                                <li className="item">
                                  <div className="info">
                                    <div className="title">Categories</div>
                                    <div className="count">68</div>
                                  </div><em className="icon bg-purple-dim ni ni-server"></em>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-8">
                          <div className="card card-full">
                            <div className="card-inner">
                              <div className="card-title-group">
                                <div className="card-title">
                                  <h6 className="title">Recent Orders</h6>
                                </div>
                              </div>
                            </div>
                            <div className="nk-tb-list mt-n2">
                              <div className="nk-tb-item nk-tb-head">
                                <div className="nk-tb-col"><span>Order No.</span></div>
                                <div className="nk-tb-col tb-col-sm"><span>Customer</span></div>
                                <div className="nk-tb-col tb-col-md"><span>Date</span></div>
                                <div className="nk-tb-col"><span>Amount</span></div>
                                <div className="nk-tb-col"><span
                                  className="d-none d-sm-inline">Status</span></div>
                              </div>
                              <div className="nk-tb-item">
                                <div className="nk-tb-col"><span className="tb-lead"><a
                                  href="#">#95954</a></span></div>
                                <div className="nk-tb-col tb-col-sm">
                                  <div className="user-card">
                                    <div className="user-avatar sm bg-purple-dim">
                                      <span>AB</span></div>
                                    <div className="user-name"><span className="tb-lead">Abu Bin
                                      Ishtiyak</span></div>
                                  </div>
                                </div>
                                <div className="nk-tb-col tb-col-md"><span
                                  className="tb-sub">02/11/2020</span></div>
                                <div className="nk-tb-col"><span className="tb-sub tb-amount">4,596.75
                                  <span>USD</span></span></div>
                                <div className="nk-tb-col"><span
                                  className="badge badge-dot badge-dot-xs bg-success">Paid</span>
                                </div>
                              </div>
                              <div className="nk-tb-item">
                                <div className="nk-tb-col"><span className="tb-lead"><a
                                  href="#">#95850</a></span></div>
                                <div className="nk-tb-col tb-col-sm">
                                  <div className="user-card">
                                    <div className="user-avatar sm bg-azure-dim"><span>DE</span>
                                    </div>
                                    <div className="user-name"><span className="tb-lead">Desiree
                                      Edwards</span></div>
                                  </div>
                                </div>
                                <div className="nk-tb-col tb-col-md"><span
                                  className="tb-sub">02/02/2020</span></div>
                                <div className="nk-tb-col"><span className="tb-sub tb-amount">596.75
                                  <span>USD</span></span></div>
                                <div className="nk-tb-col"><span
                                  className="badge badge-dot badge-dot-xs bg-danger">Canceled</span>
                                </div>
                              </div>
                              <div className="nk-tb-item">
                                <div className="nk-tb-col"><span className="tb-lead"><a
                                  href="#">#95812</a></span></div>
                                <div className="nk-tb-col tb-col-sm">
                                  <div className="user-card">
                                    <div className="user-avatar sm bg-warning-dim"><img
                                      src="asstes/images/avatar/b-sm.jpg" alt="" /></div>
                                    <div className="user-name"><span className="tb-lead">Blanca
                                      Schultz</span></div>
                                  </div>
                                </div>
                                <div className="nk-tb-col tb-col-md"><span
                                  className="tb-sub">02/01/2020</span></div>
                                <div className="nk-tb-col"><span className="tb-sub tb-amount">199.99
                                  <span>USD</span></span></div>
                                <div className="nk-tb-col"><span
                                  className="badge badge-dot badge-dot-xs bg-success">Paid</span>
                                </div>
                              </div>
                              <div className="nk-tb-item">
                                <div className="nk-tb-col"><span className="tb-lead"><a
                                  href="#">#95256</a></span></div>
                                <div className="nk-tb-col tb-col-sm">
                                  <div className="user-card">
                                    <div className="user-avatar sm bg-purple-dim">
                                      <span>NL</span></div>
                                    <div className="user-name"><span className="tb-lead">Naomi
                                      Lawrence</span></div>
                                  </div>
                                </div>
                                <div className="nk-tb-col tb-col-md"><span
                                  className="tb-sub">01/29/2020</span></div>
                                <div className="nk-tb-col"><span className="tb-sub tb-amount">1099.99
                                  <span>USD</span></span></div>
                                <div className="nk-tb-col"><span
                                  className="badge badge-dot badge-dot-xs bg-success">Paid</span>
                                </div>
                              </div>
                              <div className="nk-tb-item">
                                <div className="nk-tb-col"><span className="tb-lead"><a
                                  href="#">#95135</a></span></div>
                                <div className="nk-tb-col tb-col-sm">
                                  <div className="user-card">
                                    <div className="user-avatar sm bg-success-dim">
                                      <span>CH</span></div>
                                    <div className="user-name"><span className="tb-lead">Cassandra
                                      Hogan</span></div>
                                  </div>
                                </div>
                                <div className="nk-tb-col tb-col-md"><span
                                  className="tb-sub">01/29/2020</span></div>
                                <div className="nk-tb-col"><span className="tb-sub tb-amount">1099.99
                                  <span>USD</span></span></div>
                                <div className="nk-tb-col"><span
                                  className="badge badge-dot badge-dot-xs bg-warning">Due</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-8 col-lg-6">
                          <div className="card h-100">
                            <div className="card-inner">
                              <div className="card-title-group mb-2">
                                <div className="card-title">
                                  <h6 className="title">Top products</h6>
                                </div>
                                <div className="card-tools">
                                  <div className="dropdown"><a href="#"
                                    className="dropdown-toggle link link-light link-sm dropdown-indicator"
                                    data-bs-toggle="dropdown">Weekly</a>
                                    <div
                                      className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                      <ul className="link-list-opt no-bdr">
                                        <li><a href="#"><span>Daily</span></a></li>
                                        <li><a href="#"
                                          className="active"><span>Weekly</span></a>
                                        </li>
                                        <li><a href="#"><span>Monthly</span></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ul className="nk-top-products">
                                <li className="item">
                                  <div className="thumb"><img src="asstes/images/product/a.png" alt="" />
                                  </div>
                                  <div className="info">
                                    <div className="title">Pink Fitness Tracker</div>
                                    <div className="price">$99.00</div>
                                  </div>
                                  <div className="total">
                                    <div className="amount">$990.00</div>
                                    <div className="count">10 Sold</div>
                                  </div>
                                </li>
                                <li className="item">
                                  <div className="thumb"><img src="asstes/images/product/b.png" alt="" />
                                  </div>
                                  <div className="info">
                                    <div className="title">Purple Smartwatch</div>
                                    <div className="price">$99.00</div>
                                  </div>
                                  <div className="total">
                                    <div className="amount">$990.00</div>
                                    <div className="count">10 Sold</div>
                                  </div>
                                </li>
                                <li className="item">
                                  <div className="thumb"><img src="asstes/images/product/c.png" alt="" />
                                  </div>
                                  <div className="info">
                                    <div className="title">Black Mi Band Smartwatch</div>
                                    <div className="price">$99.00</div>
                                  </div>
                                  <div className="total">
                                    <div className="amount">$990.00</div>
                                    <div className="count">10 Sold</div>
                                  </div>
                                </li>
                                <li className="item">
                                  <div className="thumb"><img src="asstes/images/product/d.png" alt="" />
                                  </div>
                                  <div className="info">
                                    <div className="title">Black Headphones</div>
                                    <div className="price">$99.00</div>
                                  </div>
                                  <div className="total">
                                    <div className="amount">$990.00</div>
                                    <div className="count">10 Sold</div>
                                  </div>
                                </li>
                                <li className="item">
                                  <div className="thumb"><img src="asstes/images/product/e.png" alt="" />
                                  </div>
                                  <div className="info">
                                    <div className="title">iPhone 7 Headphones</div>
                                    <div className="price">$99.00</div>
                                  </div>
                                  <div className="total">
                                    <div className="amount">$990.00</div>
                                    <div className="count">10 Sold</div>
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
        </div>
      </div>
      <Country />
    </>
  );
}

export default App;
