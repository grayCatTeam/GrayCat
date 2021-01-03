import './testimonialCard.css';

function TestimonialCard() {
  return (
    <div className="card clientSlide">
      <div className="card-body clientBox d-flex">
        <div className="thumbnail d-flex justify-content-center flex-column align-items-center">
          <div className="imgCard"></div>
          <div className="nameCard">
            <p>Client Job</p>
          </div>
        </div>
        <div className="card-text d-flex align-items-center">
          That was a great experience. Rain listened to me as a team and they
          made perfect job.
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
