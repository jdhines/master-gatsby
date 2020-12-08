import { Link } from 'gatsby'
import React from 'react'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">LOGO</Link></li>
        <li><Link to="/">Hot Now</Link></li>
        <li><Link to="/pizzas">Pizzas</Link></li>
        <li><Link to="/slicemaster">Slicemaster</Link></li>
        <li><Link to="/order">Order Ahead</Link></li>
      </ul>
    </nav>
  )
}