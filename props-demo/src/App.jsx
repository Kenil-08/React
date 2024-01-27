import './App.css'
import Card from './components/card'

function App() {
  let name;
  let btnText;
  return (
    <>
      <Card name="About Macbook 2" btnText="Book Now"/>
      <Card name='About Dell' btnText='Visit Now'/>
    </>
  )
}

export default App
