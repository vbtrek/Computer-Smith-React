import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Blog from './views/blog'
import Profile from './views/profile'
import Home from './views/home'
import Projects from './views/projects'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Blog} path="/blog" />
        <Route exact component={Profile} path="/profile" />
        <Route exact component={Home} path="/" />
        <Route exact component={Projects} path="/projects" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
