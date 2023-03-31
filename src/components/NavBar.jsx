import PropTypes from "prop-types";

function NavBar(props) {
  const { onPreviousClick, onNextClick, hasPrevious, hasNext } = props;

  return (
    <div>
      {hasPrevious && (
        <button onClick={onPreviousClick}>Précédent</button>
      )}
      {hasNext && (
        <button onClick={onNextClick}>Suivant</button>
      )}
    </div>
  );
}

NavBar.propTypes = {
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
};

export default NavBar;

