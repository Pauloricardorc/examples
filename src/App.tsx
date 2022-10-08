import './styles/app.css'
import pizzaImg from './assets/pizza.png'

export function App() {

  return (
    <div className="app">
      <h1>Examples rotate figure</h1>
      <img className="imgpizza" src={pizzaImg} alt="pizza rotate" />
    </div>
  )
}