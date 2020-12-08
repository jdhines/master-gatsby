import React from 'react'
import { withTheme } from 'styled-components'
import Layout from './src/components/Layout'
/*
  runs on the browser after Gatsby has been loaded
  Usually also need to copy into gatsby-ssr.js
*/

export function wrapPageElement({element, props}) {
  return <Layout {...props}>{element}</Layout>

}