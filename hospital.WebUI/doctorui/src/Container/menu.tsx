import React from 'react'
import ProfilTwo from './ProfilTwo'

function Menu() {
  return (
    <div className="nk-sidebar" data-content="sidebarMenu">
      <div className="nk-sidebar-bar">
        <div className="nk-apps-brand">
          <a href="index.html" className="logo-link">
            <img className="logo-light logo-img" src={'assets/img/logo-small.png'} alt="logo" />
            <img className="logo-dark logo-img" src={'assets/img/logo-dark-small.png'} alt="logo-dark" />
          </a>
        </div>
        <div className="nk-sidebar-element">
          <div className="nk-sidebar-body">
            <div className="nk-sidebar-content" data-simplebar>
              <div className="nk-sidebar-menu">
                <ul className="nk-menu apps-menu">
                  <li className="nk-menu-item">
                    <a href="#" className="nk-menu-link nk-menu-switch" data-target="navPharmacy">
                      <span className="nk-menu-icon"><em className="icon ni ni-capsule"></em></span>
                    </a>
                  </li>
                  <li className="nk-menu-item"><a href="#" className="nk-menu-link nk-menu-switch"
                    data-target="navHospital"><span className="nk-menu-icon"><em
                      className="icon ni ni-plus-medi"></em></span></a></li>
                  <li className="nk-menu-item active"><a href="#" className="nk-menu-link nk-menu-switch"
                    data-target="navDashboards"><span className="nk-menu-icon"><em
                      className="icon ni ni-dashboard"></em></span></a></li>
                  <li className="nk-menu-item"><a href="#" className="nk-menu-link nk-menu-switch"
                    data-target="navApps"><span className="nk-menu-icon"><em
                      className="icon ni ni-menu-circled"></em></span></a></li>
                  <li className="nk-menu-item"><a href="#" className="nk-menu-link nk-menu-switch"
                    data-target="navPages"><span className="nk-menu-icon"><em
                      className="icon ni ni-files"></em></span></a></li>
                  <li className="nk-menu-item"><a href="#" className="nk-menu-link nk-menu-switch"
                    data-target="navMisc"><span className="nk-menu-icon"><em
                      className="icon ni ni-server"></em></span></a></li>
                  <li className="nk-menu-item"><a href="#" className="nk-menu-link nk-menu-switch"
                    data-target="navError"><span className="nk-menu-icon"><em
                      className="icon ni ni-alert-c"></em></span></a></li>
                  <li className="nk-menu-hr"></li>
                  <li className="nk-menu-item"><a href="#" className="nk-menu-link nk-menu-switch"
                    data-target="navComponents"><span className="nk-menu-icon"><em
                      className="icon ni ni-layers"></em></span></a></li>
                </ul>
              </div>
              <div className="nk-sidebar-footer">
                <ul className="nk-menu nk-menu-md apps-menu">
                  <li className="nk-menu-item"><a href="#" className="nk-menu-link" title="Settings"><span
                    className="nk-menu-icon"><em className="icon ni ni-setting"></em></span></a>
                  </li>
                </ul>
              </div>
            </div>

            <ProfilTwo />

          </div>
        </div>
      </div>
      <div className="nk-sidebar-main is-light">
        <div className="nk-sidebar-inner" data-simplebar>
          <div className="nk-menu-content" data-content="navPharmacy">
            <h5 className="title">Pharmacy</h5>
            <ul className="nk-menu">
              <li className="nk-menu-item"><a href="pharmacy/index.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-dashboard-fill"></em></span><span
                  className="nk-menu-text">Dashboard</span></a></li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-users-fill"></em></span><span
                  className="nk-menu-text">Customer</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="pharmacy/add-customer.html"
                    className="nk-menu-link"><span className="nk-menu-text">Add Customer</span></a></li>
                  <li className="nk-menu-item"><a href="pharmacy/customer.html" className="nk-menu-link"><span
                    className="nk-menu-text">Customer List</span></a></li>
                  <li className="nk-menu-item"><a href="pharmacy/customer-ledger.html"
                    className="nk-menu-link"><span className="nk-menu-text">Customer Ledger</span></a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-capsule-fill"></em></span><span
                  className="nk-menu-text">Medicine</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="pharmacy/add-medicine.html"
                    className="nk-menu-link"><span className="nk-menu-text">Add Medicine</span></a></li>
                  <li className="nk-menu-item"><a href="pharmacy/medicine-list.html"
                    className="nk-menu-link"><span className="nk-menu-text">Medicine List</span></a>
                  </li>
                  <li className="nk-menu-item"><a href="pharmacy/medicine-details.html"
                    className="nk-menu-link"><span className="nk-menu-text">Medicine Details</span></a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-home-fill"></em></span><span
                  className="nk-menu-text">Manufacturer</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="pharmacy/manufacturer.html"
                    className="nk-menu-link"><span className="nk-menu-text">Manufacturer List</span></a>
                  </li>
                  <li className="nk-menu-item"><a href="pharmacy/manufacturer-ledger.html"
                    className="nk-menu-link"><span className="nk-menu-text">Manufacturer
                      Ledger</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-repeat"></em></span><span
                  className="nk-menu-text">Return</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="pharmacy/add-wastage-return.html"
                    className="nk-menu-link"><span className="nk-menu-text">Add Wastage
                      Return</span></a></li>
                  <li className="nk-menu-item"><a href="pharmacy/wastage-return.html"
                    className="nk-menu-link"><span className="nk-menu-text">Wastage Return
                      List</span></a></li>
                  <li className="nk-menu-item"><a href="pharmacy/add-manufacturer-return.html"
                    className="nk-menu-link"><span className="nk-menu-text">Add Manufacture
                      Return</span></a></li>
                  <li className="nk-menu-item"><a href="pharmacy/manufacturer-return.html"
                    className="nk-menu-link"><span className="nk-menu-text">Manufacturer Return
                      List</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-user-circle-fill"></em></span><span
                  className="nk-menu-text">Human resource</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="pharmacy/member.html" className="nk-menu-link"><span
                    className="nk-menu-text">Member</span></a></li>
                  <li className="nk-menu-item"><a href="pharmacy/members-profile-regular.html"
                    className="nk-menu-link"><span className="nk-menu-text">Members Profile</span></a>
                  </li>
                  <li className="nk-menu-item"><a href="pharmacy/attendence.html"
                    className="nk-menu-link"><span className="nk-menu-text">Attendence</span></a></li>
                  <li className="nk-menu-item"><a href="pharmacy/salary.html" className="nk-menu-link"><span
                    className="nk-menu-text">Salary</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-coin-alt-fill"></em></span><span
                  className="nk-menu-text">Finance</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="pharmacy/income-list.html"
                    className="nk-menu-link"><span className="nk-menu-text">Income</span></a></li>
                  <li className="nk-menu-item"><a href="pharmacy/expense-list.html"
                    className="nk-menu-link"><span className="nk-menu-text">Expence</span></a></li>
                  <li className="nk-menu-item"><a href="pharmacy/invoice-list.html"
                    className="nk-menu-link"><span className="nk-menu-text">Invoice List</span></a></li>
                  <li className="nk-menu-item"><a href="pharmacy/invoice-details.html"
                    className="nk-menu-link"><span className="nk-menu-text">Invoice Details</span></a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em
                  className="icon ni ni-activity-round-fill"></em></span><span
                    className="nk-menu-text">Report</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="pharmacy/sales-report.html"
                    className="nk-menu-link"><span className="nk-menu-text">Sales Report</span></a></li>
                  <li className="nk-menu-item"><a href="pharmacy/purchase-report.html"
                    className="nk-menu-link"><span className="nk-menu-text">Purchase Report</span></a>
                  </li>
                  <li className="nk-menu-item"><a href="pharmacy/stock-report.html"
                    className="nk-menu-link"><span className="nk-menu-text">Stock Report</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item"><a href="pharmacy/support.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-msg-fill"></em></span><span
                  className="nk-menu-text">Support</span></a></li>
              <li className="nk-menu-item"><a href="pharmacy/general-settings.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-setting-fill"></em></span><span
                  className="nk-menu-text">Setting</span></a></li>
            </ul>
          </div>
          <div className="nk-menu-content" data-content="navHospital">
            <h5 className="title">Hospital Manegment</h5>
            <ul className="nk-menu">
              <li className="nk-menu-item"><a href="hospital/index.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-dashboard-fill"></em></span><span
                  className="nk-menu-text">Dashboard</span></a></li>
              <li className="nk-menu-item"><a href="hospital/appointment.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-note-add-fill"></em></span><span
                  className="nk-menu-text">Appointment List</span></a></li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-users-fill"></em></span><span
                  className="nk-menu-text">Patient</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="hospital/patient-add.html"
                    className="nk-menu-link"><span className="nk-menu-text">Add Patient</span></a></li>
                  <li className="nk-menu-item"><a href="hospital/patient-list.html"
                    className="nk-menu-link"><span className="nk-menu-text">IPD / OPD
                      Patients</span></a></li>
                  <li className="nk-menu-item"><a href="hospital/patient-profile.html"
                    className="nk-menu-link"><span className="nk-menu-text">Patient Profile</span></a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub">
                <a href="#" className="nk-menu-link nk-menu-toggle">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-plus-medi-fill "></em>
                  </span>
                  <span className="nk-menu-text">Doktor / Hemşire / Personel</span>
                </a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-users-fill"></em>
                      </span>
                      <span className="nk-menu-text">Doktor</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a href="/adddoctor" className="nk-menu-link"><span className="nk-menu-text">Doktor Ekle</span></a></li>
                      <li className="nk-menu-item">
                        <a href="/doctors" className="nk-menu-link"><span className="nk-menu-text">Doktor Listesi</span></a>
                      </li>
                    </ul>
                  </li>

                  <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-users-fill"></em>
                      </span>
                      <span className="nk-menu-text">Hemşire</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a href="/addnurses"
                          className="nk-menu-link"><span className="nk-menu-text">Hemşire Ekle</span></a></li>
                      <li className="nk-menu-item">
                        <a href="/nurses" className="nk-menu-link"><span className="nk-menu-text">Hemşire Listesi</span></a>
                      </li>
                    </ul>
                  </li>

                  <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-users-fill"></em>
                      </span>
                      <span className="nk-menu-text">Personel</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a href="/addemployee"
                          className="nk-menu-link"><span className="nk-menu-text">Personel Ekle</span></a></li>
                      <li className="nk-menu-item">
                        <a href="/employees" className="nk-menu-link"><span className="nk-menu-text">Personel Listesi</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-coin-alt-fill"></em></span><span
                  className="nk-menu-text">Finance</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="hospital/income-list.html"
                    className="nk-menu-link"><span className="nk-menu-text">Income</span></a></li>
                  <li className="nk-menu-item"><a href="hospital/expense-list.html"
                    className="nk-menu-link"><span className="nk-menu-text">Expense</span></a></li>
                  <li className="nk-menu-item"><a href="hospital/invoice-list.html"
                    className="nk-menu-link"><span className="nk-menu-text">Invoice List</span></a></li>
                  <li className="nk-menu-item"><a href="hospital/invoice-details.html"
                    className="nk-menu-link"><span className="nk-menu-text">Invoice Details</span></a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em
                  className="icon ni ni-activity-round-fill"></em></span><span
                    className="nk-menu-text">Monitor Hospital</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="hospital/birth-report.html"
                    className="nk-menu-link"><span className="nk-menu-text">Birth Report</span></a></li>
                  <li className="nk-menu-item"><a href="hospital/blood-bank.html"
                    className="nk-menu-link"><span className="nk-menu-text">Blood Bank</span></a></li>
                  <li className="nk-menu-item"><a href="hospital/inventory-items.html"
                    className="nk-menu-link"><span className="nk-menu-text">Inventory Items
                      Reports</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-panel-fill"></em></span><span
                  className="nk-menu-text">Misc Pages</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="hospital/bed-group.html"
                    className="nk-menu-link"><span className="nk-menu-text">Bed Group</span></a></li>
                  <li className="nk-menu-item"><a href="hospital/bed-allotment.html"
                    className="nk-menu-link"><span className="nk-menu-text">Bed Allotment</span></a>
                  </li>
                  <li className="nk-menu-item"><a href="hospital/department.html"
                    className="nk-menu-link"><span className="nk-menu-text">Department</span></a></li>
                  <li className="nk-menu-item"><a href="hospital/death-report.html"
                    className="nk-menu-link"><span className="nk-menu-text">Death Report</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item"><a href="hospital/user-profile.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-user-fill"></em></span><span
                  className="nk-menu-text">User Profile</span></a></li>
              <li className="nk-menu-item"><a href="hospital/settings.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-setting-fill"></em></span><span
                  className="nk-menu-text">Setting</span></a></li>
            </ul>
          </div>
          <div className="nk-menu-content menu-active" data-content="navDashboards">
            <h5 className="title">Dashboards</h5>
            <ul className="nk-menu">
              <li className="nk-menu-item"><a href="index.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-dashboard-fill"></em></span><span
                  className="nk-menu-text">Default Dashboard</span></a></li>
              <li className="nk-menu-item"><a href="index-ecommerce.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-bag-fill"></em></span><span
                  className="nk-menu-text">Ecommerce Dashboard</span></a></li>
              <li className="nk-menu-item"><a href="index-sales.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-bag-fill"></em></span><span
                  className="nk-menu-text">Sales Dashboard</span></a></li>
              <li className="nk-menu-item"><a href="index-analytics.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-growth-fill"></em></span><span
                  className="nk-menu-text">Analytics Dashboard</span></a></li>
            </ul>
          </div>
          <div className="nk-menu-content" data-content="navApps">
            <h5 className="title">Apps</h5>
            <ul className="nk-menu">
              <li className="nk-menu-item"><a href="apps-inbox.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-inbox-fill"></em></span><span
                  className="nk-menu-text">Mailbox</span></a></li>
              <li className="nk-menu-item"><a href="apps-messages.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-chat-fill"></em></span><span
                  className="nk-menu-text">Messages</span></a></li>
              <li className="nk-menu-item"><a href="apps-file-manager.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-folder-fill"></em></span><span
                  className="nk-menu-text">File Manager</span></a></li>
              <li className="nk-menu-item"><a href="apps-chats.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-chat-circle-fill"></em></span><span
                  className="nk-menu-text">Chats</span></a></li>
              <li className="nk-menu-item"><a href="apps-calendar.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-calender-date-fill"></em></span><span
                  className="nk-menu-text">Calendar</span></a></li>
              <li className="nk-menu-item"><a href="apps-kanban.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-template-fill"></em></span><span
                  className="nk-menu-text">Kanban Board</span></a></li>
            </ul>
          </div>
          <div className="nk-menu-content" data-content="navPages">
            <h5 className="title">Pages</h5>
            <ul className="nk-menu">
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-tile-thumb-fill"></em></span><span
                  className="nk-menu-text">Projects</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="project-card.html" className="nk-menu-link"><span
                    className="nk-menu-text">Project Cards</span></a></li>
                  <li className="nk-menu-item"><a href="project-list.html" className="nk-menu-link"><span
                    className="nk-menu-text">Project List</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-users-fill"></em></span><span
                  className="nk-menu-text">User Manage</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="user-list-regular.html" className="nk-menu-link"><span
                    className="nk-menu-text">User List - Regular</span></a></li>
                  <li className="nk-menu-item"><a href="user-list-compact.html" className="nk-menu-link"><span
                    className="nk-menu-text">User List - Compact</span></a></li>
                  <li className="nk-menu-item"><a href="user-details-regular.html"
                    className="nk-menu-link"><span className="nk-menu-text">User Details -
                      Regular</span></a></li>
                  <li className="nk-menu-item"><a href="user-profile-regular.html"
                    className="nk-menu-link"><span className="nk-menu-text">User Profile -
                      Regular</span></a></li>
                  <li className="nk-menu-item"><a href="user-card.html" className="nk-menu-link"><span
                    className="nk-menu-text">User Contact - Card</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-user-list-fill"></em></span><span
                  className="nk-menu-text">Customers</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="customer-list.html" className="nk-menu-link"><span
                    className="nk-menu-text">Customer List</span></a></li>
                  <li className="nk-menu-item"><a href="customer-details.html" className="nk-menu-link"><span
                    className="nk-menu-text">Customer Details</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-cart-fill"></em></span><span
                  className="nk-menu-text">Ecommerce Pages</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="products.html" className="nk-menu-link"><span
                    className="nk-menu-text">Product List</span></a></li>
                  <li className="nk-menu-item"><a href="orders-regular.html" className="nk-menu-link"><span
                    className="nk-menu-text">Order List - Regular</span></a></li>
                  <li className="nk-menu-item"><a href="orders-sales.html" className="nk-menu-link"><span
                    className="nk-menu-text">Order List - Sales</span></a></li>
                  <li className="nk-menu-item"><a href="invoice-list.html" className="nk-menu-link"><span
                    className="nk-menu-text">Invoices List</span></a></li>
                  <li className="nk-menu-item"><a href="invoice-details.html" className="nk-menu-link"><span
                    className="nk-menu-text">Invoice Details</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-list-fill"></em></span><span
                  className="nk-menu-text">Products</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="product-list.html" className="nk-menu-link"><span
                    className="nk-menu-text">Product List</span></a></li>
                  <li className="nk-menu-item"><a href="product-card.html" className="nk-menu-link"><span
                    className="nk-menu-text">Product Card</span></a></li>
                  <li className="nk-menu-item"><a href="product-details.html" className="nk-menu-link"><span
                    className="nk-menu-text">Product Details</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item"><a href="pricing-table.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-view-col-fill"></em></span><span
                  className="nk-menu-text">Pricing Table</span></a></li>
              <li className="nk-menu-item"><a href="gallery.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-img-fill"></em></span><span
                  className="nk-menu-text">Image Gallery</span></a></li>
              <li className="nk-menu-item"><a href="_blank.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-file-fill"></em></span><span
                  className="nk-menu-text">Blank / Startup</span></a></li>
              <li className="nk-menu-item"><a href="pages/faqs.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-file-fill"></em></span><span
                  className="nk-menu-text">Faqs / Help</span></a></li>
              <li className="nk-menu-item"><a href="pages/terms-policy.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-file-fill"></em></span><span
                  className="nk-menu-text">Terms / Policy</span></a></li>
              <li className="nk-menu-item"><a href="pages/regular-v1.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-file-fill"></em></span><span
                  className="nk-menu-text">Regular Page - v1</span></a></li>
              <li className="nk-menu-item"><a href="pages/regular-v2.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-file-fill"></em></span><span
                  className="nk-menu-text">Regular Page - v2</span></a></li>
            </ul>
          </div>
          <div className="nk-menu-content" data-content="navMisc">
            <h5 className="title">Misc Pages</h5>
            <ul className="nk-menu">
              <li className="nk-menu-item"><a href="pages/auths/auth-login.html" className="nk-menu-link"
                target="_blank"><span className="nk-menu-text">Login / Signin</span></a></li>
              <li className="nk-menu-item"><a href="pages/auths/auth-register.html" className="nk-menu-link"
                target="_blank"><span className="nk-menu-text">Register / Signup</span></a></li>
              <li className="nk-menu-item"><a href="pages/auths/auth-reset.html" className="nk-menu-link"
                target="_blank"><span className="nk-menu-text">Forgot Password</span></a></li>
              <li className="nk-menu-item"><a href="pages/auths/auth-success.html" className="nk-menu-link"
                target="_blank"><span className="nk-menu-text">Success / Confirm</span></a></li>
              <li className="nk-menu-item no-icon"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-text">classNameic Version - v2</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="pages/auths/auth-login-v2.html"
                    className="nk-menu-link" target="_blank"><span className="nk-menu-text">Login /
                      Signin</span></a></li>
                  <li className="nk-menu-item"><a href="pages/auths/auth-register-v2.html"
                    className="nk-menu-link" target="_blank"><span className="nk-menu-text">Register /
                      Signup</span></a></li>
                  <li className="nk-menu-item"><a href="pages/auths/auth-reset-v2.html"
                    className="nk-menu-link" target="_blank"><span className="nk-menu-text">Forgot
                      Password</span></a></li>
                  <li className="nk-menu-item"><a href="pages/auths/auth-success-v2.html"
                    className="nk-menu-link" target="_blank"><span className="nk-menu-text">Success /
                      Confirm</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item no-icon"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-text">No Slider Version - v3</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="pages/auths/auth-login-v3.html"
                    className="nk-menu-link" target="_blank"><span className="nk-menu-text">Login /
                      Signin</span></a></li>
                  <li className="nk-menu-item"><a href="pages/auths/auth-register-v3.html"
                    className="nk-menu-link" target="_blank"><span className="nk-menu-text">Register /
                      Signup</span></a></li>
                  <li className="nk-menu-item"><a href="pages/auths/auth-reset-v3.html"
                    className="nk-menu-link" target="_blank"><span className="nk-menu-text">Forgot
                      Password</span></a></li>
                  <li className="nk-menu-item"><a href="pages/auths/auth-success-v3.html"
                    className="nk-menu-link" target="_blank"><span className="nk-menu-text">Success /
                      Confirm</span></a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="nk-menu-content" data-content="navError">
            <h5 className="title">Error Pages</h5>
            <ul className="nk-menu">
              <li className="nk-menu-item"><a href="pages/errors/404-classNameic.html" target="_blank"
                className="nk-menu-link"><span className="nk-menu-text">404 classNameic</span></a></li>
              <li className="nk-menu-item"><a href="pages/errors/504-classNameic.html" target="_blank"
                className="nk-menu-link"><span className="nk-menu-text">504 classNameic</span></a></li>
              <li className="nk-menu-item"><a href="pages/errors/404-s1.html" target="_blank"
                className="nk-menu-link"><span className="nk-menu-text">404 Modern</span></a></li>
              <li className="nk-menu-item"><a href="pages/errors/504-s1.html" target="_blank"
                className="nk-menu-link"><span className="nk-menu-text">504 Modern</span></a></li>
            </ul>
          </div>
          <div className="nk-menu-content" data-content="navComponents">
            <h5 className="title">Components</h5>
            <ul className="nk-menu">
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-layers-fill"></em></span><span
                  className="nk-menu-text">Ui Elements</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="components.html" className="nk-menu-link"><span
                    className="nk-menu-text">Component List</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/alerts.html"
                    className="nk-menu-link"><span className="nk-menu-text">Alerts</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/accordions.html"
                    className="nk-menu-link"><span className="nk-menu-text">Accordions</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/avatar.html"
                    className="nk-menu-link"><span className="nk-menu-text">Avatar</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/badges.html"
                    className="nk-menu-link"><span className="nk-menu-text">Badges</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/buttons.html"
                    className="nk-menu-link"><span className="nk-menu-text">Buttons</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/buttons-group.html"
                    className="nk-menu-link"><span className="nk-menu-text">Button Group</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/breadcrumb.html"
                    className="nk-menu-link"><span className="nk-menu-text">Breadcrumb</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/cards.html"
                    className="nk-menu-link"><span className="nk-menu-text">Cards</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/carousel.html"
                    className="nk-menu-link"><span className="nk-menu-text">Carousel</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/list-dropdown.html"
                    className="nk-menu-link"><span className="nk-menu-text">List Dropdown</span></a>
                  </li>
                  <li className="nk-menu-item"><a href="components/elements/modals.html"
                    className="nk-menu-link"><span className="nk-menu-text">Modals</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/pagination.html"
                    className="nk-menu-link"><span className="nk-menu-text">Pagination</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/popover.html"
                    className="nk-menu-link"><span className="nk-menu-text">Popovers</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/progress.html"
                    className="nk-menu-link"><span className="nk-menu-text">Progress</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/preloader.html"
                    className="nk-menu-link"><span className="nk-menu-text">Preloader</span> <span
                      className="nk-menu-badge">New</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/placeholders.html"
                    className="nk-menu-link"><span className="nk-menu-text">Placeholders</span> <span
                      className="nk-menu-badge">New</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/spinner.html"
                    className="nk-menu-link"><span className="nk-menu-text">Spinner</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/tabs.html"
                    className="nk-menu-link"><span className="nk-menu-text">Tabs</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/toast.html"
                    className="nk-menu-link"><span className="nk-menu-text">Toasts</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/tooltip.html"
                    className="nk-menu-link"><span className="nk-menu-text">Tooltip</span></a></li>
                  <li className="nk-menu-item"><a href="components/elements/typography.html"
                    className="nk-menu-link"><span className="nk-menu-text">Typography</span></a></li>
                  <li className="nk-menu-item"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                    className="nk-menu-text">Utilities</span></a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item"><a href="components/elements/util-border.html"
                        className="nk-menu-link"><span className="nk-menu-text">Border</span></a>
                      </li>
                      <li className="nk-menu-item"><a href="components/elements/util-colors.html"
                        className="nk-menu-link"><span className="nk-menu-text">Colors</span></a>
                      </li>
                      <li className="nk-menu-item"><a href="components/elements/util-display.html"
                        className="nk-menu-link"><span className="nk-menu-text">Display</span></a>
                      </li>
                      <li className="nk-menu-item"><a href="components/elements/util-embeded.html"
                        className="nk-menu-link"><span className="nk-menu-text">Embeded</span></a>
                      </li>
                      <li className="nk-menu-item"><a href="components/elements/util-flex.html"
                        className="nk-menu-link"><span className="nk-menu-text">Flex</span></a></li>
                      <li className="nk-menu-item"><a href="components/elements/util-text.html"
                        className="nk-menu-link"><span className="nk-menu-text">Text</span></a></li>
                      <li className="nk-menu-item"><a href="components/elements/util-sizing.html"
                        className="nk-menu-link"><span className="nk-menu-text">Sizing</span></a>
                      </li>
                      <li className="nk-menu-item"><a href="components/elements/util-spacing.html"
                        className="nk-menu-link"><span className="nk-menu-text">Spacing</span></a>
                      </li>
                      <li className="nk-menu-item"><a href="components/elements/util-others.html"
                        className="nk-menu-link"><span className="nk-menu-text">Others</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-dot-box-fill"></em></span><span
                  className="nk-menu-text">Crafted Icons</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="components/misc/svg-icons.html"
                    className="nk-menu-link"><span className="nk-menu-text">SVG Icon -
                      Exclusive</span></a></li>
                  <li className="nk-menu-item"><a href="components/misc/nioicon.html"
                    className="nk-menu-link"><span className="nk-menu-text">Nioicon -
                      HandCrafted</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item"><a href="components/misc/icons.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-menu-circled"></em></span><span
                  className="nk-menu-text">Icon Libraries</span></a></li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-table-view-fill"></em></span><span
                  className="nk-menu-text">Tables</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="components/tables/table-basic.html"
                    className="nk-menu-link"><span className="nk-menu-text">Basic Tables</span></a></li>
                  <li className="nk-menu-item"><a href="components/tables/table-special.html"
                    className="nk-menu-link"><span className="nk-menu-text">Special Tables</span></a>
                  </li>
                  <li className="nk-menu-item"><a href="components/tables/table-datatable.html"
                    className="nk-menu-link"><span className="nk-menu-text">DataTables</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-todo-fill"></em></span><span
                  className="nk-menu-text">Forms</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="components/forms/form-elements.html"
                    className="nk-menu-link"><span className="nk-menu-text">Form Elements</span></a>
                  </li>
                  <li className="nk-menu-item"><a href="components/forms/checkbox-radio.html"
                    className="nk-menu-link"><span className="nk-menu-text">Checkbox Radio</span></a>
                  </li>
                  <li className="nk-menu-item"><a href="components/forms/advanced-controls.html"
                    className="nk-menu-link"><span className="nk-menu-text">Advanced Controls</span></a>
                  </li>
                  <li className="nk-menu-item"><a href="components/forms/input-group.html"
                    className="nk-menu-link"><span className="nk-menu-text">Input Group</span></a></li>
                  <li className="nk-menu-item"><a href="components/forms/form-upload.html"
                    className="nk-menu-link"><span className="nk-menu-text">Form Upload</span></a></li>
                  <li className="nk-menu-item"><a href="components/forms/datetime-picker.html"
                    className="nk-menu-link"><span className="nk-menu-text">Date &amp; Time
                      Picker</span></a></li>
                  <li className="nk-menu-item"><a href="components/forms/number-spinner.html"
                    className="nk-menu-link"><span className="nk-menu-text">Number Spinner</span></a>
                  </li>
                  <li className="nk-menu-item"><a href="components/forms/nouislider.html"
                    className="nk-menu-link"><span className="nk-menu-text">noUiSlider</span></a></li>
                  <li className="nk-menu-item"><a href="components/forms/form-layouts.html"
                    className="nk-menu-link"><span className="nk-menu-text">Form Layouts</span></a></li>
                  <li className="nk-menu-item"><a href="components/forms/form-validation.html"
                    className="nk-menu-link"><span className="nk-menu-text">Form Validation</span></a>
                  </li>
                  <li className="nk-menu-item"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                    className="nk-menu-text">Wizard</span></a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item"><a href="components/forms/form-wizard.html"
                        className="nk-menu-link"><span className="nk-menu-text">Basic
                          Demo</span></a></li>
                      <li className="nk-menu-item"><a
                        href="components/forms/wizard/create-project.html"
                        className="nk-menu-link"><span className="nk-menu-text">Create
                          Project</span></a></li>
                      <li className="nk-menu-item"><a
                        href="components/forms/wizard/create-profile.html"
                        className="nk-menu-link"><span className="nk-menu-text">Create
                          Profile</span></a></li>
                      <li className="nk-menu-item"><a
                        href="components/forms/wizard/two-factor-auth.html"
                        className="nk-menu-link"><span className="nk-menu-text">Two Factor
                          Auth</span></a></li>
                      <li className="nk-menu-item"><a target="_blank"
                        href="components/forms/wizard/survey-v1.html"
                        className="nk-menu-link"><span className="nk-menu-text">Survey</span></a>
                      </li>
                      <li className="nk-menu-item"><a target="_blank"
                        href="components/forms/wizard/survey-v2.html"
                        className="nk-menu-link"><span className="nk-menu-text">Survey v2</span></a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                    className="nk-menu-text">Rich Editor</span></a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item"><a href="components/forms/form-summernote.html"
                        className="nk-menu-link"><span
                          className="nk-menu-text">Summernote</span></a></li>
                      <li className="nk-menu-item"><a href="components/forms/form-quill.html"
                        className="nk-menu-link"><span className="nk-menu-text">Quill</span></a>
                      </li>
                      <li className="nk-menu-item"><a href="components/forms/form-tinymce.html"
                        className="nk-menu-link"><span className="nk-menu-text">Tinymce</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-pie-fill"></em></span><span
                  className="nk-menu-text">Charts</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="components/charts/chartjs.html"
                    className="nk-menu-link"><span className="nk-menu-text">Chart JS</span></a></li>
                  <li className="nk-menu-item"><a href="components/charts/knob.html"
                    className="nk-menu-link"><span className="nk-menu-text">Knob JS</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-puzzle"></em></span><span
                  className="nk-menu-text">Widgets</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="components/widgets/cards.html"
                    className="nk-menu-link"><span className="nk-menu-text">Card Widgets</span></a></li>
                  <li className="nk-menu-item"><a href="components/widgets/charts.html"
                    className="nk-menu-link"><span className="nk-menu-text">Chart Widgets</span></a>
                  </li>
                  <li className="nk-menu-item"><a href="components/widgets/ratings.html"
                    className="nk-menu-link"><span className="nk-menu-text">Rating Widgets</span></a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                className="nk-menu-icon"><em className="icon ni ni-block-over"></em></span><span
                  className="nk-menu-text">Miscellaneous</span></a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item"><a href="components/misc/slick-sliders.html"
                    className="nk-menu-link"><span className="nk-menu-text">Slick Slider</span></a></li>
                  <li className="nk-menu-item"><a href="components/misc/toastr.html"
                    className="nk-menu-link"><span className="nk-menu-text">Toastr</span></a></li>
                  <li className="nk-menu-item"><a href="components/misc/sweet-alert.html"
                    className="nk-menu-link"><span className="nk-menu-text">Sweet Alert</span></a></li>
                  <li className="nk-menu-item"><a href="components/misc/js-tree.html"
                    className="nk-menu-link"><span className="nk-menu-text">jsTree</span></a></li>
                  <li className="nk-menu-item"><a href="components/misc/dual-listbox.html"
                    className="nk-menu-link"><span className="nk-menu-text">Dual Listbox</span></a></li>
                  <li className="nk-menu-item"><a href="components/misc/dragula.html"
                    className="nk-menu-link"><span className="nk-menu-text">Dragula</span></a></li>
                  <li className="nk-menu-item"><a href="components/misc/map.html"
                    className="nk-menu-link"><span className="nk-menu-text">Google Map</span></a></li>
                </ul>
              </li>
              <li className="nk-menu-item"><a href="email-templates.html" className="nk-menu-link"><span
                className="nk-menu-icon"><em className="icon ni ni-template-fill"></em></span><span
                  className="nk-menu-text">Email Template</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu