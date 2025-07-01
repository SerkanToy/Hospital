import React from 'react'

function Search() {
    return (
        <div className="nk-header-search ms-3 ms-xl-0 d-none d-md-flex">
            <em className="icon ni ni-search"></em>
            <input type="text" className="form-control border-transparent form-focus-none" placeholder="Ara..." />
        </div>
    )
}

export default Search