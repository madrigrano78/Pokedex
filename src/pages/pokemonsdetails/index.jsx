import { useLocation } from 'react-router-dom'
import './styles.css'

export function PokemonsDetails() {
  const location = useLocation()
  const pokemon = location.state.pokemon
  const goToHome = () => {
    window.location.href = '/pokemons'
  }

  return (
    <>
      <div>
        <h1>{pokemon.name}</h1>
      </div>

      <div className="teste">
        <button className="home-init" onClick={goToHome}>
          Início
        </button>
      </div>

      <div>
        <img className="pokeimg" src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>

      <section className="pokeabilities">
        <h2>Habilidades</h2>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={Math.random()}>{ability.ability.name}</li>
          ))}
        </ul>
      </section>

      <section className="pokeversion">
        <h2>Versões em que aparece</h2>
        <ul>
          {pokemon.game_indices.map((version) => (
            <li key={Math.random()}>{version.version.name}</li>
          ))}
        </ul>
      </section>

      <section className="pokestats">
        <h2>Status</h2>
        <ul>
          {pokemon.stats.map((status) => (
            <li key={Math.random()}>
              {status.stat.name}: {status.base_stat}
            </li>
          ))}
        </ul>
      </section>

      <section className="poketypes">
        <h2>Tipos</h2>
        <ul>
          {pokemon.types.map((type) => (
            <li key={Math.random()}>{type.type.name}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
