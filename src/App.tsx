import * as React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}
