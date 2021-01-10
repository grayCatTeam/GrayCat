/*import assets*/
import tab from '../../Assets/images/tabWhite.png';

function SmallTitle(props) {

  const {title} = props;

  return (
    <>

        <h3 className={`mb-0 fs-4`}>{title}</h3>
        <img src={tab} className={`d-inline`} alt="tab"/>

    </>
  );
}

export default SmallTitle;
