import React from "react"
import Card from "../components/card"

import classes from "../style/slideWorks.module.css"
import grid from "../assets/images/bigGrid.svg"
import sm from "../assets/images/smartphone.svg"
import lap from "../assets/images/laptop.svg"
import text from "../assets/images/pen.svg"
import ai from "../assets/images/calligraphy.svg"




const SlideWorks = () => {

  return (

    <div className={`container ${classes.slideContainer}`}>

      <img className={`${classes.grid}`} src={grid}/>

      <div className="row">
        <div className="col-xl-6 px-5 py-2">
          <Card
            image={lap}
            title="Web"
            text="We create amazingly responsive websites through the use of landing pages, e commerce platforms, or more intricate web applications."
            tag={"arda"}
            width={'120px'}
          >
            <div className={`my-3 d-flex flex-wrap text-white`}>
              <div className="d-inline bg-grey px-3 mt-2 me-2">Landing Page</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">Web App</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">CRM</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">CMS</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">E-Commerce</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">Dashboard</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">Web App</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-6 px-5 py-2">
          <Card
            image={sm}
            width={'65px'}
            title="Apps"
            text="We carefully craft the user experience of iOS and Android applications. We are experts at making apps that are easy to use, beautiful and engaging."
            tag={"arda"}
            color={'white'}
          >
            <div className={`my-3 d-flex flex-wrap text-white`}>
              <div className="d-inline bg-grey px-3 mt-2 me-2">IOS</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">Android</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">WatchOS</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">Windows</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">React Native</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">MVP</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">Custom App</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-6 px-5 py-2">
          <Card
            image={text}
            width={'120px'}
            title="Content"
            text="We create amazingly responsive websites through the use of landing pages, e commerce platforms, or more intricate web applications."
            tag={"arda"}>
            <div className={`my-3 d-flex flex-wrap text-white`}>
              <div className="d-inline bg-grey px-3 mt-2 me-2">Wordpress</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">Cms</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">Web Content</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">Blog</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-6 px-5 py-2">
          <Card
            image={ai}
            width={'120px'}
            title="Graphic"
            text="A picture is worth a thousand words. Bring your message to life with illustrations that you can use across your interfaces."
            tag={"arda"}>
            <div className={`my-3 d-flex flex-wrap text-white`}>
              <div className="d-inline bg-grey px-3 mt-2 me-2">Motion and Animation</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">Vectorized Illustrations</div>
              <div className="d-inline bg-grey px-3 mt-2 me-2">3D Illustrations</div>
            </div>
          </Card>
        </div>
      </div>

    </div>

  );

}


export default SlideWorks