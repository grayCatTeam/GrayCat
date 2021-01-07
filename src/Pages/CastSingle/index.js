import classes from './castsingle.module.css';
import Header from '../../Components/Header';
import ContentLanding from '../../Components/ContentLanding';
import CastCard from '../../Atoms/CastCard';
import SmallTitle from '../../Atoms/SmallTitle';
import Title from '../../Atoms/Title';
import GaleryComponent from '../../Components/GaleryComponent';
import LetsComponent from '../../Components/LetsComponent';
import Footer from '../../Components/Footer';

function CastSingle() {
  return (
    <>
      <div className={classes.header}>
        <Header/>
      </div>
      <div className={`container ${classes.profile}`}>
        <div className="row">
          <div className="col-md-4">
            <CastCard name="Ariana Tao"/>
          </div>

          <div className="col-md-8">
            <div className={classes.first}>
              <SmallTitle title="height" content="180"/>
              <SmallTitle title="waist" content="34"/>
              <SmallTitle title="shoe" content="10"/>
            </div>

            <div className={classes.second}>
              <SmallTitle
                title="skils"
                content="Dancer, Acrobatics and Gymnastics Actris, Singer"
              />
              <SmallTitle title="language" content="French, Basic Italian"/>
            </div>
          </div>
        </div>
        <div className={classes.education}>
          <div className={classes.eduBox}>
            <SmallTitle title="Bachelor's of Fine Art"/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              felis eros, tristique feugiat viverra et, tempor nec nisl. Nunc in
              magna tortor. Donec ac mauris vulputate, interdum diam eget,
              eleifend nunc. Vivamus et dignissim lacus. Vivamus hendrerit
              sodales nunc nec consequat. Nam molestie leo nec finibus ultrices.
              Nulla in euismod nibh. In et dictum eros. Nunc dignissim dictum
              sapien non.
            </p>
          </div>
          <div className={classes.eduBox}>
            <SmallTitle title="Mimar Sinan University"/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              felis eros, tristique feugiat viverra et, tempor nec nisl. Nunc in
              magna tortor. Donec ac mauris vulputate, interdum diam eget,
              eleifend nunc. Vivamus et dignissim lacus. Vivamus hendrerit
              sodales nunc nec consequat. Nam molestie leo nec finibus ultrices.
              Nulla in euismod nibh. In et dictum eros. Nunc dignissim dictum
              sapien non.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.galery}>
        <Title frontSide="Galery" backSide="Galery"/>
      </div>
      <GaleryComponent/>
      <div className={classes.letsContainer}>
        <LetsComponent/>
      </div>
      <Footer/>
    </>
  );
}

export default CastSingle;
