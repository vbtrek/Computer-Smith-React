import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Blog from './views/blog'
import Contact from './views/contact'
import Home from './views/home'
import Projects from './views/projects'
import BlogPage001UpgradeHPMicroserverFromXPenologyToTrueNASSCALE from './views/blog-page001-upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Blog} path="/blog" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Home} path="/" />
        <Route exact component={Projects} path="/projects" />
        <Route
          exact
          component={BlogPage001UpgradeHPMicroserverFromXPenologyToTrueNASSCALE}
          path="/blog-page001-upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
