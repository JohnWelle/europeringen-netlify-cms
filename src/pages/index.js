import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { FaEnvelope } from 'react-icons/fa'
import { HTMLContent } from '../components/Content'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { markdownRemark } = data
    const { title, image } = markdownRemark.frontmatter

    return (
      <Layout>
        <section
          className="hero main-hero is-medium"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="hero-body">
            <div className="field has-addons main-cta">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Din mejladress"
                />
              </div>
              <div className="control">
                <a className="button">
                  <span className="icon is-small">
                    <FaEnvelope />
                  </span>
                  <span className="cta-label">Få nyhetsbrev</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <HTMLContent
                  className="content"
                  content={markdownRemark.html}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query PageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`
