import React from 'react';

interface galleryProps {
  images: Array<string>;
}

interface imgType {
  img: string;
  key: number;
}

interface GalleryColumnProps {
  images: Array<imgType>;
}

const GalleryColumn = ({ images }: GalleryColumnProps) => {
  return (
    <div className="gallery-col">
      {images.map(({ img, key }) => {
        console.log(img);
        return (
          <div className="gallery-image" key={key}>
            <img src={`images/${img}`} />
          </div>
        );
      })}
    </div>
  );
};

const Gallery = ({ images }: galleryProps) => {
  const leftGallery: Array<imgType> = [];
  const rightGallery: Array<imgType> = [];

  images.forEach((img, idx) => {
    const data = { img, key: idx };

    if (idx % 2 === 0) {
      leftGallery.push(data);
    } else {
      rightGallery.push(data);
    }
  });

  return (
    <div className="gallery">
      <GalleryColumn images={leftGallery} />
      <GalleryColumn images={rightGallery} />
    </div>
  );
};

export default Gallery;
