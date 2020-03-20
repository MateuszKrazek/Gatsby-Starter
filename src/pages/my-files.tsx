import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

interface INode {
  node: {
    relativePath: string;
    prettySize: number;
    extension: string;
    birthTime: Date;
  }
}

interface IMyFilesProps {
  data: {
    allFile: {
      edges: INode[]
    }
  }
}


export default ({ data }: IMyFilesProps) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="All files" description="List of all files on server" lang="en" />
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }: INode, index: number) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
