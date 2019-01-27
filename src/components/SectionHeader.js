import React from 'react'
import PropTypes from 'prop-types'

const SectionHeader = ({ title }) => (
  <div className="section-header">{title}</div>
)

SectionHeader.propTypes = {
  title: PropTypes.string,
}

export default SectionHeader
