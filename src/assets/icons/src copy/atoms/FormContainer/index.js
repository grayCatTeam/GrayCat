import React from "react";

//import npm packages
import {Formik,Form , Field, ErrorMessage} from "formik";
import * as Yup from 'yup';

//import styles
import * as classes from './formcontainer.module.scss';

const FormContainer = () => {
    return(
        <Formik
            //all forms initial states
            initialValues={{
                firstName: '',
                lastName: '',
                phone:'',
                email: '',
                termOfService: false,
            }}

            //validation in Formik with yup
            validationSchema={
                Yup.object({
                    firstName:
                        Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName:
                        Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    phone:
                        Yup.string()
                        .max(11, 'You should Write without national code and 0')
                        .required('Required'),
                    email:
                        Yup.string().email('Invalid email address').required('Required'),
                    termOfService:
                        Yup.boolean().oneOf([true],'you have to choice this.').required('Required'),
                })}

            //onsubmit function with Formik
            onSubmit={(
                values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
                <Form className={classes.form}>
                    <div className={classes.formContainer}>

                        <div className={classes.formWrapper}>
                            <label htmlFor="firstName">Adınız</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage name="firstName"/>

                            <label htmlFor="lastName">Soyadınız</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName"/>

                            <label htmlFor="phone">Telefon Numaranız</label>
                            <Field name="phone" type="number"/>
                            <ErrorMessage name="phone"/>

                            <label htmlFor="email">E-Posta Adresiniz</label>
                            <Field name="email" type="email"/>
                            <ErrorMessage name="email"/>

                            <label htmlFor="message" className={classes.textareaLabel}>Mesajınız</label>
                            <Field  name="message" type="text" as="textarea" rows="3" placeholder="Mesajınızı Yazınız.."/>
                        </div>

                        <div className={classes.checkWrapper}>
                            <label htmlFor="termOfService">
                                <span>
                                    <Field type="checkbox" name="termOfService" />
                                </span>
                                <span>
                                    Kişisel Verilerin Korunması Kanunu uyarınca, aydınlatma
                                metnini okuduğumu ve anladığımı kabul ediyorum.
                                </span>
                            </label>
                            <ErrorMessage name="termOfService"/>
                            <label htmlFor="checked">
                                <span>
                                   <Field type="checkbox" name="checked" />
                                </span>
                                <span>
                                    Mesa Nurol Adi Ortaklığı’nı oluşturan, Mesa Mesken Sanayi A.Ş. ve Nurol İnşaat <br/>
                                    ve Ticaret A.Ş.
                                tarafından tanıtım, teklif, promosyon, anket, etkinlik gibi her türlü doğrudan ve dolaylı
                                pazarlama faaliyetleri kapsamında tarafıma elektronik posta, telefon ve benzeri iletişim kanalları
                                vasıtasıyla ses ve görüntü içerikli bilgilendirme ve pazarlama iletileri gönderilmesine, kişisel
                                verilerimin bu amaçla işlenmesine ve gönderim sağlanması için hizmet aldığınız üçüncü kişilerle
                                paylaşılmasına onay veriyorum.
                                </span>
                            </label>

                        </div>
                    </div>
                    <div className={classes.downWrap}>
                        <div className={classes.textareaTwo}>
                            <label htmlFor="message" className={classes.textareaLabel}>Mesaj</label>
                            <Field  name="message" type="text" as="textarea" rows="3" />
                        </div>
                        <button type="submit">GÖNDER</button>
                    </div>
                </Form>
        </Formik>
    )
}

export default FormContainer;