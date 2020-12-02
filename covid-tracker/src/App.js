import React from "react";
import "./App.css"
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Global from "./Pages/Global.js"
import Indonesia from "./Pages/Indonesia.js"
import Province from "./Pages/Province.js"

const App = () =>{
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/Global">
                              Global
                          </Link>
                      </li>
                      <li>
                          <Link to="/Indonesia">
                              Indonesia
                          </Link>
                      </li>
                      <li>
                          <Link to="/Province">
                              Province
                          </Link>
                      </li>
                  </ul>
              </nav>
          </div>
          <h1><center> Covid 19 Tracker </center></h1>
          <Switch>
              <Route path="/Global">
                  <Global />
              </Route>
              <Route path="/Indonesia">
                  <Indonesia />
              </Route>
              <Route path="/Province">
                  <Province />
              </Route>
          </Switch>
      </Router>
  )
}

export default App

