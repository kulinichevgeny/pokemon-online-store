import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../routes/routeNames'

const HomePageLayout = ({pokemonsList}) => {
  return (
      <div>
        <h1>Home Page</h1>
        {Object.entries(ROUTES).map(([routeName, path]) => (
            <Link to={path} key={routeName}>
              <button>{routeName}</button>
            </Link>
        ))}
        {pokemonsList.map((pokemon) => (
            <div key={pokemon.id}>
              <img src={pokemon.image} alt=""/>
              <p>{pokemon.name}</p>
              <p>Price: {pokemon.price} coins</p>
            </div>
        ))}
      </div>
  )
}

export default HomePageLayout