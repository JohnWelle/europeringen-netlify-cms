import React from 'react'
import PropTypes from 'prop-types'
import { TitelKatterTemplate } from '../../templates/titel-katter'

const TitelKatterPreview = ({ entry, widgetFor }) => {
  const entryTitelKatter = entry.getIn(['data', 'titelkatter'])
  const titelkatter = entryTitelKatter ? entryTitelKatter.toJS() : []

  return (
    <TitelKatterTemplate
      title={entry.getIn(['data', 'title'])}
      introduktion={entry.getIn(['data', 'introduktion'])}
      titelkatter={titelkatter}
      content={widgetFor('body')}
    />
  )
}

TitelKatterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TitelKatterPreview
