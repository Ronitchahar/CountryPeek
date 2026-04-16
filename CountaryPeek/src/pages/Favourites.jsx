import { Link } from 'react-router-dom'
import { useFavourites } from '../hooks/useFavourites'
import CountryCard from '../components/CountryCard'

function Favourites() {
  const { favourites } = useFavourites()

  if (favourites.length === 0) {
    return (
      <div className="home__status">
        <p>No favourite countries yet.</p>
        <Link to="/">Go back to explore</Link>
      </div>
    )
  }

  return (
    <div className="cards-grid">
      {favourites.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  )
}

export default Favourites