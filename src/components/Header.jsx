import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  //You can put style in a variable
  const headerStyle = {
    //backgroundColor: "blue", or
    backgroundColor: bgColor,
    //color: "red",
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

//setting default props
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0, 0, 0, 0.4)",
  textColor: "#ff6a95",
};

//Specify the props type, below code checks for props type. isRequired - optional
Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;
