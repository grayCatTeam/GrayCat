import classes from './title.module.css';

function Title(props) {
  return (
    <div className={classes.title}>
      <span className={classes.back}>{props.backSide}</span>
      <span className={classes.front}>{props.frontSide}</span>
    </div>
  );
}

export default Title;
