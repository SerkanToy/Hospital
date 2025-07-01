import React from 'react'

function Language() {
    return (
        <>
            <a href="#" className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                <div className="quick-icon border border-light">
                    <img className="icon" src="assets/img/flags/english-sq.png" alt="" />
                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-s1">
                <ul className="language-list">
                    <li><a href="#" className="language-item"><img
                        src="assets/img/flags/english.png" alt=""
                        className="language-flag" /><span
                            className="language-name">English</span></a></li>
                    <li><a href="#" className="language-item"><img
                        src="assets/img/flags/spanish.png" alt=""
                        className="language-flag" /><span
                            className="language-name">Español</span></a></li>
                    <li><a href="#" className="language-item"><img src="assets/img/flags/french.png"
                        alt="" className="language-flag" /><span
                            className="language-name">Français</span></a></li>
                    <li><a href="#" className="language-item"><img src="assets/img/flags/turkey.png"
                        alt="" className="language-flag" /><span
                            className="language-name">Türkçe</span></a></li>
                </ul>
            </div>
        </>
    )
}

export default Language