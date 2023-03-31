const Navbar = ({pokemonList, setIndex}) => {
    return (
        <nav>
          <div >
            <ul>
            {pokemonList.map((e, buttonIndex) => (
            <button onClick={() => {setIndex(buttonIndex)}}
            key={buttonIndex}>
            {e.name}
            </button>))}
          </ul>
          </div>
        </nav>
    )
}


export default Navbar;

