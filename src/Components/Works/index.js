import organization from '../../../src.old/Assets/images/organization.png';
import tvProduction from '../../../src.old/Assets/images/tvYapim.png';
import music from '../../../src.old/Assets/images/music.png';
import casting from '../../../src.old/Assets/images/casting.png';
import branding from '../../../src.old/Assets/images/branding.png';
import film from '../../../src.old/Assets/images/film.png';
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
