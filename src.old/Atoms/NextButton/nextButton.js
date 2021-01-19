import classes from './nextButton.module.css';
import {FaChevronRight} from 'react-icons/fa';

function NextButton() {
  return (
    <>
      <div className={classes.button}>
        <div className={classes.rectangle}></div>
        <h3 className={classes.next}>NEXT</h3>
        <p className={classes.icon}>
          <FaChevronRight/>
        </p>
      </div>
    </>
  );
}

export default NextButton;
