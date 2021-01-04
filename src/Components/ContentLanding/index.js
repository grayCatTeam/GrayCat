import './contentlanding.css';
import whorwe from '../../Assets/images/whorwe.svg';

function ContentLanding(props) {
  return (
    <div className="container d-flex landingWrap align-items-center justify-content-center">
      <div>
        <img src={whorwe} ekip/>
        <h1 style={{ color: 'white' }}>
          If it is brilliant, <br />
          it will shine
        </h1>
      </div>
      <div className="landingText">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry'sstandard dummy text ever
          since the 1500s.
        </p>
        <h3>Dara Kutlay</h3>
        <p>Founder</p>
      </div>
    </div>
  );
}

export default ContentLanding;
