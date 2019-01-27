import React from 'react'
import PropTypes from 'prop-types'
import { FaCheck } from 'react-icons/fa'

const CatForSaleCard = ({
  date,
  title,
  expected,
  parents,
  description,
  tillSaluBilder,
  breeder,
}) => (
  <div className="card">
    <div className="card-image">
      <div
        className="card-image-wrapper"
        style={{ backgroundImage: `url(${tillSaluBilder[0]})` }}
      />
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={`${breeder.logo}`} alt={breeder.name} />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">
            {breeder.email} - {breeder.phone}
          </p>
        </div>
      </div>
      <div className="content">
        <p>{parents}</p>
        <p>{description}</p>
        <p>
          Förväntad kull?
          {expected ? <FaCheck /> : null}
        </p>
        <br />
        <time datetime={date}>{date}</time>
      </div>
    </div>
  </div>
)

CatForSaleCard.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  expected: PropTypes.bool,
  parents: PropTypes.string,
  tillSaluBilder: PropTypes.array,
  breeder: PropTypes.object,
}

export default CatForSaleCard
