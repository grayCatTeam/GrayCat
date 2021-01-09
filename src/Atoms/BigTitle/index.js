import classes from "./bigtitle.module.css"



const BigTitle= () => {

  return(
    <div className={"text-center mx-auto"}>

      <div className={classes.bigTitle}>
        <p className={classes.backTitle}>Say Hi!</p>
        <h1 className={classes.title}>Say Hi!</h1>
      </div>



    </div>
  )
}


export default BigTitle