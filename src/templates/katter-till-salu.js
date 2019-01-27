import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export const KatterTillSaluTemplate = ({
  description,
  title,
  helmet,
  expected,
  parents,
  tillSaluBilder,
  breeder,
}) => {
  global.console.log(
    description,
    title,
    helmet,
    expected,
    parents,
    tillSaluBilder,
    breeder
  )

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

KatterTillSaluTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  expected: PropTypes.bool,
  parents: PropTypes.string,
  tillSaluBilder: PropTypes.array,
  breeder: PropTypes.object,
}

const KatterTillSalu = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <KatterTillSaluTemplate
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        expected={post.frontmatter.expected}
        parents={post.frontmatter.parents}
        tillSaluBilder={post.frontmatter.tillSaluBilder}
        breeder={post.frontmatter.breeder}
      />
    </Layout>
  )
}

KatterTillSalu.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default KatterTillSalu

export const pageQuery = graphql`
  query KatterTillSaluByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
`
