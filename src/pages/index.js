import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

import "./mystyles.scss"

const IndexPage = ({ data }) => {
  console.log(data)
  function testFunction() {
    var menu = document.getElementsByClassName("navbar-menu")[0]
    var burger = document.getElementsByClassName("navbar-burger")[0]
    menu.classList.toggle("is-active")
    burger.classList.toggle("is-active")
  }

  return (
    <div>
      <nav
        class="navbar is-family-secondary"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <div class="navbar-item is-size-5 has-text-primary">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="" />
            Tokyo
          </div>
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={testFunction}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu has-text-centered">
          <div class="navbar-end">
            <a class="navbar-item is-size-5 has-text-primary" href="#skills">
              skills
            </a>
            <a class="navbar-item is-size-5 has-text-primary" href="#work">
              work
            </a>
            <a class="navbar-item is-size-5 has-text-primary" href="#contact">
              contact
            </a>
          </div>
        </div>
      </nav>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-1 has-text-grey">
              Hi, I'm <strong class="has-text-primary">David Chiche</strong>
            </h1>
            <h2 class="subtitle is-3 has-text-grey is-family-secondary">
              A fullstack developer and project manager with a head full of
              ideas
            </h2>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 id="skills" class="title is-2 has-text-primary">
            Skills
          </h2>
          <div class="columns is-gapless">
            <div class="column">
              <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal is-inline">
                node.js
              </h5>
              <h5 class="is-size-4 has-text-info is-family-primary has-text-weight-bold is-inline float-right">
                8/10
              </h5>
              <progress
                class="progress is-medium has-background-purple"
                value="80"
                max="100"
              >
                80%
              </progress>
              <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal is-inline">
                javascript
              </h5>
              <h5 class="is-size-4 has-text-info is-family-primary has-text-weight-bold is-inline float-right">
                8/10
              </h5>
              <progress
                class="progress is-medium has-background-purple"
                value="80"
                max="100"
              >
                80%
              </progress>
              <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal is-inline">
                react
              </h5>
              <h5 class="is-size-4 has-text-info is-family-primary has-text-weight-bold is-inline float-right">
                8/10
              </h5>
              <progress
                class="progress is-medium has-background-purple"
                value="80"
                max="100"
              >
                80%
              </progress>
              <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal is-inline">
                vue
              </h5>
              <h5 class="is-size-4 has-text-info is-family-primary has-text-weight-bold is-inline float-right">
                7/10
              </h5>
              <progress
                class="progress is-medium has-background-purple"
                value="70"
                max="100"
              >
                70%
              </progress>
            </div>
            <div class="column is-2"></div>
            <div class="column">
              <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal is-inline">
                html
              </h5>
              <h5 class="is-size-4 has-text-info is-family-primary has-text-weight-bold is-inline float-right">
                10/10
              </h5>
              <progress
                class="progress is-medium has-background-purple"
                value="100"
                max="100"
              >
                100%
              </progress>
              <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal is-inline">
                css
              </h5>
              <h5 class="is-size-4 has-text-info is-family-primary has-text-weight-bold is-inline float-right">
                9/10
              </h5>
              <progress
                class="progress is-medium has-background-purple"
                value="90"
                max="100"
              >
                90%
              </progress>
              <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal is-inline">
                jquery
              </h5>
              <h5 class="is-size-4 has-text-info is-family-primary has-text-weight-bold is-inline float-right">
                8/10
              </h5>
              <progress
                class="progress is-medium has-background-purple"
                value="80"
                max="100"
              >
                80%
              </progress>
              <h5 class="is-size-4 has-text-grey is-family-secondary has-text-weight-normal is-inline">
                express
              </h5>
              <h5 class="is-size-4 has-text-info is-family-primary has-text-weight-bold is-inline float-right">
                7/10
              </h5>
              <progress
                class="progress is-medium has-background-purple"
                value="70"
                max="100"
              >
                70%
              </progress>
            </div>
          </div>
        </div>
      </section>
      <section class="section has-background-primary">
        <div class="container">
          <h2 id="work" class="title is-2 has-text-white">
            Work
          </h2>
          <div class="columns is-multiline">
            {data.allMarkdownRemark.nodes.map(node => (
              <div key={node.id} class="column is-half">
                <div class="box">
                  <h6 class="is-size-6 has-text-primary is-family-secondary has-text-weight-normal has-text-right">
                    {node.frontmatter.type}
                  </h6>
                  <h3 class="title is-3 has-text-info">
                    {node.frontmatter.title}
                  </h3>
                  <figure>
                    <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                  </figure>
                  <p class="title is-6 is-family-secondary has-text-grey has-text-weight-normal">
                    {node.frontmatter.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div class="section">
        <h2 id="contact" class="title is-2 has-text-primary">
          Contact
        </h2>
        <div class="columns">
          <div class="column is-family-secondary has-text-info is-size-4 ">
            <p>hello_at_davidchiche.dev</p>
          </div>
          <div class="column has-text-right-tablet">
            <span class="icon is-large" style={{ marginRight: "15px" }}>
              <a
                href="https://www.linkedin.com/in/davidchiche/"
                target="_blank"
              >
                <i class="">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </i>
              </a>
            </span>
            <span class="icon is-large">
              <a href="https://github.com/chiched" target="_blank">
                <i class="">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          type
          title
          tech
          image {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                presentationWidth
                presentationHeight
                srcSet
                src
                sizes
                aspectRatio
              }
            }
          }
        }
        id
      }
    }
  }
`
export default IndexPage
