import classes from './castcard.module.css';
import profile from '../../Assets/images/profilePicture.svg';
import {FaTwitter, FaInstagram} from 'react-icons/fa';

function CastCard(props) {
  const {name, imageUrl} = props;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.imgContent}>
          <div className={classes.imageBack}></div>
          <img src={profile} className={classes.image}/>
        </div>
        <div className={classes.text}>
          <h4>{name}</h4>
        </div>
        <div className={classes.social}>
          <FaTwitter/>
          <FaInstagram/>
        </div>
      </div>
    </>
  );
}

export default CastCard;
