import './works.css';
import organization from '../../Assets/images/organization.png';
import tvProduction from '../../Assets/images/tvYapim.png';
import music from '../../Assets/images/music.png';
import casting from '../../Assets/images/casting.png';
import branding from '../../Assets/images/branding.png';
import film from '../../Assets/images/film.png';

function Works() {
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-wrap flex">
        <div className="col-xl-4 col-md-6 col-sm-1 workBox">
          <h2>ORGANİZATION</h2>
          <img src={organization} style={{width: '100%', height: '335px'}}/>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-1 workBox">
          <h2>
            TV <br/>
            PRODUCTION
          </h2>
          <img src={tvProduction} style={{width: '100%', height: '335px'}}/>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-1 workBox">
          <h2>MUSIC</h2>
          <img src={music} style={{width: '100%', height: '335px'}}/>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-1 workBox">
          <h2>CASTING</h2>
          <img src={casting} style={{width: '100%', height: '335px'}}/>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-1 workBox">
          <h2>BRANDING</h2>
          <img src={branding} style={{width: '100%', height: '335px'}}/>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-1 workBox">
          <h2>
            FILM <br/> PRODUCTION
          </h2>
          <img src={film} style={{width: '100%', height: '335px'}}/>
        </div>
      </div>
    </div>
  );
}

export default Works;
