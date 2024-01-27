import './App.css'
import Card from './components/card'

function App() {
  let name={
    firstname:"Kenil",
    lastname:"Kanani"
  };
  let btnText;
  return (
    <>
      <Card name={name.firstname} btnText="Book Now"/>
      <Card name='About Dell' btnText={name.lastname}/>
    </>
  )
}

export default App
