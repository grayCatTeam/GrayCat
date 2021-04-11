import React, { useEffect, useState } from "react"
import {images} from "../../helpers/CarouselData";

import './aboutSlide.css';
import { FaChevronDown, FaChevronUp } from "react-icons/all";



const AboutSlide = () => {

  const [currentImg,setCurrentImg] = useState(0);


  return(
      <>
        <div className="aboutSlide">

          <div className="slideBox" style={{backgroundImage:`url(${images[currentImg].img})`}} onChange={ () => {setCurrentImg(currentImg)}}>
          </div>
          <div className={`d-flex flex-column justify-content-end align-items-center fs-4 mx-3 navigation`}>
            <span className="d-flex flex-column align-items-center arrowCarousel" onClick={() => {currentImg > 0 && setCurrentImg(currentImg - 1)}}>
              <FaChevronUp/>
              <div className="mb-5 dashBorder"></div>
            </span>
            <span className="d-flex flex-column align-items-center arrowCarousel" onClick={() => {currentImg < images.length - 1 && setCurrentImg(currentImg +1)}}>
              <div className="dashBorder"></div>
              <FaChevronDown/>
            </span>
          </div>
        </div>
        <div className="thumbnailWrapper my-5">
          <div className="d-flex thumbnailBox">
            <div className="w-25 d-flex justify-content-center align-items-center fs-1">
              <span>{images[0].id}</span>
            </div>
            <div className="d-flex justify-content-center align-items-start flex-column p-3">
              <h3>{images[0].title}</h3>
              <p> {images[0].text} </p>
            </div>
          </div>
          <div className="d-flex thumbnailBox">
            <div className="w-25 d-flex justify-content-center align-items-center fs-1">
              <span>{images[1].id}</span>
            </div>
            <div className="d-flex justify-content-center align-items-start flex-column p-3">
              <h3>{images[1].title}</h3>
              <p> {images[1].text} </p>
            </div>
          </div>
          <div className="d-flex thumbnailBox">
            <div className="w-25 d-flex justify-content-center align-items-center fs-1">
              <span>{images[2].id}</span>
            </div>
            <div className="d-flex justify-content-center align-items-start flex-column p-2">
              <h3>{images[2].title}</h3>
              <p> {images[2].text} </p>
            </div>
          </div>
          <div className="d-flex thumbnailBox">
            <div className="w-25 d-flex justify-content-center align-items-center fs-1">
              <span>{images[3].id}</span>
            </div>
            <div className="d-flex justify-content-center align-items-start flex-column p-2">
              <h3>{images[3].title}</h3>
              <p> {images[3].text} </p>
            </div>
          </div>

        </div>
      </>


  )
}

export default AboutSlide