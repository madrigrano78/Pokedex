import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export function Pokemons() {
  const [search, setSearch] = useState('')
  const [pokemons, setPokemons] = useState([])

  const goToHome = () => {
    window.location.href = '/pokemons'
  }

  const navigate = useNavigate()

  function handleClick(pokemon) {
    navigate('/pokemons-details', { state: { pokemon } })
  }

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  const searchPokemon = async () => {
    try {
      if (search.length >= 3) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
        const data = await response.json()
        setPokemons([data])
      }
    } catch (error) {
      alert('Pokemon não encontrado!')
    }
  }

  const onButtonClickHandler = () => {
    searchPokemon()
  }

  const fetchPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      const data = await response.json()
      const promisesArray = data.results.map(({ url }) => fetch(url))
      const responseArray = await Promise.all(promisesArray)
      const dataArray = await Promise.all(responseArray.map((res) => res.json()))
      setPokemons(dataArray)
      pokemons.push(...dataArray)
    } catch (error) {
      alert('Erro ao buscar pokemons!')
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <div>
      <div className="home">
        <h1>Pokedex</h1>
      </div>
      <div className="teste">
        <button className="home-init" onClick={goToHome}>
          Início
        </button>
      </div>

      <div className="searchbar-container">
        <input
          placeholder="Buscar Pokemon"
          onChange={onChangeHandler}
          value={search}
          className="searchbar-input"
        />
        <button className="searchbar-btn" onClick={onButtonClickHandler}>
          Buscar
        </button>
      </div>

      <ul>
        {pokemons.map((pokemon) => (
          <li className="card" key={pokemon.id}>
            <img
              onClick={() => handleClick(pokemon)}
              className="card-image"
              alt={pokemon.name}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            />
            <h2 className="card-title">
              {pokemon.id}. {pokemon.name}
            </h2>
            <p className="card-subtitle"></p>
          </li>
        ))}
      </ul>
    </div>
  )
}
