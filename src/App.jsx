import { Login, PokemonsDetails, Pokemons } from './pages'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pokemons-details" exact element={<PokemonsDetails />} />
        <Route path="/pokemons" exact element={<Pokemons />} />
        <Route path="/" exact element={<Login />} />
      </Routes>
    </Router>
  )
}
