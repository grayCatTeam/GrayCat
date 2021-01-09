import './testimonialCard.css';

function TestimonialCard() {
  return (
    <div className="card text-white">
      <div className="card-body">
        <div className="row p-xl-5 p-md-4 p-sm-5 p-4">
          <div className="col-4 h-100">
            <div className="imgCard"></div>
            <div className="nameCard">
              <p className="text-center">Client Job</p>
            </div>
          </div>
          <div className="col-8 h-100 cardText">
            That was a great experience. Rain listened to me as a team and they
            made perfect job. That was a great experience. Rain listened to me
            as a team and they made perfect job. That was a great experience.
            Rain listened to me as a team and they made perfect job.
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
