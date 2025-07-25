import React from 'react'

function Orders() {
    return (
        <div className="col-xxl-3 col-sm-6">
            <div className="card">
                <div className="nk-ecwg nk-ecwg6">
                    <div className="card-inner">
                        <div className="card-title-group">
                            <div className="card-title">
                                <h6 className="title">IPD Income</h6>
                            </div>
                        </div>
                        <div className="data">
                            <div className="data-group">
                                <div className="amount">$10,945</div>
                                <div className="nk-ecwg6-ck"><canvas
                                    className="ecommerce-line-chart-s3"
                                    id="ipdIncome"></canvas></div>
                            </div>
                            <div className="info"><span className="change up text-danger"><em
                                className="icon ni ni-arrow-long-up"></em>4.63%</span><span>
                                    vs. last week</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders