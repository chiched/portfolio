import React from "react"
import { StaticQuery, graphql } from "gatsby"

import projectsStyles from "./projects.module.css"

export default () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allMarkdownRemark {
          nodes {
            frontmatter {
              title
              tech
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <h1>{data.allMarkdownRemark.nodes.title}</h1>
      </header>
    )}
  />
)
