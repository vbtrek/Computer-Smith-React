import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import BlogPage002TheRoadToAppleCarPlayInAnOlderCar from './views/blog-page002-the-road-to-apple-car-play-in-an-older-car'
import Blog from './views/blog'
import BlogPage001UpgradeHPMicroserverFromXPenologyToTrueNASSCALE from './views/blog-page001-upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e'
import Contact from './views/contact'
import Projects from './views/projects'
import BlogPage003FlashingCostcoFeitSmartBulbsWithTasmota from './views/blog-page003-flashing-costco-feit-smart-bulbs-with-tasmota'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          exact
          component={BlogPage002TheRoadToAppleCarPlayInAnOlderCar}
          path="/blog-page002-the-road-to-apple-car-play-in-an-older-car"
        />
        <Route exact component={Blog} path="/blog" />
        <Route
          exact
          component={BlogPage001UpgradeHPMicroserverFromXPenologyToTrueNASSCALE}
          path="/blog-page001-upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e"
        />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Projects} path="/projects" />
        <Route
          exact
          component={BlogPage003FlashingCostcoFeitSmartBulbsWithTasmota}
          path="/blog-page003-flashing-costco-feit-smart-bulbs-with-tasmota"
        />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
