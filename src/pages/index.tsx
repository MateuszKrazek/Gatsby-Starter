import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo";
import styles from "./index.module.scss"


interface INode {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      date: string;
    };
    excerpt: string;
  }
}

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      totalCount: number;
      edges: INode[]
    },
    site: {
      siteMetadata: {
        title: string;
        description: string;
      }
    }
  }
}

export const query = graphql`
{
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
  site {
    siteMetadata {
      title
      description
    }
  }
}
`


export default class IndexPage extends React.Component<IndexPageProps> {
  public render() {
    const { allMarkdownRemark, site } = this.props.data;
    return (
      <Layout>
        <SEO title="Axbit main page" description={site.siteMetadata.description} lang="en" />
        <div className={styles.posts}>
          <h3>{allMarkdownRemark.totalCount} Posts</h3>
          {allMarkdownRemark.edges.map(({ node }: INode) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}