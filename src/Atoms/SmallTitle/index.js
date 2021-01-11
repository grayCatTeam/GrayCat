/*import assets*/
import tab from '../../Assets/images/tabWhite.png';

function SmallTitle(props) {

  const {title} = props;

  return (
    <>
        <div className={`row d-flex flex-column`}>
          <div className={`col-12`}>
            <h3 className={`mb-0 fs-4`}>{title}</h3>
          </div>
          <div className={`col-12`}>
            <img src={tab} alt="tab"/>
          </div>
        </div>
    </>
  );
}

export default SmallTitle;
