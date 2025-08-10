import React from 'react'

function Patients() {
    return (
        <>
            <div className="nk-content ">
                <div className="container-fluid">
                    <div className="nk-content-inner">
                        <div className="nk-content-body">

                            <div className="nk-block-head nk-block-head-sm">
                                <div className="nk-block-between">
                                    <div className="nk-block-head-content">
                                        <h3 className="nk-block-title page-title">Hasta Listesi</h3>
                                        <div className="nk-block-des text-soft">
                                            <p>İşlem Yaptığınız Tüm Hastalar</p>
                                        </div>
                                    </div>
                                    <div className="nk-block-head-content"><a href="patient-add.html"
                                        className="btn btn-icon btn-primary d-md-none"><em
                                            className="icon ni ni-plus"></em></a><a href="patient-add.html"
                                                className="btn btn-primary d-none d-md-inline-flex"><em
                                                    className="icon ni ni-plus"></em><span>Hasta Ekle</span></a></div>
                                </div>
                            </div>
                            
                            <div className="nk-block">
                                <div className="card card-bordered card-stretch">
                                    <div className="card-inner-group">
                                        <div className="card-inner position-relative card-tools-toggle">
                                            <div className="card-title-group">
                                                <div className="card-tools">
                                                    <div className="form-inline flex-nowrap gx-3">
                                                        <div className="form-wrap w-150px"><select
                                                            className="form-select js-select2" data-search="off"
                                                            data-placeholder="Bulk Action">
                                                            <option value="">Bulk Action</option>
                                                            <option value="email">Send Email</option>
                                                            <option value="discharged">Discharged</option>
                                                            <option value="delete">Delete</option>
                                                        </select></div>
                                                        <div className="btn-wrap"><span
                                                            className="d-none d-md-block"><button
                                                                className="btn btn-dim btn-outline-light disabled">Apply</button></span><span
                                                                    className="d-md-none"><button
                                                                        className="btn btn-dim btn-outline-light btn-icon disabled"><em
                                                                            className="icon ni ni-arrow-right"></em></button></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-tools me-n1">
                                                    <ul className="btn-toolbar gx-1">
                                                        <li><a href="#"
                                                            className="btn btn-icon search-toggle toggle-search"
                                                            data-target="search"><em
                                                                className="icon ni ni-search"></em></a></li>
                                                        <li className="btn-toolbar-sep"></li>
                                                        <li>
                                                            <div className="toggle-wrap"><a href="#"
                                                                className="btn btn-icon btn-trigger toggle"
                                                                data-target="cardTools"><em
                                                                    className="icon ni ni-menu-right"></em></a>
                                                                <div className="toggle-content"
                                                                    data-content="cardTools">
                                                                    <ul className="btn-toolbar gx-1">
                                                                        <li className="toggle-close"><a href="#"
                                                                            className="btn btn-icon btn-trigger toggle"
                                                                            data-target="cardTools"><em
                                                                                className="icon ni ni-arrow-left"></em></a>
                                                                        </li>
                                                                        <li>
                                                                            <div className="dropdown"><a href="#"
                                                                                className="btn btn-trigger btn-icon dropdown-toggle"
                                                                                data-bs-toggle="dropdown">
                                                                                <div className="dot dot-primary">
                                                                                </div><em
                                                                                    className="icon ni ni-filter-alt"></em>
                                                                            </a>
                                                                                <div
                                                                                    className="filter-wg dropdown-menu dropdown-menu-xl dropdown-menu-end">
                                                                                    <div className="dropdown-head"><span
                                                                                        className="sub-title dropdown-title">Filter
                                                                                        Patient</span>
                                                                                        <div className="dropdown"><a
                                                                                            href="#"
                                                                                            className="btn btn-sm btn-icon"><em
                                                                                                className="icon ni ni-more-h"></em></a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="dropdown-body dropdown-body-rg">
                                                                                        <div className="row gx-6 gy-3">
                                                                                            <div className="col-6">
                                                                                                <div
                                                                                                    className="form-group">
                                                                                                    <label
                                                                                                        className="overline-title overline-title-alt">Bed</label><select
                                                                                                            className="form-select js-select2">
                                                                                                        <option
                                                                                                            value="any">
                                                                                                            Any Bed
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="cabin">
                                                                                                            Cabin
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="mward">
                                                                                                            Male
                                                                                                            Ward
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="fward">
                                                                                                            Male
                                                                                                            Ward
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="vip">
                                                                                                            VIP
                                                                                                            Cabin
                                                                                                        </option>
                                                                                                    </select></div>
                                                                                            </div>
                                                                                            <div className="col-6">
                                                                                                <div
                                                                                                    className="form-group">
                                                                                                    <label
                                                                                                        className="overline-title overline-title-alt">Consulant</label><select
                                                                                                            className="form-select js-select2">
                                                                                                        <option
                                                                                                            value="any">
                                                                                                            Any
                                                                                                            Consulant
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="ev">
                                                                                                            Ernesto
                                                                                                            Vargas
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="ve">
                                                                                                            Vargas
                                                                                                            Ernesto
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="ti">
                                                                                                            Tasmin
                                                                                                            Ifrat
                                                                                                        </option>
                                                                                                    </select></div>
                                                                                            </div>
                                                                                            <div className="col-12">
                                                                                                <div
                                                                                                    className="form-group">
                                                                                                    <label
                                                                                                        className="overline-title overline-title-alt">Admit
                                                                                                        Date</label>
                                                                                                    <div
                                                                                                        className="form-control-wrap">
                                                                                                        <div
                                                                                                            className="form-icon form-icon-right">
                                                                                                            <em
                                                                                                                className="icon ni ni-calendar"></em>
                                                                                                        </div><input
                                                                                                            type="text"
                                                                                                            className="form-control date-picker"
                                                                                                            data-date-format="dd-mm-yyyy"
                                                                                                            placeholder="dd-mm-yyyy" />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-12">
                                                                                                <div
                                                                                                    className="form-group">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn btn-secondary">Filter</button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="dropdown-foot between">
                                                                                        <a className="clickable"
                                                                                            href="#">Reset
                                                                                            Filter</a><a
                                                                                                href="#">Save Filter</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="dropdown"><a href="#"
                                                                                className="btn btn-trigger btn-icon dropdown-toggle"
                                                                                data-bs-toggle="dropdown"><em
                                                                                    className="icon ni ni-setting"></em></a>
                                                                                <div
                                                                                    className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                                                                    <ul className="link-check">
                                                                                        <li><span>Show</span></li>
                                                                                        <li className="active"><a
                                                                                            href="#">10</a></li>
                                                                                        <li><a href="#">20</a></li>
                                                                                        <li><a href="#">50</a></li>
                                                                                    </ul>
                                                                                    <ul className="link-check">
                                                                                        <li><span>Order</span></li>
                                                                                        <li className="active"><a
                                                                                            href="#">DESC</a>
                                                                                        </li>
                                                                                        <li><a href="#">ASC</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-search search-wrap" data-search="search">
                                                <div className="card-body">
                                                    <div className="search-content"><a href="#"
                                                        className="search-back btn btn-icon toggle-search"
                                                        data-target="search"><em
                                                            className="icon ni ni-arrow-left"></em></a><input
                                                            type="text"
                                                            className="form-control border-transparent form-focus-none"
                                                            placeholder="Search by name or patient id" /><button
                                                                className="search-submit btn btn-icon"><em
                                                                    className="icon ni ni-search"></em></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-inner p-0">
                                            <div className="nk-tb-list nk-tb-ulist">
                                                <div className="nk-tb-item nk-tb-head">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="uid" /><label className="custom-control-label" htmlFor="uid"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><span className="sub-text">Patient</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-sm"><span
                                                        className="sub-text">ID</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span
                                                        className="sub-text">Phone</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                        className="sub-text">Gender</span></div>
                                                    <div className="nk-tb-col tb-col-mb"><span
                                                        className="sub-text">Report</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span
                                                        className="sub-text">Consulant</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span className="sub-text">Admit
                                                        Date</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span
                                                        className="sub-text">Bed</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span
                                                        className="sub-text">Charges</span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1 my-n1">
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                    className="dropdown-toggle btn btn-icon btn-trigger me-n1"
                                                                    data-bs-toggle="dropdown"><em
                                                                        className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                className="icon ni ni-mail"></em><span>Send
                                                                                    Email to All</span></a></li>
                                                                            <li><a href="#"><em
                                                                                className="icon ni ni-edit"></em><span>Edit
                                                                                    Selected</span></a></li>
                                                                            <li><a href="#"><em
                                                                                className="icon ni ni-trash"></em><span>Remove
                                                                                    Seleted</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="uid1" /><label className="custom-control-label"
                                                                    htmlFor="uid1"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="patient-profile.html">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-primary"><span>AB</span>
                                                            </div>
                                                            <div className="user-info"><span className="tb-lead">Abu Bin
                                                                Ishtiyak</span><span>info@softnio.com</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><a href="#"><span
                                                        className="fw-medium">#P6985</span></a></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>+811 847-4958</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg"><span>Male</span></div>
                                                    <div className="nk-tb-col tb-col-mb">
                                                        <ul className="list-inline list-download">
                                                            <li>Reports<a href="#" className="popup"><em
                                                                className="icon ni ni-download"></em></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-lead">Ernesto
                                                        Vargas</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>10/02/2020</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>201-Cabin-3rd
                                                        Floor</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-amount">350.99
                                                        <span className="currency">USD</span></span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Send Email"><em
                                                                    className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Move To Discharged"><em
                                                                    className="icon ni ni-curve-up-right"></em></a>
                                                            </li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                    className="dropdown-toggle btn btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="patient-profile.html"><em
                                                                                className="icon ni ni-eye"></em><span>View
                                                                                    Details</span></a></li>
                                                                            <li><a data-bs-toggle="modal"
                                                                                href="#editInPatient"><em
                                                                                    className="icon ni ni-edit"></em><span>Edit</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="uid2" /><label className="custom-control-label"
                                                                    htmlFor="uid2"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="patient-profile.html">
                                                        <div className="user-card">
                                                            <div className="user-avatar"><img
                                                                src="../images/avatar/a-sm.jpg" alt="" />
                                                            </div>
                                                            <div className="user-info"><span className="tb-lead">Ashley
                                                                Lawson</span><span>ashley@softnio.com</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><a href="#"><span
                                                        className="fw-medium">#P6986</span></a></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>+124 394-1787</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg"><span>Male</span></div>
                                                    <div className="nk-tb-col tb-col-mb">
                                                        <ul className="list-inline list-download">
                                                            <li>Reports<a href="#" className="popup"><em
                                                                className="icon ni ni-download"></em></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-lead">Janet
                                                        Snyder</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>07/02/2020</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>102-Mward-2nd
                                                        Floor</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-amount">80.99
                                                        <span className="currency">USD</span></span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Send Email"><em
                                                                    className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Move To Discharged"><em
                                                                    className="icon ni ni-curve-up-right"></em></a>
                                                            </li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                    className="dropdown-toggle btn btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="patient-profile.html"><em
                                                                                className="icon ni ni-eye"></em><span>View
                                                                                    Details</span></a></li>
                                                                            <li><a data-bs-toggle="modal"
                                                                                href="#editInPatient"><em
                                                                                    className="icon ni ni-edit"></em><span>Edit</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="uid3" /><label className="custom-control-label"
                                                                    htmlFor="uid3"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="patient-profile.html">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-info"><span>JL</span>
                                                            </div>
                                                            <div className="user-info"><span className="tb-lead">Joe
                                                                Larson</span><span>larson@example.com</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><a href="#"><span
                                                        className="fw-medium">#P6987</span></a></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>+168 603-2320</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg"><span>Female</span></div>
                                                    <div className="nk-tb-col tb-col-mb">
                                                        <ul className="list-inline list-download">
                                                            <li>Reports<a href="#" className="popup"><em
                                                                className="icon ni ni-download"></em></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-lead">Amelia
                                                        Grant</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>04/02/2020</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>103-Fward-2nd
                                                        Floor</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-amount">85.00
                                                        <span className="currency">USD</span></span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Send Email"><em
                                                                    className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Move To Discharged"><em
                                                                    className="icon ni ni-curve-up-right"></em></a>
                                                            </li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                    className="dropdown-toggle btn btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="patient-profile.html"><em
                                                                                className="icon ni ni-eye"></em><span>View
                                                                                    Details</span></a></li>
                                                                            <li><a data-bs-toggle="modal"
                                                                                href="#editInPatient"><em
                                                                                    className="icon ni ni-edit"></em><span>Edit</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="uid4" /><label className="custom-control-label"
                                                                    htmlFor="uid4"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="patient-profile.html">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-danger"><span>JM</span>
                                                            </div>
                                                            <div className="user-info"><span className="tb-lead">Jane
                                                                Montgomery</span><span>jane84@example.com</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><a href="#"><span
                                                        className="fw-medium">#P6988</span></a></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>+439 271-5360</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg"><span>Female</span></div>
                                                    <div className="nk-tb-col tb-col-mb">
                                                        <ul className="list-inline list-download">
                                                            <li>Reports<a href="#" className="popup"><em
                                                                className="icon ni ni-download"></em></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-lead">Amelia
                                                        Grant</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>04/03/2020</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>403-Cabin-4th
                                                        Floor</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-amount">685.50
                                                        <span className="currency">USD</span></span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Send Email"><em
                                                                    className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Move To Discharged"><em
                                                                    className="icon ni ni-curve-up-right"></em></a>
                                                            </li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                    className="dropdown-toggle btn btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="patient-profile.html"><em
                                                                                className="icon ni ni-eye"></em><span>View
                                                                                    Details</span></a></li>
                                                                            <li><a data-bs-toggle="modal"
                                                                                href="#editInPatient"><em
                                                                                    className="icon ni ni-edit"></em><span>Edit</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="uid5" /><label className="custom-control-label"
                                                                    htmlFor="uid5"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="patient-profile.html">
                                                        <div className="user-card">
                                                            <div className="user-avatar"><img
                                                                src="../images/avatar/b-sm.jpg" alt="" />
                                                            </div>
                                                            <div className="user-info"><span className="tb-lead">Frances
                                                                Burns</span><span>frances@example.com</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><a href="#"><span
                                                        className="fw-medium">#P6989</span></a></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>+639 130-3150</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg"><span>Male</span></div>
                                                    <div className="nk-tb-col tb-col-mb">
                                                        <ul className="list-inline list-download">
                                                            <li>Reports<a href="#" className="popup"><em
                                                                className="icon ni ni-download"></em></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-lead">Ernesto
                                                        Vargas</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>02/03/2020</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>402-Cabin-4th
                                                        Floor</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-amount">585.50
                                                        <span className="currency">USD</span></span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Send Email"><em
                                                                    className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Move To Discharged"><em
                                                                    className="icon ni ni-curve-up-right"></em></a>
                                                            </li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                    className="dropdown-toggle btn btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="patient-profile.html"><em
                                                                                className="icon ni ni-eye"></em><span>View
                                                                                    Details</span></a></li>
                                                                            <li><a data-bs-toggle="modal"
                                                                                href="#editInPatient"><em
                                                                                    className="icon ni ni-edit"></em><span>Edit</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="uid6" /><label className="custom-control-label"
                                                                    htmlFor="uid6"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="patient-profile.html">
                                                        <div className="user-card">
                                                            <div className="user-avatar"><img
                                                                src="../images/avatar/c-sm.jpg" alt="" />
                                                            </div>
                                                            <div className="user-info"><span className="tb-lead">Alan
                                                                Butler</span><span>butler@example.com</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><a href="#"><span
                                                        className="fw-medium">#P6990</span></a></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>+963 309-1706</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg"><span>Female</span></div>
                                                    <div className="nk-tb-col tb-col-mb">
                                                        <ul className="list-inline list-download">
                                                            <li>Reports<a href="#" className="popup"><em
                                                                className="icon ni ni-download"></em></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-lead">Janet
                                                        Snyder</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>01/03/2020</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>102-Fward-4th
                                                        Floor</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-amount">185.05
                                                        <span className="currency">USD</span></span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Send Email"><em
                                                                    className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Move To Discharged"><em
                                                                    className="icon ni ni-curve-up-right"></em></a>
                                                            </li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                    className="dropdown-toggle btn btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="patient-profile.html"><em
                                                                                className="icon ni ni-eye"></em><span>View
                                                                                    Details</span></a></li>
                                                                            <li><a data-bs-toggle="modal"
                                                                                href="#editInPatient"><em
                                                                                    className="icon ni ni-edit"></em><span>Edit</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="uid7" /><label className="custom-control-label"
                                                                    htmlFor="uid7"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="patient-profile.html">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-warning"><span>VL</span>
                                                            </div>
                                                            <div className="user-info"><span
                                                                className="tb-lead">Victoria
                                                                Lynch</span><span>victoria@example.com</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><a href="#"><span
                                                        className="fw-medium">#P6991</span></a></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>+811 985-4846</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg"><span>Female</span></div>
                                                    <div className="nk-tb-col tb-col-mb">
                                                        <ul className="list-inline list-download">
                                                            <li>Reports<a href="#" className="popup"><em
                                                                className="icon ni ni-download"></em></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-lead">Amelia
                                                        Grant</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>01/02/2020</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>101-Fward-3rd
                                                        Floor</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-amount">385.59
                                                        <span className="currency">USD</span></span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Send Email"><em
                                                                    className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Move To Discharged"><em
                                                                    className="icon ni ni-curve-up-right"></em></a>
                                                            </li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                    className="dropdown-toggle btn btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="patient-profile.html"><em
                                                                                className="icon ni ni-eye"></em><span>View
                                                                                    Details</span></a></li>
                                                                            <li><a data-bs-toggle="modal"
                                                                                href="#editInPatient"><em
                                                                                    className="icon ni ni-edit"></em><span>Edit</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="uid8" /><label className="custom-control-label"
                                                                    htmlFor="uid8"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="patient-profile.html">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-success"><span>PN</span>
                                                            </div>
                                                            <div className="user-info"><span className="tb-lead">Patrick
                                                                Newman</span><span>patrick@example.com</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><a href="#"><span
                                                        className="fw-medium">#P6992</span></a></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>+942 238-4474</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg"><span>Male</span></div>
                                                    <div className="nk-tb-col tb-col-mb">
                                                        <ul className="list-inline list-download">
                                                            <li>Reports<a href="#" className="popup"><em
                                                                className="icon ni ni-download"></em></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-lead">Debra
                                                        Grant</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>01/02/2020</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>501-Mward-5th
                                                        Floor</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-amount">201.99
                                                        <span className="currency">USD</span></span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Send Email"><em
                                                                    className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Move To Discharged"><em
                                                                    className="icon ni ni-curve-up-right"></em></a>
                                                            </li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                    className="dropdown-toggle btn btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="patient-profile.html"><em
                                                                                className="icon ni ni-eye"></em><span>View
                                                                                    Details</span></a></li>
                                                                            <li><a data-bs-toggle="modal"
                                                                                href="#editInPatient"><em
                                                                                    className="icon ni ni-edit"></em><span>Edit</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="uid9" /><label className="custom-control-label"
                                                                    htmlFor="uid9"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="patient-profile.html">
                                                        <div className="user-card">
                                                            <div className="user-avatar"><img
                                                                src="../images/avatar/d-sm.jpg" alt="" />
                                                            </div>
                                                            <div className="user-info"><span className="tb-lead">Jane
                                                                Harris</span><span>harris@example.com</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><a href="#"><span
                                                        className="fw-medium">#P6993</span></a></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>+123 447-2384</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg"><span>Female</span></div>
                                                    <div className="nk-tb-col tb-col-mb">
                                                        <ul className="list-inline list-download">
                                                            <li>Reports<a href="#" className="popup"><em
                                                                className="icon ni ni-download"></em></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-lead">Snyder
                                                        Debra</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>01/02/2020</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>502-Fward-5th
                                                        Floor</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-amount">185.95
                                                        <span className="currency">USD</span></span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Send Email"><em
                                                                    className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Move To Discharged"><em
                                                                    className="icon ni ni-curve-up-right"></em></a>
                                                            </li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                    className="dropdown-toggle btn btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="patient-profile.html"><em
                                                                                className="icon ni ni-eye"></em><span>View
                                                                                    Details</span></a></li>
                                                                            <li><a data-bs-toggle="modal"
                                                                                href="#editInPatient"><em
                                                                                    className="icon ni ni-edit"></em><span>Edit</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="uid10" /><label className="custom-control-label"
                                                                    htmlFor="uid10"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="patient-profile.html">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-purple"><span>EW</span>
                                                            </div>
                                                            <div className="user-info"><span className="tb-lead">Emma
                                                                Walker</span><span>walker@example.com</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><a href="#"><span
                                                        className="fw-medium">#P6994</span></a></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>+463 471-7173</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg"><span>Female</span></div>
                                                    <div className="nk-tb-col tb-col-mb">
                                                        <ul className="list-inline list-download">
                                                            <li>Reports<a href="#" className="popup"><em
                                                                className="icon ni ni-download"></em></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-lead">Ernesto
                                                        Vargas</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>10/03/2020</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span>505-Fward-5th
                                                        Floor</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="tb-amount">352.55
                                                        <span className="currency">USD</span></span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Send Email"><em
                                                                    className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                className="btn btn-trigger btn-icon"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Move To Discharged"><em
                                                                    className="icon ni ni-curve-up-right"></em></a>
                                                            </li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                    className="dropdown-toggle btn btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="patient-profile.html"><em
                                                                                className="icon ni ni-eye"></em><span>View
                                                                                    Details</span></a></li>
                                                                            <li><a data-bs-toggle="modal"
                                                                                href="#editInPatient"><em
                                                                                    className="icon ni ni-edit"></em><span>Edit</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-inner">
                                            <div className="nk-block-between-md g-3">
                                                <div className="g">
                                                    <ul
                                                        className="pagination justify-content-center justify-content-md-start">
                                                        <li className="page-item"><a className="page-link" href="#">Prev</a>
                                                        </li>
                                                        <li className="page-item"><a className="page-link" href="#">1</a>
                                                        </li>
                                                        <li className="page-item"><a className="page-link" href="#">2</a>
                                                        </li>
                                                        <li className="page-item"><span className="page-link"><em
                                                            className="icon ni ni-more-h"></em></span></li>
                                                        <li className="page-item"><a className="page-link" href="#">6</a>
                                                        </li>
                                                        <li className="page-item"><a className="page-link" href="#">7</a>
                                                        </li>
                                                        <li className="page-item"><a className="page-link" href="#">Next</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="g">
                                                    <div
                                                        className="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                                                        <div>Page</div>
                                                        <div><select className="form-select js-select2" data-search="on"
                                                            data-dropdown="xs center">
                                                            <option value="page-1">1</option>
                                                            <option value="page-2">2</option>
                                                            <option value="page-4">4</option>
                                                            <option value="page-5">5</option>
                                                            <option value="page-6">6</option>
                                                            <option value="page-7">7</option>
                                                            <option value="page-8">8</option>
                                                            <option value="page-9">9</option>
                                                            <option value="page-10">10</option>
                                                            <option value="page-11">11</option>
                                                            <option value="page-12">12</option>
                                                            <option value="page-13">13</option>
                                                            <option value="page-14">14</option>
                                                            <option value="page-15">15</option>
                                                            <option value="page-16">16</option>
                                                            <option value="page-17">17</option>
                                                            <option value="page-18">18</option>
                                                            <option value="page-19">19</option>
                                                            <option value="page-20">20</option>
                                                        </select></div>
                                                        <div>OF 102</div>
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

            <div className="modal fade" tabIndex={-1} role="dialog" id="editInPatient">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <a href="#" className="close" data-bs-dismiss="modal">
                            <em className="icon ni ni-cross-sm" />
                        </a>
                        <div className="modal-body modal-body-md">
                            <h5 className="modal-title">Update In Patient</h5>
                            <form action="#" className="mt-4">
                                <div className="row g-gs">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="editName">
                                                Name
                                            </label>
                                            <div className="form-control-wrap">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="editName"
                                                    defaultValue="Abu Bin Isthiyak"
                                                    placeholder="Name"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="editEmail">
                                                Email
                                            </label>
                                            <div className="form-control-wrap">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="editEmail"
                                                    defaultValue="info@softnio.com"
                                                    placeholder="example@email.com"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="editMobile">
                                                Mobile Number
                                            </label>
                                            <div className="form-control-wrap">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="editMobile"
                                                    placeholder="Mobile No."
                                                    defaultValue="+811 847-4958"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Gender</label>
                                            <div className="form-control-wrap">
                                                <select
                                                    className="form-select js-select2"
                                                    data-placeholder="Select Gender"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="option_select_sex">Male</option>
                                                    <option value="option_select_sex">Female</option>
                                                    <option value="option_select_sex">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Bed Group</label>
                                            <div className="form-control-wrap">
                                                <select
                                                    className="form-select js-select2"
                                                    data-placeholder="Select Bed Group"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="option_select_bed">Cabin - 4th Floor</option>
                                                    <option value="option_select_bed">
                                                        Male Ward - 1st Floor
                                                    </option>
                                                    <option value="option_select_bed">
                                                        Female Ward - 1st Floor
                                                    </option>
                                                    <option value="option_select_bed">
                                                        Private Ward - 2nd Floor
                                                    </option>
                                                    <option value="option_select_bed">Cabin - 4th Floor</option>
                                                    <option value="option_select_bed">ICU - 3rd Floor</option>
                                                    <option value="option_select_bed">NICU - 3rd Floor</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Bed Number</label>
                                            <div className="form-control-wrap">
                                                <select
                                                    className="form-select js-select2"
                                                    data-placeholder="Select multiple options"
                                                >
                                                    <option value="default_option">201</option>
                                                    <option value="option_select_bednum">101</option>
                                                    <option value="option_select_bednum">102</option>
                                                    <option value="option_select_bednum">103</option>
                                                    <option value="option_select_bednum">105</option>
                                                    <option value="option_select_bednum">201</option>
                                                    <option value="option_select_bednum">202</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Consulant By</label>
                                            <div className="form-control-wrap">
                                                <select
                                                    className="form-select js-select2"
                                                    data-placeholder="Select multiple options"
                                                >
                                                    <option value="default_option">Ernesto Vargas</option>
                                                    <option value="option_select_consulant">
                                                        Ernesto Vargas
                                                    </option>
                                                    <option value="option_select_consulant">
                                                        Janet Snyder
                                                    </option>
                                                    <option value="option_select_consulant">
                                                        Amelia Grant
                                                    </option>
                                                    <option value="option_select_consulant">Debra Grant</option>
                                                    <option value="option_select_consulant">
                                                        Snyder Debra
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="testLabel">
                                                Test Reports
                                            </label>
                                            <div className="form-control-wrap">
                                                <div className="form-file">
                                                    <input
                                                        type="file"
                                                        multiple={true}
                                                        className="form-file-input"
                                                        id="testReport"
                                                    />
                                                    <label className="form-file-label" htmlFor="testReport">
                                                        Choose files
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Admit Date</label>
                                            <div className="form-control-wrap">
                                                <div className="form-icon form-icon-right">
                                                    <em className="icon ni ni-calendar" />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control date-picker"
                                                    data-date-format="dd-mm-yyyy"
                                                    placeholder="dd-mm-yyyy"
                                                    defaultValue="10-02-2020"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                                            <li>
                                                <button data-bs-dismiss="modal" className="btn btn-primary">
                                                    Update
                                                </button>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="link link-light"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Cancel
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Patients