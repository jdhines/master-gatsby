import React from 'react'
import { withTheme } from 'styled-components'
import Layout from './src/components/Layout'

export function wrapPageElement({element, props}) {
  return <Layout {...props}>{element}</Layout>

}