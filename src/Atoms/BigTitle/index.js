import classes from "./bigtitle.module.css"



const BigTitle= () => {

  return(
      <div className={`container d-flex justify-content-center`}>
        <div className={`w-100 position-relative`} style={{minHeight:"400px"}}>
           <p className={`position-absolute text-white top-50 start-50 translate-middle  ${classes.back}`}>Say Hi!</p>
           <p className={`position-absolute text-white top-50 start-50 translate-middle mt-3 ${classes.front}`}>Say Hi!</p>
        </div>
      </div>


  )
}


export default BigTitle