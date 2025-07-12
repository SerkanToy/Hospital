import React from 'react'

function ProfilTwo() {
    return (
        <div className="nk-sidebar-profile nk-sidebar-profile-fixed"><a href="#" className="toggle"
            data-target="profileDD">
            <div className="user-avatar"><span>ST</span></div>
        </a>
            <div className="dropdown-menu dropdown-menu-md m-1 nk-sidebar-profile-dropdown"
                data-content="profileDD">
                <div className="dropdown-inner user-card-wrap d-none d-md-block">
                    <div className="user-card">
                        <div className="user-avatar"><span>ST</span></div>
                        <div className="user-info"><span className="lead-text">Serkan TOY</span><span
                            className="sub-text text-soft">info@toy.com</span></div>
                    </div>
                </div>
                <div className="dropdown-inner">
                    <ul className="link-list">
                        <li><a href="user-profile-regular.html"><em
                            className="icon ni ni-user-alt"></em><span>Profil</span></a></li>
                        <li><a href="user-profile-setting.html"><em
                            className="icon ni ni-setting-alt"></em><span>Ayarlar</span></a>
                        </li>
                        <li><a href="user-profile-activity.html"><em
                            className="icon ni ni-activity-alt"></em><span>Login Activity</span></a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown-inner">
                    <ul className="link-list">
                        <li><a href="#"><em className="icon ni ni-signout"></em><span>Çıkış Yap</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfilTwo