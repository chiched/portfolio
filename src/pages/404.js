import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { Helmet } from "react-helmet"

import "./mystyles.scss"

const IndexPage = ({ data }) => {
  function testFunction() {
    var menu = document.getElementsByClassName("navbar-menu")[0]
    var burger = document.getElementsByClassName("navbar-burger")[0]
    menu.classList.toggle("is-active")
    burger.classList.toggle("is-active")
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>David Chiche</title>
        <meta property="og:title" content="David Chiche" />
        <meta
          property="og:description"
          content="This is the portfolio website of David Chiche"
        />
        <meta
          property="og:image"
          content="https://davidchiche.dev/og-image.jpg"
        />
      </Helmet>
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
              This page could <br class="is-hidden-tablet" />
              <strong class="has-text-primary">not </strong>
              be found.
            </h1>
          </div>
        </div>
      </section>

      <div class="section">
        <h2 id="contact" class="title is-2 has-text-primary">
          Contact
        </h2>
        <div class="columns">
          <div class="column is-family-secondary has-text-info is-size-4 ">
            <p class="email">hello_at_davidchiche.dev</p>
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
          url
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
