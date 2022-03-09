import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Add from "./pages/add/add";
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useContext} from 'react';
import About from "./pages/about/About";
import { Context } from "./context/Context";
import Event from "./pages/event/Event";

function App() {
const {user} = useContext(Context)
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">{user ? <Home /> : <Register />}</Route>
        <Route exact path="/login">{user ? <Home /> : <Login />}</Route>
        <Route exact path="/add">{user ? <Add/> : <Register />}</Route>
        <Route exact path="/settings">{user ? <Settings/> : <Register />}</Route>
        <Route exact path="/about"><About/></Route>
        <Route exact path="/post/:id"><Single /></Route>
        <Route exact path="/event"><Event/></Route>
      </Switch>
    </Router>
  );
}

export default App;
