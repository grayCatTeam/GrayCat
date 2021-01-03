import './teamcard.css';
import fuck from '../../Assets/images/casting.png';

function TeamCard(props) {
  const { teamUrl, name, position } = props;

  return (
    <div className="teamBox d-flex justify-content-center align-items-center flex-column">
      <div className="circularPortrait">
        <img src={teamUrl} />
      </div>
      <div className="teamText">
        <h5 style={{ fontWeight: 600 }}>{name}</h5>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default TeamCard;
