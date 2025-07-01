import React from 'react'
import ProfilOne from './ProfilOne'
import Language from './Language'
import Notifications from './Notifications'
import Homechats from './Homechats'
import Search from './Search'

function Topbar() {
    return (
        <div className="nk-header nk-header-fixed nk-header-fluid">
            <div className="container-fluid">
                <div className="nk-header-wrap">
                    <div className="nk-menu-trigger d-xl-none ms-n1">
                        <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu">
                            <em className="icon ni ni-menu"></em></a>
                    </div>
                    <div className="nk-header-brand d-xl-none">
                        <a href="index.html" className="logo-link">
                            <img className="logo-light logo-img" src={'assets/img/logo.png'} alt="logo" />
                            <img className="logo-dark logo-img" src={'assets/img/logo-dark.png'} alt="logo-dark" /></a>
                    </div>
                    <Search/>
                    <div className="nk-header-tools">
                        <ul className="nk-quick-nav">
                            <li className="nav-item">
                                <a data-bs-toggle="modal" href="#region" className="nk-quick-nav-icon">
                                    <em className="icon ni ni-globe"></em></a>
                            </li>
                            <li className="dropdown chats-dropdown hide-mb-xs">
                                <Homechats/>
                            </li>
                            <li className="dropdown notification-dropdown">
                                <Notifications/>
                            </li>
                            <li className="dropdown language-dropdown d-none d-sm-block me-n1">
                                <Language />
                            </li>
                            <li className="dropdown user-dropdown">
                                <ProfilOne />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar