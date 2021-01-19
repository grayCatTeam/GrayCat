import './title.css';

function Title(props) {
  const {text} = props;

  return (
    <h1 className="strokeTitle" data-title={text}>
      {text}
    </h1>
  );
}

export default Title;
