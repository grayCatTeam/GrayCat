import React from 'react'
import Layout from "../components/Layout/Layout";
import Header from "../components/Layout/Header/Header";

import logo from '../assets/images/logo@2x.png';
import catalog from '../assets/catalog/yesilyaka-koru-katalog.pdf';
import SwiperCard from "../atoms/IndexAtoms/ConceptSwiper/SwiperCard";
import {Button} from "react-bootstrap";

const Catalog = () => {
    return(
        <>
            <Header logo={logo}/>
            <Layout>
                <div className="w-50 mx-auto d-flex justify-content-center">
                    <a href={catalog} target="_blank"><Button>Yeşilkaya Koru</Button></a>
                </div>

            </Layout>
        </>
    )
}

export default Catalog