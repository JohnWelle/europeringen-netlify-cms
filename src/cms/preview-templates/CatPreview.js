import React from 'react'
import PropTypes from 'prop-types'
import { CatTemplate } from '../../templates/cat'

const CatPreview = ({ entry, widgetFor }) => (
  <CatTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

CatPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CatPreview
