/*import components*/
import Title from '../../Atoms/Title/';
import Header from '../../../src/Components/Header';
import TeamCard from '../../Atoms/TeamCard';
import LetsComponent from '../../../src/Components/LetsComponent';
import ContentLanding from '../../../src/Components/ContentLanding';
import Footer from '../../../src/Components/Footer';

/*import assets*/
import academyInfo from '../../Assets/images/academyInfo.jpg';
import DaraKutlay from '../../Assets/images/client.png';

/*import css*/
import classes from './academy.module.css';
import BigTitle from "../../Atoms/BigTitle";
import AcademyImage from "../../Atoms/AcademyImage";


function Academy() {
  return (
    <>
      <div style={{backgroundColor: 'black'}}>
        <Header/>
        <ContentLanding/>
      </div>

      <div className={`container mx-auto g-0`}>

        <Title frontSide="Academy" backSide="Academy"/>

        <AcademyImage/>



        <div className={``}>
          <p style={{padding: '2rem 0'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
            tortor nec ante commodo, lobortis tristique sem egestas. Maecenas
            gravida condimentum lorem sit amet facilisis. Mauris iaculis in
            risus ac molestie. Nulla maximus leo ante. Etiam elit nibh,
            fringilla ac. lobortis tristique sem egestas. Maecenas gravida
            condimentum lorem sit amet facilisis. Mauris iaculis in risus ac
            molestie. Nulla maximus leo ante. Etiam elit nibh, fringilla ac.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
            tortor nec ante commodo, lobortis tristique sem egestas. Maecenas
            gravida condimentum lorem sit amet facilisis. Mauris iaculis in
            risus ac molestie. Nulla maximus leo ante. Etiam elit nibh,
            fringilla ac. lobortis tristique sem egestas. Maecenas gravida
            condimentum lorem sit amet facilisis. Mauris iaculis in risus ac
            molestie. Nulla maximus leo ante. Etiam elit nibh, fringilla ac.
            Maecenas gravida condimentum lorem sit amet facilisis. Mauris
            iaculis in risus ac molestie. Nulla maximus leo ante. Etiam elit
            nibh, fringilla ac.
          </p>
        </div>

        <div className="container d-flex justify-content-evenly">
          <TeamCard
            teamUrl={DaraKutlay}
            name="Dara Kutlay"
            position="Founder"
          />
          <TeamCard
            teamUrl={DaraKutlay}
            name="Dara Kutlay"
            position="Founder"
          />
          <TeamCard
            teamUrl={DaraKutlay}
            name="Dara Kutlay"
            position="Founder"
          />
        </div>
      </div>

      <div className={classes.letsContainer}>
        <LetsComponent buttonName="CREATE ACCOUNT"/>
      </div>

      <Footer/>
    </>
  );
}

export default Academy;
