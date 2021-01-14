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

function App() {
  const sections = [
    { title: "Request Appointment ", url: "/" },
    { title: "Consult Appointments", url: "/Appointments" },
  ]

  return (
    <Router>
      <div className="App">
        <Header title="GeoIPS" sections={sections} logState={true}/>
        <Route exact path="/" component={Blog} />
        <Route exact path="/SingIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Appointments" component={Appointments} />
      </div>
    </Router>
  )
}

export default App
