import React from 'react'
import doctorModel from '../DTOs/doctorModel';

function Doctorcomponent(props: { doctor: doctorModel, index:any }) {

    const { doctor, index } = props;

    return (
        <div className="nk-tb-item" key={index}>
            <div className="nk-tb-col nk-tb-col-check">
                <div
                    className="custom-control custom-control-sm custom-checkbox notext">
                    <input type="checkbox" className="custom-control-input"
                        id={index} /><label className="custom-control-label"
                            htmlFor={index} ></label></div>
            </div>
            <div className="nk-tb-col">
                <div className="user-card">
                    <div className="user-avatar xs bg-primary"><span>{doctor.name.substring(0, 1)}{doctor.surName.substring(0, 1)}</span>
                    </div>
                    <div className="user-name">
                        <span className="tb-lead">
                            {doctor.name} {doctor.surName}
                        </span>
                    </div>
                </div>
            </div>
            <div className="nk-tb-col tb-col-sm">
                <span>{doctor.email}</span>
            </div>
            <div className="nk-tb-col tb-col-md"><span>{doctor.phoneNumber}</span>
            </div>
            <div className="nk-tb-col tb-col-xxl"><span>Bangladesh</span></div>
            <div className="nk-tb-col tb-col-lg">
                <ul className="list-status">
                    {
                        doctor.emailConfirmed ?
                            <li>
                                <em className="icon text-success ni ni-check-circle"></em>
                                <span>E-Posta</span>
                            </li>
                            :
                            <li>
                                <em className="icon text-danger ni ni-cross-circle"></em>
                                <span>E-Posta</span>
                            </li>
                    }

                </ul>
            </div>
            <div className="nk-tb-col tb-col-xxl"><span>10 Feb 2020</span></div>
            <div className="nk-tb-col"><span
                className="tb-status text-success">Active</span></div>
            <div className="nk-tb-col nk-tb-col-tools">
                <ul className="nk-tb-actions gx-2">
                    <li className="nk-tb-action-hidden"><a href="#"
                        className="btn btn-sm btn-icon btn-trigger"
                        data-bs-toggle="tooltip" data-bs-placement="top"
                        title="Wallet"><em
                            className="icon ni ni-wallet-fill"></em></a>
                    </li>
                    <li className="nk-tb-action-hidden"><a href="#"
                        className="btn btn-sm btn-icon btn-trigger"
                        data-bs-toggle="tooltip" data-bs-placement="top"
                        title="Send Email"><em
                            className="icon ni ni-mail-fill"></em></a></li>
                    <li className="nk-tb-action-hidden"><a href="#"
                        className="btn btn-sm btn-icon btn-trigger"
                        data-bs-toggle="tooltip" data-bs-placement="top"
                        title="Suspend"><em
                            className="icon ni ni-user-cross-fill"></em></a>
                    </li>
                    <li>
                        <div className="drodown"><a href="#"
                            className="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                            data-bs-toggle="dropdown"><em
                                className="icon ni ni-more-h"></em></a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <ul className="link-list-opt no-bdr">
                                    <li>
                                        <a href={`/doctorsdetail/${doctor.id}`}>
                                            <em className="icon ni ni-eye"></em>
                                            <span>Detay</span>
                                        </a>
                                    </li>
                                    <li><a href="#"><em
                                        className="icon ni ni-repeat"></em><span>Orders</span></a>
                                    </li>
                                    <li className="divider"></li>
                                    <li><a href="#"><em
                                        className="icon ni ni-shield-star"></em><span>Reset
                                            Pass</span></a></li>
                                    <li>
                                        <a href="#">
                                            <em className="icon ni ni-shield-off"></em>
                                            <span>Reset 2FA</span>
                                        </a>
                                    </li>
                                    <li><a href="#"><em
                                        className="icon ni ni-na"></em><span>Suspend
                                            User</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Doctorcomponent