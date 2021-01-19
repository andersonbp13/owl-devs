import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import SignIn from "./components/SignIn"
import SignInSide from "./components/SignInSide"
import SignUp from "./components/SignUp"
import Album from "./components/Album"
import Blog from "./components/blog/Blog"
import Orders from "./components/dashboard/Orders"
import Appointments from "./components/Appointments"
import Header from "./components/blog/Header"
import Map from './components/Map';
import Checkout from './components/checkout/Checkout'


function App() {
  const sections = [
    { title: "Consult Appointments", url: "/Appointments" },
    { title: "Request Appointment ", url: "/Request" },
  ]

  return (
    <Router>
      <div>
        {/* <Map/> */}
        <Header title="GeoIPS" sections={sections} logState={true}/>
        <Route exact path="/" component={Blog} />
        <Route exact path="/SingIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Appointments" component={Appointments} />
        <Route exact path="/Request" component={Checkout} />
        {/* <Checkout/> */}
      </div>
    </Router>
  )
}

export default App
