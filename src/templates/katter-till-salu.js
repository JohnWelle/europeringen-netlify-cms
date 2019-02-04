import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import SectionHeader from '../components/SectionHeader'
import CatForSaleCard from '../components/CatForSaleCard'

export default class KatterTillSaluPageTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { markdownRemark, allMarkdownRemark } = data

    const catsForSale = allMarkdownRemark.edges.map(item => ({
      ...item.node.frontmatter,
      slug: item.node.fields.slug,
    }))

    return (
      <Layout>
        <div className="container">
          <SectionHeader title="Katter Til Salu" />
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
          <div className="columns">
            {catsForSale.map((item, i) => (
              <div key={i} className="column">
                <CatForSaleCard key={i} {...item} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

KatterTillSaluPageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const katterTillSaluPageQuery = graphql`
  query KatterTillSaluPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "katter-till-salu" } }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { templateKey: { eq: "katter-till-salu-entity" } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            date(formatString: "DD:[e] MMM", locale: "sv-SE")
            title
            expected
            parents
            description
            tillSaluBilder
            breeder {
              name
              phone
              email
              homepage
              logo
            }
          }
        }
      }
    }
  }
`
