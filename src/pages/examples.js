import React from 'react'
import HeaderStatic from '../examples/HeaderStatic'
import Header from '../examples/Header'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

const examples = ({data}) => {
  const { site: { info: { author } } } = data;

  return (
    <Layout>
      <h1>hallo from example</h1>
      <Header />
      <HeaderStatic />
      <h5>author: {author} </h5>
    </Layout>
  )
}
export const data = graphql`
query {
  site {
    info: siteMetadata {
      title
      description
      author
      data 
      person {
        age
        name
      }
    }
  }
}
`
export default examples