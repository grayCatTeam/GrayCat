import './letscomponent.css';
import lets from '../../Assets/images/lets.svg';

function LetsComponent(props) {
  const {position, buttonName} = props;

  return (
    <div
      className="letsBox d-flex flex-column justify-content-center align-items-center"
      style={{position: {position}}}
    >
      <img src={lets} alt="lets"/>
      <button className="btn btn-dark letsButton">{buttonName}</button>
    </div>
  );
}

export default LetsComponent;
