import PropTypes from 'prop-types';
import './lightbox.css';

function Lightbox({ artwork, onClose }) {
  if (!artwork) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          ×
        </button>
        
        <img 
          src={artwork.image} 
          alt={artwork.title}
          className="lightbox-image"
        />
        
        <div className="lightbox-info">
          <h2>{artwork.title}</h2>
          <p>{artwork.description}</p>
          <span className="lightbox-year">{artwork.year}</span>
        </div>
      </div>
    </div>
  );
}

Lightbox.propTypes = {
  artwork: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Lightbox;