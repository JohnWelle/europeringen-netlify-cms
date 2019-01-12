import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TitelKatterTemplate = ({ title, intro, titelkatter, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <p>{intro}</p>
              <PageContent className="content" content={content} />
              {titelkatter.map((cat, i) => {
                <div key={i}>
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                  <img src={cat.img} />
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
  intro: PropTypes.string.isRequired,
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
        intro={post.frontmatter.intro}
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
        intro
        titelkatter
      }
    }
  }
`
