import classes from './title.module.css';

function Title(props) {
  return (
    <div className={classes.title}>
      <span
        className={classes.back}
        dangerouslySetInnerHTML={{ __html: props.backSide }}
      ></span>
      <span
        className={classes.front}
        dangerouslySetInnerHTML={{ __html: props.frontSide }}
      ></span>
    </div>
  );
}

export default Title;
