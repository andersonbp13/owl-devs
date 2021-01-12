import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SignIn from './components/SignIn'
import SignInSide from './components/SignInSide'
import SignUp from './components/SignUp'
import Album from './components/Album'
import Blog from './components/blog/Blog'
import Orders from './components/dashboard/Orders'
import Appointments from './components/Appointments'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Appointments/>
          {/* <Route exact path='/' component={Blog} />
          <Route exact path='/SingIn' component={SignIn} />
          <Route exact path='/SignUp' component={SignUp} /> */}
        </header>
      </div>
    </Router>
  )
}

export default App
