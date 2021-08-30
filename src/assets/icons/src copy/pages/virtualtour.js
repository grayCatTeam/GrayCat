import React from 'react';
import Header from "../components/Layout/Header/Header";
import Layout from "../components/Layout/Layout";
import logo from '../assets/images/logo@2x.png';


const VirtualTour = () => {
    return (
        <>
            <Header logo={logo}/>
            <Layout>
                <iframe src="/virtual/Yesilyaka_Su_Irmak_web/index.html" name="panorama" width="100%"
                        height="720px" scrolling="no" marginHeight="0" marginWidth="0" frameBorder="0"
                        style={{float: 'left', marginLeft: '0px'}} allowFullScreen={true}></iframe>
            </Layout>

        </>
    )
}
export default VirtualTour;