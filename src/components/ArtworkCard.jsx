import PropTypes from 'prop-types';
import './ArtworkCard.css';

function ArtworkCard({ artwork, onClick }) {
  return (
    <article className="artwork-card" onClick={() => onClick(artwork)}>
      <div className="artwork-image-wrapper">
        <img 
          src={artwork.image} 
          alt={artwork.title} 
          className="artwork-img"
          loading="lazy"
        />
        <div className="artwork-overlay">
          <span className="view-text">click to view</span>
        </div>
      </div>
      <div className="artwork-info">
        <h2>{artwork.title}</h2>
        <p>{artwork.description}</p>
        <span className="year">{artwork.year}</span>
      </div>
    </article>
  );
}

ArtworkCard.propTypes = {
  artwork: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArtworkCard;