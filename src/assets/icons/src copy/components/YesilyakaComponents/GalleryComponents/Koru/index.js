import React, { useRef, useState } from "react";


// Import npm packages
import { Swiper, SwiperSlide } from "swiper/react";
import
    SwiperCore,
{
    Navigation,
    Thumbs
}
from 'swiper/core';

//import images & data
import {KoruGallery} from "../../../../helper/Koru/KoruData";


//import style
import './korugallery.scss';
import {Button} from "react-bootstrap";
import "swiper/components/navigation/navigation.min.css";
import Title from "../../../../atoms/Title";



// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);


const KoruGalleryComponent = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeOne, setActiveOne] = useState('');
    const [activeTwo, setActiveTwo] = useState('');
    const [activeThree, setActiveThree] = useState('');
    const [activeFour, setActiveFour] = useState('');


    return (
        <>
            <Title title="YEŞİLYAKA KORU" subtitle="GALERİ" data-aos={'zoom-in'} data-aos-duration={'1300'}/>

            <Swiper
                spaceBetween={10}
                thumbs={{swiper: thumbsSwiper}}
                data-aos={'fade-down'} data-aos-duration={'1300'}
                className="gallerySwiper">
                {/* Inside Button Swiper */}
                <SwiperSlide>
                    <Swiper
                        navigation={true}
                        className="villaInside"
                    >
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside} alt={KoruGallery.alt}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside2} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside3} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside4} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside5} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                {/* Outside Button Swiper */}
                <SwiperSlide>
                    <Swiper
                        navigation={true}
                        className="villaInside"
                    >
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.outside} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.outside2} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.outside3} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.outside4} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                {/* Social Button Swiper */}
                <SwiperSlide>
                    <Swiper
                        navigation={true}
                        className="villaInside"
                    >
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social} alt={KoruGallery.alt}/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                {/* Video Button Swiper */}
                <SwiperSlide>
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/GAyh_5xt4ds"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={
                    setThumbsSwiper}
                onClick={(aa)=>{
                    console.log(aa.clickedIndex);
                }}
                spaceBetween={0}
                slidesPerView={'auto'}
                watchSlidesVisibility={true}
                watchSlidesProgress={true}
                allowTouchMove={false}
                slideToClickedSlide={false}
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
                        data-aos={'fade-up'} data-aos-duration={'1300'}
                        className="btn-secondary"
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

export default KoruGalleryComponent;