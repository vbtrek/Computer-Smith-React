import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Blog from './views/blog'
import ComingSoon from './views/coming-soon'
import Profile from './views/profile'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Blog} path="/blog" />
        <Route exact component={ComingSoon} path="/coming-soon" />
        <Route exact component={Profile} path="/profile" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
