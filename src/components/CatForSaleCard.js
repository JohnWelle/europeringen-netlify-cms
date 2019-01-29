import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FiClock, FiCheck, FiX } from 'react-icons/fi'

const CatForSaleCard = ({
  slug,
  date,
  title,
  expected,
  parents,
  tillSaluBilder,
  breeder,
}) => {
  const imgParts = tillSaluBilder[0].split('/')
  const img = imgParts.pop()
  const version = imgParts.pop()
  const imgUrl = `https://res.cloudinary.com/dh0fuolka/image/upload/c_fill,ar_16:9,g_auto,q_auto/w_auto:breakpoints/${version}/${img}`
  // const imgUrl = `https://res.cloudinary.com/dh0fuolka/image/upload/w_400/${version}/${img}`

  const breederImgParts = breeder.logo.split('/')
  const breederImg = breederImgParts.pop()
  const breederVersion = breederImgParts.pop()
  const breederImgUrl = `https://res.cloudinary.com/dh0fuolka/image/upload/c_crop,g_face/w_64/${breederVersion}/${breederImg}`
  return (
    <Link to={slug}>
      <div className="card">
        <div className="card-image">
          <div
            className="card-image-wrapper"
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image">
                <img
                  src={`${breederImgUrl}`}
                  alt={breeder.name}
                  className="is-rounded is-48x48 image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-size-4">{title}</p>
              <p className="subtitle is-size-6">{breeder.name}</p>
            </div>
          </div>
          <div className="content">
            <div className="card-body">
              <p>{parents}</p>
            </div>
            <br />
            <footer className="card-footer">
              <div>
                {expected ? <FiX /> : <FiCheck />}
                <span>Födda?</span>
              </div>
              <div>
                <FiClock />
                <span>{date}</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </Link>
  )
}

CatForSaleCard.propTypes = {
  slug: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  expected: PropTypes.bool,
  parents: PropTypes.string,
  tillSaluBilder: PropTypes.array,
  breeder: PropTypes.object,
}

export default CatForSaleCard
