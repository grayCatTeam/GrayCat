import React, {useEffect} from "react";

//import npm packages
import {Dropdown} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import {Field, Form, Formik} from "formik";

//import styles
import "./customdropdown.scss";
import {Link} from "gatsby";

const CustomDropdown = () => {

    return(
        <Dropdown className="infoForm">

            <DropdownToggle
                className="infoButton btn-dark"
                data-aos={'zoom-in'}
                data-aos-duration={'1300'}
               >
                BİLGİ TALEP FORMU
            </DropdownToggle>
            <DropdownMenu className="infoMenu">
                <Formik
                    initialValues={{
                        name:'',
                        lastName:'',
                        phone:'',
                        email:'',
                        message:'',
                        secureData:'',
                        confirmation:''
                    }}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">
                                Adınız
                                <Field name="name" type="text"/>
                            </label>
                            <label htmlFor="lastName">
                                Soyadınız
                                <Field name="lastName" type="text"/>
                            </label>
                            <label htmlFor="phone">
                                Telefon Numaranız
                                <Field name="phone" type="number"/>
                            </label>
                            <label htmlFor="email">
                                E Posta Adresiniz
                                <Field name="email" type="email"/>
                            </label>
                            <label htmlFor="message">
                                Mesajınız
                                <Field as="textarea" row="1" name="message" type="text"/>
                            </label>
                            <label className="checkbox" htmlFor="secureData">
                                <Field type="checkbox" name="secureData"/>
                                Kişisel Verilerin Korunması Kanunu uyarınca, aydınlatma metnini
                                okuduğumu veanladığımı kabul ediyorum.
                            </label>
                            <label className="checkbox" htmlFor="confirmation">
                                <Field type="checkbox" name="confirmation"/>
                                Mesa Nurol Adi Ortaklığı’nı oluşturan, Mesa Mesken Sanayi A.Ş. ve Nurol İnşaat ve Ticaret A.Ş. tarafından tanıtım, teklif, promosyon, anket, etkinlik gibi her türlü doğrudan ve dolaylı pazarlama faaliyetleri kapsamında tarafıma elektronik posta, telefon ve benzeri iletişim kanalları vasıtasıyla ses ve görüntü içerikli bilgilendirme ve pazarlama iletileri gönderilmesine, kişisel verilerimin bu amaçla işlenmesine ve gönderim sağlanması için hizmet aldığınız üçüncü kişilerle paylaşılmasına onay veriyorum.
                            </label>
                            <button className="submitButton">GÖNDER</button>
                        </div>
                    </Form>
                </Formik>
            </DropdownMenu>
        </Dropdown>
    )
}

export default CustomDropdown;