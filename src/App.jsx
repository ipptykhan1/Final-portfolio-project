
import './App.css'
// import Contact from './Components/Contact'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SocialLinks from './components/SocialLinks'
import MySkills from './components/MySkills'
import About from './Components/About'
import MyProjects from './components/MyProjects'

function App() {


  return (  
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <MyProjects></MyProjects>
      <MySkills></MySkills>
      {/* <Contact></Contact> */}
      <SocialLinks></SocialLinks>

    </div>
    
  )
}

export default App
