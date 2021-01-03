import './content.css';
import wecreatefuturewithreact from '../../Assets/images/wecreatefuturewithrain.svg';

function Content() {
  return (
    <div className="contentwrapper">
      <div className="strokeTitle">
        <img src={wecreatefuturewithreact} alt="Logo" />
      </div>
      <div className="text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry'sstandard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.the industry'sstandard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen.
        </p>
      </div>
    </div>
  );
}

export default Content;
