import classes from './prevButton.module.css';
import { FaChevronLeft } from 'react-icons/fa';

function PrewButton() {
  return (
    <>
      <div className={classes.button}>
        <div className={classes.rectangle}></div>
        <p className={classes.icon}>
          <FaChevronLeft />
        </p>
        <h3 className={classes.next}>PREW</h3>
      </div>
    </>
  );
}

export default PrewButton;
