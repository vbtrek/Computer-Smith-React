import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import BlogPage002TheRoadToAppleCarPlayInAnOlderCar from './views/blog-page002-the-road-to-apple-car-play-in-an-older-car'
import Blog from './views/blog'
import BlogPage001UpgradeHPMicroserverFromXPenologyToTrueNASSCALE from './views/blog-page001-upgrade-hp-microserver-from-x-penology-to-true-nas-scale'
import Contact from './views/contact'
import Projects from './views/projects'
import BlogPage003FlashingCostcoFeitSmartBulbsWithTasmota from './views/blog-page003-flashing-costco-feit-smart-bulbs-with-tasmota'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={BlogPage002TheRoadToAppleCarPlayInAnOlderCar}
          exact
          path="/blog-page002-the-road-to-apple-car-play-in-an-older-car"
        />
        <Route component={Blog} exact path="/blog" />
        <Route
          component={BlogPage001UpgradeHPMicroserverFromXPenologyToTrueNASSCALE}
          exact
          path="/blog-page001-upgrade-hp-microserver-from-x-penology-to-true-nas-scale"
        />
        <Route component={Contact} exact path="/contact" />
        <Route component={Projects} exact path="/projects" />
        <Route
          component={BlogPage003FlashingCostcoFeitSmartBulbsWithTasmota}
          exact
          path="/blog-page003-flashing-costco-feit-smart-bulbs-with-tasmota"
        />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
