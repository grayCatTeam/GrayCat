import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
    Navigation,Thumbs
} from 'swiper/core';
import Title from "../../../../atoms/Title";
import {Button} from "react-bootstrap";
//import images & data
import {SuGallery} from "../../../../helper/Su/SuData";

//import style
import './sugallery.scss';



// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);



const SuGalleryComponent = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeOne, setActiveOne] = useState('');
    const [activeTwo, setActiveTwo] = useState('');
    const [activeThree, setActiveThree] = useState('');
    const [activeFour, setActiveFour] = useState('');

    return(
        <>
            <Title title="YEŞİLYAKA SU" subtitle="GALERİ"/>

            <Swiper
                spaceBetween={10}
                thumbs={{swiper: thumbsSwiper}}
                data-aos={'fade-down'} data-aos-duration={'1300'}
                className="gallerySwiper">
                <SwiperSlide>
                    <Swiper
                        navigation={true}
                        className="villaInside"
                    >
                        <SwiperSlide>
                            <img src={SuGallery.inside} alt={SuGallery.alt} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={SuGallery.inside2} alt={SuGallery.alt} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={SuGallery.inside3} alt={SuGallery.alt} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={SuGallery.inside4} alt={SuGallery.alt} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={SuGallery.inside5} alt={SuGallery.alt} />
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        navigation={true}
                        className="villaInside"
                    >
                        <SwiperSlide>
                            <img src={SuGallery.outside} alt={SuGallery.alt}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={SuGallery.outside2} alt={SuGallery.alt}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={SuGallery.outside3} alt={SuGallery.alt}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={SuGallery.outside4} alt={SuGallery.alt}/>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        navigation={true}
                        className="villaInside"
                    >
                        <SwiperSlide>
                            <img src={SuGallery.social} alt={SuGallery.alt} />
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        navigation={true}
                        className="villaInside"
                    >
                        <SwiperSlide>
                            <iframe width="100%" height="520px" src="https://www.youtube.com/embed/GAyh_5xt4ds"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={
                    setThumbsSwiper}
                spaceBetween={0}
                slidesPerView={4}
                freeMode={true}
                watchSlidesVisibility={true}
                watchSlidesProgress={true}
                className="galleryThumbSwiper">
                <SwiperSlide
                    className="thumbSlide"
                >
                    <Button
                        className="btn-secondary"
                        data-aos={'fade-up'} data-aos-duration={'1300'}
                        style={{'backgroundColor': `${activeOne}`}}
                        onClick={() => {
                            setActiveOne('black')
                            setActiveTwo('')
                            setActiveThree('')
                            setActiveFour('')
                        }}
                    >Villa İç Mekan</Button>
                </SwiperSlide>
                <SwiperSlide className="thumbSlide">
                    <Button
                        className="btn-secondary"
                        data-aos={'fade-up'} data-aos-duration={'1300'}
                        style={{'backgroundColor': `${activeTwo}`}}
                        onClick={() => {
                            setActiveOne('')
                            setActiveTwo('black')
                            setActiveThree('')
                            setActiveFour('')
                        }}
                    >Villa Dış Mekan</Button>
                </SwiperSlide>
                <SwiperSlide
                    className="thumbSlide"
                >
                    <Button
                        className="btn-secondary"
                        data-aos={'fade-up'} data-aos-duration={'1300'}
                        style={{'backgroundColor': `${activeThree}`}}
                        onClick={() => {
                            setActiveOne('')
                            setActiveTwo('')
                            setActiveThree('black')
                            setActiveFour('')
                        }}
                    >Sosyal Alanlar</Button>
                </SwiperSlide>
                <SwiperSlide
                    className="thumbSlide"
                >
                    <Button
                        className="btn-secondary"
                        data-aos={'fade-up'} data-aos-duration={'1300'}
                        style={{'backgroundColor': `${activeFour}`}}
                        onClick={() => {
                            setActiveOne('')
                            setActiveTwo('')
                            setActiveThree('')
                            setActiveFour('black')
                        }}
                    >Videolar</Button>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SuGalleryComponent;


