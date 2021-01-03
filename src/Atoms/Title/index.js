import classes from './title.module.css';

function Title(props) {
  return (
    <>
      <div className={classes.title}>
        <h1 className={classes.back}>{props.backSide}</h1>
        <h2 className={classes.front}>{props.frontSide}</h2>
      </div>
    </>
  );
}

export default Title;
