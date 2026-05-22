import { useState } from 'react';
import artworks from '../data/artworks.json';
import ArtworkCard from './ArtworkCard';
import Lightbox from './Lightbox';

function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleCloseLightbox = () => {
    setSelectedArtwork(null);
  };

  return (
    <>
      <main className="gallery">
        {artworks.map(art => (
          <ArtworkCard 
            key={art.id} 
            artwork={art} 
            onClick={handleArtworkClick}
          />
        ))}
      </main>
      
      {selectedArtwork && (
        <Lightbox 
          artwork={selectedArtwork} 
          onClose={handleCloseLightbox}
        />
      )}
    </>
  );
}

export default Gallery;