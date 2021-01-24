/*import components*/
import Header from '../../../src/Components/Header';
import Title from '../../Atoms/Title';
import GaleryComponent from '../../../src/Components/GaleryComponent';
import LetsComponent from '../../../src/Components/LetsComponent';
import Footer from '../../../src/Components/Footer';

/*import assets*/

/*import css*/
import classes from './castsingle.module.css';
import CastProfilInfo from "../../../src/Components/CastProfilInfo";


function CastSingle() {

  return (
    <>
      <div className={`bg-dark ${classes.header}`}>
        <Header/>
      </div>
      <CastProfilInfo/>
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
