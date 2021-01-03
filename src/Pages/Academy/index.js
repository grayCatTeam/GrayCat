import Title from '../../Atoms/Title/';
import academyInfo from '../../Assets/images/academyInfo.jpg';
import DaraKutlay from '../../Assets/images/client.png';

import classes from './academy.module.css';
import Header from '../../Components/Header';
import ContentLanding from '../../Components/ContentLanding';
import TeamCard from '../../Atoms/TeamCard';
import LetsComponent from '../../Components/LetsComponent';
import Footer from '../../Components/Footer';

function Academy() {
  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <Header />
        <ContentLanding />
      </div>

      <div className={classes.academyInfo}>
        <Title frontSide="Academy" backSide="Academy" />
        <div className={classes.imageContainer}>
          <img
            src={academyInfo}
            width="1080px"
            className={classes.firstImage}
          />
          <img src={academyInfo} width="1080px" />
        </div>
        <div className={classes.textContainer}>
          <p style={{ padding: '2rem 0' }}>
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
        <LetsComponent buttonName="CREATE ACCOUNT" />
      </div>

      <Footer />
    </>
  );
}

export default Academy;
