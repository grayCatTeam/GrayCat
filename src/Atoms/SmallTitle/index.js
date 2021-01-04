import classes from './smallTitle.module.css';
import tab from '../../Assets/images/tab.svg';

function SmallTitle(props) {
  const { title, content } = props;

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <span>
            {title}
            <img src={tab} alt="tab" />
          </span>
        </div>
        <div className={classes.number}>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}

export default SmallTitle;
