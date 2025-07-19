import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../Container/Breadcrumb'
import { useCreateDoctorMutation } from '../../Api/repositoryDoctor/doctorApi';
import doctorModel from '../../Interfaces/Doctor/doctorModel'

function Adddoctor() {

    const createDoktor = {
        name: "",
        surName: "",
        tcNo: "",
        sex: "",
        addresses: "",
        descriptions: "",
        email: "",
        password:"",
        phoneNumber: ""
    }

    const [createDoctor] = useCreateDoctorMutation();
    const [doctorModel, setDoctorModelState] = useState(createDoktor)
    const [isActive, setIsActiveState] = useState<boolean>();



    var formData = new FormData();

    const handleCreateOrUpdateChange = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        formData.append("Name", doctorModel.name);
        formData.append("SurName", doctorModel.surName);
        formData.append("TCNo", doctorModel.tcNo);
        formData.append("Sex", doctorModel.sex);
        formData.append("Email", doctorModel.email);
        formData.append("PhoneNumber", doctorModel.phoneNumber);
        formData.append("Addresses", doctorModel.addresses);
        formData.append("Descriptions", doctorModel.descriptions);
        formData.append("Password", doctorModel.password);
        createDoctor(formData);
    }

    return (
        <div className="nk-content ">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <Breadcrumb />
                        <div className="nk-block">
                            <div className="card card-bordered">
                                <div className="card-inner">
                                    <form encType='multipart/form-data' onSubmit={handleCreateOrUpdateChange}>
                                        <div className="row gy-4">
                                            <div className="col-xxl-6 col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="first-name">İsim</label>
                                                    <div className="form-control-wrap">
                                                        <input type="text" className="form-control" id="first-name" placeholder="İsim" name='name'
                                                            onChange={(e) => { setDoctorModelState((prevState) => { return { ...prevState, name: e.target.value } }) }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-md-4">
                                                <div className="form-group"><label className="form-label"
                                                    htmlFor="last-name">Soyisim</label>
                                                    <div className="form-control-wrap">
                                                        <input type="text" className="form-control" id="last-name" placeholder="Soyisim"
                                                            onChange={(e) => { setDoctorModelState((prevState) => { return { ...prevState, surName: e.target.value } }) }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="email">E-Posta</label>
                                                    <div className="form-control-wrap">
                                                        <input type="email" className="form-control" id="email" placeholder="E-Posta"
                                                            onChange={(e) => { setDoctorModelState((prevState) => { return { ...prevState, email: e.target.value } }) }} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xxl-4 col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label">Doğum Tarihi</label>
                                                    <div className="form-control-wrap">
                                                        <div className="form-icon form-icon-right"><em
                                                            className="icon ni ni-calendar"></em></div>
                                                        <input type="text" className="form-control date-picker-alt" data-date-format="dd.mm.yyyy" placeholder="dd.mm.yyyy" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xxl-4 col-md-4">
                                                <div className="form-group"><label className="form-label"
                                                    htmlFor="phone-no">Telefon</label>
                                                    <div className="form-control-wrap">
                                                        <input type="number" className="form-control" id="phone-no" placeholder="00000000000"
                                                            onChange={(e) => { setDoctorModelState((prevState) => { return { ...prevState, phoneNumber: e.target.value } }) }} name="phoneNumber" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xxl-4 col-md-4">
                                                <div className="form-group"><label className="form-label">Cinsiyet</label>
                                                    <div className="form-control-wrap">
                                                        <select className="form-select js-select2"
                                                            data-placeholder="Cinsiyet Seçin" onChange={(e) => { setDoctorModelState((prevState) => { return { ...prevState, sex: e.target.value } }) }} name="sex" >
                                                            <option value="" >Cinsiyet Seçin</option>
                                                            <option value="1" >Bay</option>
                                                            <option value="0">Bayan</option>
                                                            <option value="2">Bay & Bayan</option>
                                                        </select></div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-md-4">
                                                <div className="form-group"><label className="form-label">Bölüm</label>
                                                    <div className="form-control-wrap"><select
                                                        className="form-select js-select2"
                                                        data-placeholder="Bölüm Seçin">
                                                        <option value="">Bölüm Seçin</option>
                                                        <option value="default_option">
                                                            Allergy and immunology
                                                        </option>
                                                        <option value="option_select_department">
                                                            Anesthesiology
                                                        </option>
                                                        <option value="option_select_department">
                                                            Cardiology
                                                        </option>
                                                        <option value="option_select_department">
                                                            Dermatology
                                                        </option>
                                                        <option value="option_select_department">
                                                            Diagnostic radiology
                                                        </option>
                                                        <option value="option_select_department">
                                                            Emergency medicine
                                                        </option>
                                                        <option value="option_select_department">
                                                            Neurology
                                                        </option>
                                                        <option value="option_select_department">
                                                            Obstetrics and gynecology
                                                        </option>
                                                        <option value="option_select_department">
                                                            Ophthalmology
                                                        </option>
                                                        <option value="option_select_department">
                                                            Pathology
                                                        </option>
                                                        <option value="option_select_department">
                                                            Pediatrics
                                                        </option>
                                                        <option value="option_select_department">
                                                            Psychiatry
                                                        </option>
                                                        <option value="option_select_department">
                                                            Surgery
                                                        </option>
                                                        <option value="option_select_department">
                                                            Urology
                                                        </option>
                                                    </select></div>
                                                </div>
                                            </div>

                                            <div className="col-xxl-4 col-md-4">
                                                <div className="form-group"><label className="form-label"
                                                    htmlFor="tcNo">T.C.</label>
                                                    <div className="form-control-wrap">
                                                        <input type="text" className="form-control" id="tcNo" placeholder="***********"
                                                            onChange={(e) => { setDoctorModelState((prevState) => { return { ...prevState, tcNo: e.target.value } }) }} name="tcNo" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xxl-12 col-md-4">
                                                <div className="form-group"><label className="form-label"
                                                    htmlFor="password">Şifre</label>
                                                    <div className="form-control-wrap">
                                                        <input type="password" className="form-control" id="password" placeholder="***********"
                                                            onChange={(e) => { setDoctorModelState((prevState) => { return { ...prevState, password: e.target.value } }) }} name="password" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xxl-6 col-md-4">
                                                <div className="form-group"><label className="form-label">Adres</label>
                                                    <div className="form-control-wrap">
                                                        <textarea className="form-control" id="address" placeholder="Adres"
                                                            onChange={(e) => { setDoctorModelState((prevState) => { return { ...prevState, addresses: e.target.value } }) }} name="addresses"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-md-4">
                                                <div className="form-group"><label
                                                    className="form-label">Açıklama</label>
                                                    <div className="form-control-wrap">
                                                        <textarea className="form-control" id="designation" placeholder="Açıklama"
                                                            onChange={(e) => { setDoctorModelState((prevState) => { return { ...prevState, descriptions: e.target.value } }) }} name="descriptions"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-primary">
                                                        Doctor / Hemşire Kaydet
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adddoctor