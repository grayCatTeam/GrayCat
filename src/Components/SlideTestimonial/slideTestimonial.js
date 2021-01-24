import './slideTestimonial.css';
import background from '../../../src.old/Assets/images/branding.png';

function SlideTestimonial() {
  return (
    <div className="wrapSlide">
      <div className="outerSlide">
        <img src={background}/>
        <div className="insideSlide"></div>
      </div>
    </div>
  );
}

export default SlideTestimonial;
