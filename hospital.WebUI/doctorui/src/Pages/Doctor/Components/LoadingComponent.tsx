import React from 'react'

function LoadingComponent() {
    return (
        <div className="nk-tb-item" style={{ paddingBottom: 5, paddingTop: 5 }}>
            <div className="nk-tb-col nk-tb-col-check"></div>
            <div className="nk-tb-col"> </div>
            <div className="nk-tb-col tb-col-md"></div>
            <div className="nk-tb-col tb-col-sm"></div>
            <div className="nk-tb-col tb-col-md"></div>
            <div className="nk-tb-col tb-col-xxl">
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
            <div className="nk-tb-col tb-col-lg"></div>
            <div className="nk-tb-col tb-col-xxl"></div>
            <div className="nk-tb-col"></div>
            <div className="nk-tb-col nk-tb-col-tools"></div>
        </div>
    )
}

export default LoadingComponent