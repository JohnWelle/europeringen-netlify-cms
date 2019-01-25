import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export default class IndexPage extends React.Component {
  render() {
    global.console.log(this.props)

    const { data } = this.props
    const { markdownRemark } = data
    const { title, image } = markdownRemark.frontmatter

    return (
      <Layout>
        <section class="hero is-fullheight full-width-image-container"
          style={{
            minHeight: "auto",
            backgroundImage: `url(${image})`,
          }}
        >
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                {title}
              </h1>
              <h2 class="subtitle">
                Sveriges äldsta rasring
              </h2>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <HTMLContent className="content" content={markdownRemark.html} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query PageQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`
