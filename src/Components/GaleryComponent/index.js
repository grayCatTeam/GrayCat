/*import components*/
import PrewButton from '../../../src.old/Atoms/PrewButton';
import NextButton from '../../../src.old/Atoms/NextButton/nextButton';

/*import css*/
import classes from './galeryComponent.module.css'


function GaleryComponent() {
  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <div className={`col-xl-4 bg-dark ${classes.gridGallery}`}></div>
          <div className={`col-xl-4 bg-dark ${classes.gridGallery}`}></div>
          <div className={`col-xl-4 bg-dark ${classes.gridGallery}`}></div>

          <div className={`col-xl-4 bg-dark ${classes.gridGallery}`}></div>
          <div className={`col-xl-4 bg-dark ${classes.gridGallery}`}></div>
          <div className={`col-xl-4 bg-dark ${classes.gridGallery}`}></div>

          <div className={`col-xl-4 bg-dark ${classes.gridGallery}`}></div>
          <div className={`col-xl-4 bg-dark ${classes.gridGallery}`}></div>
          <div className={`col-xl-4 bg-dark ${classes.gridGallery}`}></div>
        </div>
        <div className={`w-50 mx-auto d-flex justify-content-between align-items-center`}>
          <PrewButton/>
          <NextButton/>
        </div>
      </div>
    </>
  );
}

export default GaleryComponent;
