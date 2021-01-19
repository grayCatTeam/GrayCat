import './teamcard.css';


function TeamCard(props) {
  const {teamUrl, name, position} = props;

  return (
    <div className="teamBox d-flex justify-content-center align-items-center flex-column">
      <div className="circularPortrait">
        <img src={teamUrl} alt="team"/>
      </div>
      <div className="teamText">
        <h5 style={{fontWeight: 600}}>{name}</h5>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default TeamCard;
