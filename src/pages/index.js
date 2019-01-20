import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { markdownRemark } = data
    const { title, image } = markdownRemark.frontmatter

    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp
                ? image.childImageSharp.fluid.src
                : image
              })`,
          }}
        >
          <h2
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            {title}
          </h2>
        </div>
        <HTMLContent className="content" content={markdownRemark.html} />
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
