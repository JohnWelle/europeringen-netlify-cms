import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { FaEnvelope } from 'react-icons/fa'
import { HTMLContent } from '../components/Content'
import SectionHeader from '../components/SectionHeader'
import CatForSaleCard from '../components/CatForSaleCard'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { allMarkdownRemark, markdownRemark } = data
    const { image } = markdownRemark.frontmatter

    const imgParts = image.split('/')
    const img = imgParts.pop()
    const version = imgParts.pop()
    const imgUrl = `https://res.cloudinary.com/dh0fuolka/image/upload/w_auto:breakpoints/${version}/${img}`
    // const imgUrl = `https://res.cloudinary.com/dh0fuolka/image/upload/w_1024/${version}/${img}`

    const catsForSale = allMarkdownRemark.edges.map(item => ({
      ...item.node.frontmatter,
      slug: item.node.fields.slug,
    }))

    return (
      <Layout>
        <section
          className="hero main-hero is-medium"
          style={{ backgroundImage: `url(${imgUrl})` }}
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
                <button className="button">
                  <span className="icon is-small">
                    <FaEnvelope />
                  </span>
                  <span className="cta-label">Få nyhetsbrev</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <SectionHeader title="Katter Til Salu" />
          <div className="columns">
            {catsForSale.map((item, i) => (
              <div key={i} className="column">
                <CatForSaleCard key={i} {...item} />
              </div>
            ))}
          </div>
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

// TODO: Implement aliases when implementing multiple allMarkdownRemark
// queries.
// https://www.gatsbyjs.org/docs/graphql-reference/#aliasing
export const pageQuery = graphql`
  query PageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image
      }
    }
    allMarkdownRemark(
      limit: 3
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
