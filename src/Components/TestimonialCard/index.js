/*import assets*/
import customer from '../../Assets/images/profilePicture.svg';
/*import css*/
import classes from './testimonialCard.module.css';



function TestimonialCard() {
  return (

    <>
      <div className={`card w-50 bg-dark border-1 border-secondary p-3 mx-auto ${classes.card}`}>
        <div className="card-body row d-flex">
          <div className="col-xl-4 col-sm-12 d-flex justify-content-center align-items-center flex-column">
            <img className={`rounded w-75`} src={customer} />
            <h4 className={`text-white`}>John Hopkins</h4>
            <p className={`text-light`}>Founder</p>
          </div>
          <div className="col-xl-8 col-sm-12 d-flex align-items-center">
            <p className={"text-white"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              ante urna. Nulla interdum eros in neque ullamcorper viverra.
              Curabitur feugiat ut augue et vulputate. Nam libero ex,
              porttitor quis laoreet ac, maximus vulputate ipsum. Morbi
              ultricies turpis a dui efficitur, finibus tincidunt nibh
              vulputate. Curabitur scelerisque turpis et velit.
            </p>
          </div>
        </div>
      </div>
    </>

);
}

export default TestimonialCard;
