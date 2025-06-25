import React from 'react'

function Visitors() {
    return (
        <div className="col-xxl-3 col-sm-6">
            <div className="card">
                <div className="nk-ecwg nk-ecwg6">
                    <div className="card-inner">
                        <div className="card-title-group">
                            <div className="card-title">
                                <h6 className="title">Expense</h6>
                            </div>
                        </div>
                        <div className="data">
                            <div className="data-group">
                                <div className="amount">$23,485</div>
                                <div className="nk-ecwg6-ck"><canvas
                                    className="ecommerce-line-chart-s3"
                                    id="todayExpense"></canvas></div>
                            </div>
                            <div className="info"><span className="change up text-primary"><em
                                className="icon ni ni-arrow-long-up"></em>1.34%</span><span>
                                    vs. last week</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visitors