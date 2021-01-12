/*import components*/
import Header from '../../Components/Header';
import Title from '../../Atoms/Title';
import GaleryComponent from '../../Components/GaleryComponent';
import LetsComponent from '../../Components/LetsComponent';
import Footer from '../../Components/Footer';

/*import assets*/

/*import css*/
import classes from './castsingle.module.css';
import CastProfilInfo from "../../Components/CastProfilInfo";


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
