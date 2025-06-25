import React from 'react'

function Country() {
  return (
    <div className="modal fade" tabIndex={-1} role="dialog" id="region">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content"><a href="#" className="close" data-bs-dismiss="modal"><em
            className="icon ni ni-cross-sm"></em></a>
            <div className="modal-body modal-body-md">
              <h5 className="title mb-4">Select Your Country</h5>
              <div className="nk-country-region">
                <ul className="country-list text-center gy-2">
                  <li><a href="#" className="country-item"><img src="assets/img/flags/arg.png" alt=""
                    className="country-flag" /><span className="country-name">Argentina</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/aus.png" alt=""
                    className="country-flag" /><span className="country-name">Australia</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/bangladesh.png" alt=""
                    className="country-flag" /><span className="country-name">Bangladesh</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/canada.png" alt=""
                    className="country-flag" /><span className="country-name">Canada
                      <small>(English)</small></span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/china.png" alt=""
                    className="country-flag" /><span className="country-name">Centrafricaine</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/china.png" alt=""
                    className="country-flag" /><span className="country-name">China</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/french.png" alt=""
                    className="country-flag" /><span className="country-name">France</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/germany.png" alt=""
                    className="country-flag"/><span className="country-name">Germany</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/iran.png" alt=""
                    className="country-flag"/><span className="country-name">Iran</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/italy.png" alt=""
                    className="country-flag"/><span className="country-name">Italy</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/mexico.png" alt=""
                    className="country-flag"/><span className="country-name">México</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/philipine.png" alt=""
                    className="country-flag"/><span className="country-name">Philippines</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/portugal.png" alt=""
                    className="country-flag"/><span className="country-name">Portugal</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/s-africa.png" alt=""
                    className="country-flag"/><span className="country-name">South Africa</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/spanish.png" alt=""
                    className="country-flag"/><span className="country-name">Spain</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/switzerland.png" alt=""
                    className="country-flag"/><span className="country-name">Switzerland</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/uk.png" alt=""
                    className="country-flag"/><span className="country-name">United Kingdom</span></a></li>
                  <li><a href="#" className="country-item"><img src="assets/img/flags/english.png" alt=""
                    className="country-flag"/><span className="country-name">United State</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Country