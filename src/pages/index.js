import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Davids portfolio</h1>
      {data.allMarkdownRemark.nodes.map(node => (
        <div key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <h3>{node.frontmatter.tech}</h3>
        </div>
      ))}
    </div>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          tech
        }
        id
      }
    }
  }
`
export default IndexPage
