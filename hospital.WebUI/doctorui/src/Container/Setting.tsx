import React from 'react'

function Setting() {
    return (
        <>
            <ul className="nk-sticky-toolbar">
                <li className="demo-settings"><a className="toggle tipinfo" data-target="settingPanel" href="#"
                    title="Demo Settings"><em className="icon ni ni-setting-alt"></em></a></li>
            </ul>
            <div className="nk-demo-panel toggle-slide toggle-slide-right" data-content="settingPanel" data-toggle-overlay="true"
                data-toggle-body="true" data-toggle-screen="any">
                <div className="nk-demo-head">
                    <h6 className="mb-0">Preview Settings</h6><a className="nk-demo-close toggle btn btn-icon btn-trigger revarse mr-n2"
                        data-target="settingPanel" href="#"><em className="icon ni ni-cross"></em></a>
                </div>
                <div className="nk-opt-panel" data-simplebar>
                    <div className="nk-opt-set">
                        <div className="nk-opt-set-title">Direction Change</div>
                        <div className="nk-opt-list col-2x">
                            <div className="nk-opt-item only-text active" data-key="dir" data-update="ltr"><span
                                className="nk-opt-item-bg"><span className="nk-opt-item-name">LTR Mode</span></span></div>
                            <div className="nk-opt-item only-text" data-key="dir" data-update="rtl"><span
                                className="nk-opt-item-bg"><span className="nk-opt-item-name">RTL Mode</span></span></div>
                        </div>
                    </div>
                    <div className="nk-opt-set">
                        <div className="nk-opt-set-title">Main UI Style</div>
                        <div className="nk-opt-list col-2x">
                            <div className="nk-opt-item only-text active" data-key="style" data-update="ui-default"><span
                                className="nk-opt-item-bg"><span className="nk-opt-item-name">Default</span></span></div>
                            <div className="nk-opt-item only-text" data-key="style" data-update="ui-softy"><span
                                className="nk-opt-item-bg"><span className="nk-opt-item-name">Softy</span></span></div>
                        </div>
                    </div>
                    <div className="nk-opt-set nk-opt-set-aside">
                        <div className="nk-opt-set-title">Sidebar Style</div>
                        <div className="nk-opt-list col-4x">
                            <div className="nk-opt-item" data-key="aside" data-update="is-light"><span
                                className="nk-opt-item-bg is-light"><span className="bg-lighter"></span></span><span
                                    className="nk-opt-item-name">White</span></div>
                            <div className="nk-opt-item" data-key="aside" data-update="is-default"><span
                                className="nk-opt-item-bg is-light"><span className="bg-light"></span></span><span
                                    className="nk-opt-item-name">Light</span></div>
                            <div className="nk-opt-item active" data-key="aside" data-update="is-dark"><span
                                className="nk-opt-item-bg"><span className="bg-dark"></span></span><span
                                    className="nk-opt-item-name">Dark</span></div>
                            <div className="nk-opt-item" data-key="aside" data-update="is-theme"><span className="nk-opt-item-bg"><span
                                className="bg-theme"></span></span><span className="nk-opt-item-name">Theme</span></div>
                        </div>
                    </div>
                    <div className="nk-opt-set nk-opt-set-aside-nav">
                        <div className="nk-opt-set-title">Nav Sidebar Style</div>
                        <div className="nk-opt-list col-4x">
                            <div className="nk-opt-item" data-key="navside" data-update="is-light"><span
                                className="nk-opt-item-bg is-light"><span className="bg-lighter"></span></span><span
                                    className="nk-opt-item-name">White</span></div>
                            <div className="nk-opt-item" data-key="navside" data-update="is-default"><span
                                className="nk-opt-item-bg is-light"><span className="bg-light"></span></span><span
                                    className="nk-opt-item-name">Light</span></div>
                            <div className="nk-opt-item active" data-key="navside" data-update="is-dark"><span
                                className="nk-opt-item-bg"><span className="bg-dark"></span></span><span
                                    className="nk-opt-item-name">Dark</span></div>
                            <div className="nk-opt-item" data-key="navside" data-update="is-theme"><span
                                className="nk-opt-item-bg"><span className="bg-theme"></span></span><span
                                    className="nk-opt-item-name">Theme</span></div>
                        </div>
                    </div>
                    <div className="nk-opt-set nk-opt-set-skin">
                        <div className="nk-opt-set-title">Primary Skin</div>
                        <div className="nk-opt-list">
                            <div className="nk-opt-item active" data-key="skin" data-update="default"><span
                                className="nk-opt-item-bg"><span className="skin-default"></span></span><span
                                    className="nk-opt-item-name">Default</span></div>
                            <div className="nk-opt-item" data-key="skin" data-update="bluelite"><span className="nk-opt-item-bg"><span
                                className="skin-bluelite"></span></span><span className="nk-opt-item-name">Blue Light</span>
                            </div>
                            <div className="nk-opt-item" data-key="skin" data-update="egyptian"><span className="nk-opt-item-bg"><span
                                className="skin-egyptian"></span></span><span className="nk-opt-item-name">Egyptian</span></div>
                            <div className="nk-opt-item" data-key="skin" data-update="purple"><span className="nk-opt-item-bg"><span
                                className="skin-purple"></span></span><span className="nk-opt-item-name">Purple</span></div>
                            <div className="nk-opt-item" data-key="skin" data-update="blue"><span className="nk-opt-item-bg"><span
                                className="skin-blue"></span></span><span className="nk-opt-item-name">Blue</span></div>
                            <div className="nk-opt-item" data-key="skin" data-update="red"><span className="nk-opt-item-bg"><span
                                className="skin-red"></span></span><span className="nk-opt-item-name">Red</span></div>
                        </div>
                    </div>
                    <div className="nk-opt-set">
                        <div className="nk-opt-set-title">Skin Mode</div>
                        <div className="nk-opt-list col-2x">
                            <div className="nk-opt-item active" data-key="mode" data-update="light-mode"><span
                                className="nk-opt-item-bg is-light"><span className="theme-light"></span></span><span
                                    className="nk-opt-item-name">Light Skin</span></div>
                            <div className="nk-opt-item" data-key="mode" data-update="dark-mode"><span className="nk-opt-item-bg"><span
                                className="theme-dark"></span></span><span className="nk-opt-item-name">Dark Skin</span></div>
                        </div>
                    </div>
                    <div className="nk-opt-reset"><a href="#" className="reset-opt-setting">Reset Setting</a></div>
                </div>
            </div>
        </>
    )
}

export default Setting