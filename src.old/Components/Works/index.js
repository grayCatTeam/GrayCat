import organization from '../../Assets/images/organization.png';
import tvProduction from '../../Assets/images/tvYapim.png';
import music from '../../Assets/images/music.png';
import casting from '../../Assets/images/casting.png';
import branding from '../../Assets/images/branding.png';
import film from '../../Assets/images/film.png';
import classes from './works.module.css';

function Works() {
  return (
    <div className="row g-0">
      <div className="col-xxl-4 col-md-6 col-sm-12">
        <img src={organization} className={classes.img} />
      </div>
      <div className="col-xxl-4 col-md-6 col-sm-12">
        <img src={tvProduction} className={classes.img} />
      </div>
      <div className="col-xxl-4 col-md-6 col-sm-12">
        <img src={music} className={classes.img} />
      </div>
      <div className="col-xxl-4 col-md-6 col-sm-12">
        <img src={casting} className={classes.img} />
      </div>
      <div className="col-xxl-4 col-md-6 col-sm-12">
        <img src={branding} className={classes.img} />
      </div>
      <div className="col-xxl-4 col-md-6 col-sm-12">
        <img src={film} className={classes.img} />
      </div>
    </div>
  );
}

export default Works;
