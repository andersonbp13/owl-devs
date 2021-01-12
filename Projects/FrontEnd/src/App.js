import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SignIn from './components/SignIn'
import SignInSide from './components/SignInSide'
import SignUp from './components/SignUp'
import Album from './components/Album'
import Blog from './components/blog/Blog'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <SignInSide/> */}
          {/* <SignUp /> */}
          {/* <Route exact path='/' component={SignInSide} /> */}
          {/* <Route exact path='/SignUp' component={SignUp} /> */}
          <Blog/>          
        </header>
      </div>
    </Router>
  )
}

export default App
