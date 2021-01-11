/*import components*/
import Header from '../../Components/Header';
import CastCard from '../../Atoms/CastCard';
import SmallTitle from "../../Atoms/SmallTitle";
import Title from '../../Atoms/Title';
import GaleryComponent from '../../Components/GaleryComponent';
import LetsComponent from '../../Components/LetsComponent';
import Footer from '../../Components/Footer';

/*import css*/
import classes from './castsingle.module.css';


function CastSingle() {

  return (
    <>
      <div className={classes.header}>
        <Header/>
      </div>
      <div className={`container`}>
        <div className="row">
          <div className="col-xl-4 col-sm-12">
            <CastCard name="Ariana Tao"/>
          </div>
          <div className="col-xl-8 col-sm-8 pt-5">
            <div className={`w-75 d-flex justify-content-xl-between justify-content-sm-end pt-5 mt-1 pe-5`}>

              <SmallTitle title="height"/>
              <SmallTitle title="waist"/>
              <SmallTitle title="shoe"/>
            </div>
            <div className={`col-xl-12 pt-5`}>
              <div className={`w-100 pt-5`}>
                <SmallTitle title="skils" content="Dancer, Acrobatics and Gymnastics Actris, Singer"/>
              </div>
              <div className={`w-100 pt-5`}>
                <SmallTitle title="language" content="French, Basic Italian"/>
              </div>
            </div>
          </div>

          <div className={`row`}>
            <div className={`col-xl-12 mt-5`}>
              <h3 className={`fs-3`}>Bachelor's of Fine Art</h3>
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
            <div className={`col-xl-12 mt-5`}>
              <h3 className={`fs-3`}>Mimar Sinan University</h3>
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
      </div>
      <div className={`container`}>
        <Title frontSide="Galery" backSide="Galery"/>
        <GaleryComponent/>
        <LetsComponent/>
      </div>
      <Footer/>
    </>
  );
}

export default CastSingle;
