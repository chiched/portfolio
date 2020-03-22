import React from "react"
import { StaticQuery, graphql } from "gatsby"

import projectsStyles from "./projects.module.css"

const ProjectList = () => (
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
    render={data => console.log(data)}
  />
)

export default ProjectList
