import React from "react"
import { graphql } from "gatsby"
import "./mystyles.scss"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <nav
        class="navbar is-family-secondary"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <div class="navbar-item is-size-5 has-text-primary">
            Davids portfolio
          </div>
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-size-5 has-text-primary">skills</a>
            <a class="navbar-item is-size-5 has-text-primary">work</a>
            <a class="navbar-item is-size-5 has-text-primary">contact</a>
          </div>
        </div>
      </nav>
      <section class="hero has-background-primary is-medium">
        <div class="hero-body">
          <h1 class="title is-1 has-text-white">Hi, I'm David Chiche</h1>
          <h2 class="subtitle is-3 has-text-grey is-family-secondary">
            A fullstack developer and project manager with a head full of ideas
          </h2>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h1 class="title is-2 has-text-primary">Skills</h1>
          <div class="columns">
            <div class="column">
              <div class="content">
                <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal">
                  node.js
                </h5>
                <progress
                  class="progress has-background-purple"
                  value="90"
                  max="100"
                >
                  90%
                </progress>
              </div>
              <div class="content">
                <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal">
                  react
                </h5>
                <progress
                  class="progress has-background-purple"
                  value="90"
                  max="100"
                >
                  90%
                </progress>
              </div>{" "}
              <div class="content">
                <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal">
                  node.js
                </h5>
                <progress
                  class="progress has-background-purple"
                  value="90"
                  max="100"
                >
                  90%
                </progress>
              </div>
            </div>

            <div class="column">
              <div class="content">
                <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal">
                  css
                </h5>
                <progress
                  class="progress has-background-purple"
                  value="90"
                  max="100"
                >
                  90%
                </progress>
              </div>
              <div class="content">
                <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal">
                  nodeJS
                </h5>
                <progress
                  class="progress has-background-purple"
                  value="90"
                  max="100"
                >
                  90%
                </progress>
              </div>{" "}
              <div class="content">
                <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal">
                  nodeJS
                </h5>
                <progress
                  class="progress has-background-purple"
                  value="90"
                  max="100"
                >
                  90%
                </progress>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section has-background-primary">
        <div class="container">
          <h1 class="title">Work</h1>
          <div class="columns">
            <div class="column">
              <div class="box"></div>
              <div class="box"></div>
            </div>
            <div class="column">
              <div class="box"></div>
              <div class="box"></div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer"></footer>
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
