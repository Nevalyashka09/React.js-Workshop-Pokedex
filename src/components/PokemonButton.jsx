import PropTypes from "prop-types";

function PokemonButton(props) {
  const { name, onClick } = props;

  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
  };

  return (
    <button onClick={onClick}>
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </button>
  );
}

PokemonButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PokemonButton;
