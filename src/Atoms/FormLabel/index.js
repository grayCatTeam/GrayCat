import classses from "./formLabel.module.css"


const FormLabel = (props) => {
  return (

    <>
      <div>
        <label className={classses.labelStyle}>{props.label}</label>
        <div className="d-flex">
          <div className={classses.first}></div>
          <div className={classses.second}></div>
        </div>
      </div>



    </>

  )
}

export default FormLabel