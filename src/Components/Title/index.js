import classes from "./title.module.css"

function Title(props) {

  const {back,front} = props;

  return (

      <span className={`w-100`}>
        <p className={`position-absolute text-white ${classes.back}`}>{back}</p>
        <p className={`text-white ${classes.front}`}>{front}</p>
      </span>
  );
}

export default Title;
