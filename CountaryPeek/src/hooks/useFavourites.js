import { useContext } from 'react'
import { FavouritesContext } from '../context/FavouritesContext.jsx'

export function useFavourites() {
  return useContext(FavouritesContext)
}