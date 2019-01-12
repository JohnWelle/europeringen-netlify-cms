import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TitelKatterTemplate = ({ title, titelkatter, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  console.log(titelkatter)

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              {titelkatter.map((cat, i) => {
                <div key={i}>
                  <h3>{cat.namn}</h3>
                  <p>{cat.beskrivning}</p>
                  <div
                    className="full-width-image-container margin-top-0"
                    style={{
                      backgroundImage: `url(${
                        !!cat.bild.childImageSharp
                          ? cat.bild.childImageSharp.fluid.src
                          : cat.bild
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
                      {cat.namn}
                    </h2>
                  </div>

                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

TitelKatterTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  titelkatter: PropTypes.array.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TitelKatter = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TitelKatterTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        titelkatter={post.frontmatter.titelkatter}
        content={post.html}
      />
    </Layout>
  )
}

TitelKatter.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TitelKatter

export const titelKatterQuery = graphql`
  query TitelKatter($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        titelkatter {
          namn
          beskrivning
          bild {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
