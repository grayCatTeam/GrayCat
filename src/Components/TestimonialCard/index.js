import classes from './testimonialCard.module.css';

function TestimonialCard() {
  return (
    <div className={`card text-white ${classes.card}`}>
      <div className="card-body">
        <div className="row p-xl-5 p-md-4 p-sm-5 p-4">
          <div className="col-4 h-100">
            <div className={classes.imgCard}>
              <img src="https://picsum.photos/224/224?random=1" />
            </div>
            <div className={classes.nameCard}>
              <p className="text-center">Client Job</p>
            </div>
          </div>
          <div className={`col-8 h-100 ${classes.cardText}`}>
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
