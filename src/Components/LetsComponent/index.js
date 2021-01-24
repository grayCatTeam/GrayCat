/*import assets*/
import lets from '../../../src.old/Assets/images/lets.svg';

/*import css*/
import classes from './letscomponent.module.css';


function LetsComponent(props) {
  const {position, buttonName} = props;

  return (


      <div className={`container-fluid`}>
          <div className={`row bg-white`}>
            <div className={`col-xl-5 p-5 border border-2 d-flex flex-column justify-content-center ${classes.border}`}>
              <img src={lets} className={`my-2`} alt="lets"/>
              <button className={`btn btn-dark py-3 my-5 w-50 ms-2 ${classes.border}`}>CONTACT</button>
            </div>
          </div>
      </div>



  );
}

export default LetsComponent;
