import NavBar from './Components/FunctionComponents/NavBar'
import Name from './Components/FunctionComponents/Name'
import Objective from './Components/FunctionComponents/Objective'
import Education from './Components/FunctionComponents/Education'
import Expertise from './Components/FunctionComponents/Expertise'
import Project from './Components/FunctionComponents/Project'
import Achievement from './Components/FunctionComponents/Achievement'
import Button from './Components/FunctionComponents/Button'
import './App.css'

function App() {
  return (
    <div>
      <NavBar/>
      <br />
      <Name/>
      <br />
      <Objective/>
      <br />
      <br />
      <Education/>
      <Expertise/>
      <br />
      <br />
      <Project/>
      <br /><br />
      <Achievement/>
      <br /><br />
      <hr/>
      <Button />
    </div>
  )
}

export default App

