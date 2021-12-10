import PropTypes from 'prop-types';

function Header({text}) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

//setting default props
Header.defaultProps = {
  text: "Feedback UI"
} 

//Specify the props type, below code checks for props type. isRequired - optional
Header.propTypes = {
  text: PropTypes.string.isRequired
}
export default Header;
