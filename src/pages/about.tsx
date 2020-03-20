import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
interface IAboutProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default ({ data }: IAboutProps) => (
  <Layout>
    <SEO title="My about page" description="Sample ABOUT page to see the description diff" lang="en" />
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      Axbit AS About page goes here. See the META tags in HEAD part of HTML to see the React helmet in action.
    </p>
  </Layout>
)