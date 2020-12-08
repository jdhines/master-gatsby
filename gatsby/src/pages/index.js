import React from 'react';
import Layout from '../components/Layout';
/*
  gatsby-browser.js, with its wrapPageElement function
  lets us declare the Layout component in one place, and
  wrap every page with it so each page doesn't have to import
  and use it.
*/
export default function HomePage() {
  return (
    <>
        <h1>Home</h1>
    </>
  )
}