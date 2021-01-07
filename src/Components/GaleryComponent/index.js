import classes from '../GaleryComponent';
import PrewButton from '../../Atoms/PrewButton';
import NextButton from '../../Atoms/NextButton/nextButton';

function GaleryComponent() {
  return (
    <>
      <div className="container gridContainer">
        <div className="row">
          <div className="col-md-4 gridBox"></div>
          <div className="col-md-4 gridBox"></div>
          <div className="col-md-4 gridBox"></div>
        </div>
        <div className="row">
          <div className="col-md-4 gridBox"></div>
          <div className="col-md-4 gridBox"></div>
          <div className="col-md-4 gridBox"></div>
        </div>
        <div className="row">
          <div className="col-md-4 gridBox"></div>
          <div className="col-md-4 gridBox"></div>
          <div className="col-md-4 gridBox"></div>
        </div>
        <div className="buttonContainer d-flex justify-content-evenly align-items-center">
          <PrewButton/>
          <NextButton/>
        </div>
      </div>
    </>
  );
}

export default GaleryComponent;
