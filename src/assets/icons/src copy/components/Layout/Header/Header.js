import React, {useEffect, useState} from 'react';

//import npm packages
import {
    Navbar,
    Nav,
    NavDropdown,
    Button,
}
from "react-bootstrap";
import {Link} from "gatsby";
import AOS from 'aos';


//import components in project
import MobileMenu from "../../../atoms/MobileMenu";
import CustomDropdown from "../../../atoms/CustomDropdown";


//import images
import hamburger from '../../../assets/icons/hamburger@2x.png';
import virtualButton from '../../../assets/icons/virtualtour@2x.png';
import catalogButton from '../../../assets/icons/e-catalog@2x.png';

//import styles
import * as classes from './header.module.scss';

const Header = (props) => {

    useEffect(()=> {

        AOS.init()

    },[])

    const [modalShow,setModalShow] = useState(false);
    const [showSu, setShowSu ] = useState(false);
    const [showKoru, setShowKoru ] = useState(false)


    const showKoruDropdown = (e)=> {
        setShowKoru(!showKoru);
    }

    const showSuDropdown = (e)=> {
        setShowSu(!showSu);
    }

    const hideDropdown = e => {
        setShowSu(false);
        setShowKoru(false);
    }

    return(
        <header className={classes.header}>
            <Navbar collapseOnSelect className={classes.navbar} expand="lg" bg="white" variant="light">
                {/*  logo area   */}
                <Link to={'/'} data-aos={'zoom-in'} data-aos-duration={'1300'}>
                        <img src={props.logo} className={classes.logo} alt={"yesilyaka logo"}/>
                </Link>

                {/*  navbar area   */}

                <Nav className={classes.nav}>
                    <NavDropdown
                        id="basic-nav-dropdown"
                        show={showKoru}
                        onMouseEnter= {showKoruDropdown}
                        onMouseLeave= {hideDropdown}
                        className={`${classes.dropDown} ${classes.borderRight}`}
                        title="Yeşilyaka Koru">
                            <Link
                                to={"/yesilyakakoru"}
                                activeStyle={{color:'black',fontWeight:'700'}}
                            >Konsept</Link>

                            <Link
                                activeStyle={{color:'black',fontWeight:'700'}}
                                to={"/yesilyakakoru/villa"}
                            >Villa Planları
                            </Link>
                            <Link activeStyle={{color:'black',fontWeight:'700'}} to={"/yesilyakakoru/galeri"}>Galeri</Link>
                            <Link to={"/yesilyakakoru/vaziyet"} activeStyle={{color:'black',fontWeight:'700'}} >Vaziyet Planı</Link>
                            <Link to={"/yesilyakakoru/sosyal"} activeStyle={{color:'black',fontWeight:'700'}} >Sosyal Alanlar</Link>
                    </NavDropdown>
                    <NavDropdown
                        id="basic-nav-dropdown"
                        show={showSu}
                        onMouseEnter= {showSuDropdown}
                        onMouseLeave= {hideDropdown}
                        className={`${classes.dropDown} ${classes.borderRight}`}
                        title="Yeşilyaka Su"
                    >
                        <Link to={"/yesilyakasu"} activeStyle={{color:'black',fontWeight:'700'}} >Konsept</Link>
                        <Link to={"/yesilyakasu/villa"} activeStyle={{color:'black',fontWeight:'700'}} >Villa Planları</Link>
                        <Link activeStyle={{color:'black',fontWeight:'700'}}  to={"/yesilyakasu/galeri"}>Galeri</Link>
                        <Link to={"/yesilyakasu/vaziyet"} activeStyle={{color:'black',fontWeight:'700'}} >Vaziyet Planı</Link>
                        <Link to={"/yesilyakasu/sosyal"} activeStyle={{color:'black',fontWeight:'700'}} >Sosyal Alanlar</Link>
                    </NavDropdown>
                    <Nav.Link className={classes.borderRight}>
                        <Link
                            to={'/kurumsal'}
                            activeStyle={{color:'black',fontWeight:'700'}}
                            className={classes.navButtonLink}
                        >Kurumsal</Link>
                    </Nav.Link>
                    <Nav.Link className={classes.borderRight}>
                        <Link
                            className={classes.navButtonLink}
                            to={'/iletisim'}
                            activeStyle={{color:'black',fontWeight:'700'}}
                        >İletişim</Link>
                    </Nav.Link>
                    <Nav.Link className={classes.borderRight}>
                        <Link
                            className={classes.navButtonLink}
                            to={'/e-katalog'}
                            activeStyle={{color:'black',fontWeight:'700'}}
                        >E-Katalog</Link>
                    </Nav.Link>
                    <Link
                            to={'/virtualtour'}>
                            <div className={classes.mobileButton}>
                            <span className={classes.rounded}>
                                    <img src={virtualButton} alt={'virtual button'}/>
                            </span>
                                <p>
                                    SANAL TUR
                                </p>
                            </div>
                    </Link>
                    {/*<span>
                       <Link to={'/'}>EN</Link>
                    </span>*/}
                </Nav>

                {/*-------------------info button--------------------------*/}

                <CustomDropdown/>

                {/*--------------  mobile navbar area ----------------*/}

                <div className={classes.mobile}>

                    <div className={classes.mobileNavbar}>
                        <Link
                            to={'/'}>
                            <div className={classes.mobileButton}>
                            <span className={classes.rounded}>
                                    <img src={virtualButton} alt={'virtual button'}/>
                            </span>
                                <p>
                                    SANAL TUR
                                </p>
                            </div>
                        </Link>
                        <Link
                            to={'/'}
                        >
                            <div className={classes.mobileButton}>
                            <span className={classes.rounded}>
                                    <img src={catalogButton} alt={'catalog button'}/>
                            </span>
                                <p>
                                    E-KATALOG
                                </p>
                            </div>
                        </Link>
                    </div>


                    <Button
                        variant={"light"}
                        className={classes.hamburger}
                        onClick={() => setModalShow(true)}
                    >
                        <img src={hamburger} width={20} alt={'menu button'}/>
                    </Button>
                        <MobileMenu
                            show={modalShow}
                            onHide={ () => setModalShow(false)}
                        />
                </div>
            </Navbar>
        </header>
    )
}

export default Header;



