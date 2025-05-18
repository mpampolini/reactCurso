import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h2>Forms</h2>
      <MyForm user={{
        name: "Mateus", 
        email: "mateus@gmail.com", 
        bio: "Sou um Desenvolvedor", 
        role: "admin"}} />
    </>
  )
}

export default App
