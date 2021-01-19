import Title from '../../Atoms/Title';

function Content() {
  return (
    <div className="row g-0 mb-5">
      <div className="col-12 mb-5 content-padding">
        <Title
          backSide="WE CREATE FUTURE<br> WITH RAIN"
          frontSide="WE CREATE FUTURE<br> WITH RAIN"
        />
        <span className="fs-4 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry'sstandard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.the industry'sstandard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen.
        </span>
      </div>
    </div>
  );
}

export default Content;
