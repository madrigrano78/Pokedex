import { useNavigate } from 'react-router-dom'
import './styles.css'

export function Login() {
  const navigate = useNavigate()
  function handleLogin(e) {
    e.preventDefault()
    const { email, password } = e.target.elements
    console.log(email, password)
    if (email.value === '' || password.value === '') {
      alert('Preencha todos os campos')
    } else {
      navigate('/pokemons')
    }
  }

  return (
    <div class="container">
      <h1>Pokedex</h1>

      <div class="login-button">
        <form onSubmit={handleLogin}>
          <label className="label-first">Usuário</label>
          <input type="text" name="email" />
          <label className="label-second">Senha</label>
          <input type="password" name="password" />
          <button class="button-style" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
