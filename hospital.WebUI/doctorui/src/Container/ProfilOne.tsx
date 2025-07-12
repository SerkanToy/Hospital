import React from 'react'

function ProfilOne() {
    return (
        <>
            <a href="#" className="dropdown-toggle me-n1" data-bs-toggle="dropdown">
                <div className="user-toggle">
                    <div className="user-avatar sm"><em className="icon ni ni-user-alt"></em></div>
                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-md dropdown-menu-end">
                <div className="dropdown-inner user-card-wrap bg-lighter">
                    <div className="user-card">
                        <div className="user-avatar"><span>ST</span></div>
                        <div className="user-info"><span className="lead-text">Serkan TOY</span><span
                            className="sub-text">info@toy.com</span></div>
                    </div>
                </div>
                <div className="dropdown-inner">
                    <ul className="link-list">
                        <li>
                            <a href="user-profile-regular.html">
                                <em className="icon ni ni-user-alt"></em>
                                <span>Profil</span>
                            </a>
                        </li>
                        <li>
                            <a href="user-profile-setting.html">
                                <em className="icon ni ni-setting-alt"></em>
                                <span>Ayarlar</span>
                            </a>
                        </li>
                        <li>
                            <a href="user-profile-activity.html">
                                <em className="icon ni ni-activity-alt"></em>
                                <span>Login Activity</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown-inner">
                    <ul className="link-list">
                        <li>
                            <a href="#">
                                <em className="icon ni ni-signout"></em>
                                <span>Çıkış Yap</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProfilOne