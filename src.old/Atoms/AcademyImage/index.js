import classes from "./academyImage.module.css"

import img from '../../Assets/images/academyInfo.jpg'

const AcademyImage= () => {

  return(
      <div className={`container w-75 d-flex justify-content-center overflow-hidden`}>
        <div className={`w-100 position-relative`} style={{minHeight:"600px"}}>
           <img className={`w-75 position-absolute text-white top-50 start-50 translate-middle`} src={img}/>
           <img className={`w-75 position-absolute text-white top-50 start-50 translate-middle mt-3 ms-3`} src={img}/>
        </div>
      </div>
  )
}


export default AcademyImage