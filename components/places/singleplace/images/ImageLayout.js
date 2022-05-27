import Gallery from './Gallery';
import { useState } from 'react';

function ImageLayout({ featured, images }) {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // display the first 4 images in the grid
  const fourImages = images.slice(0, 4);

  // Add featured image to images so it can be used in gallery
  let imageArray = [featured];
  images.forEach((image) => {
    imageArray.push(image);
  });

  return (
    <div className="relative h-xxl w-auto grid grid-cols-4 grid-rows-2 gap-2">
      <p
        className="absolute bottom-0 right-0 m-2 cursor-pointer bg-white p-2 rounded-md hover:text-primary font-semibold text-xs"
        onClick={() => {
          setOpen(!open);
          setPhotoIndex(0);
        }}>
        View images
      </p>
      <div className="max-h-full row-span-2 col-span-2">
        <img
          src={featured.attributes.url}
          alt={featured.attributes.alternativeText}
          className="cursor-pointer object-cover w-full h-full rounded-md"
          onClick={() => {
            setOpen(!open);
            setPhotoIndex(0);
          }}
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 col-span-2 row-span-2 gap-2 max-h-full">
        {fourImages.map((image, index) => {
          // change layout based on amount of images
          let space;
          if (fourImages.length === 3 && index === 2) {
            space = 'col-span-2 row-span-1';
          }
          switch (fourImages.length) {
            case 2:
              space = 'col-span-2 row-span-1';
              break;
            case 1:
              space = 'col-span-2 row-span-2';
              break;
            case 4:
              space = 'col-span-1 row-span-1';
              break;
          }
          return (
            <div key={image.id} className={`max-h-full ${space}`}>
              <img
                src={image.attributes.url}
                alt={image.attributes.alternativeText}
                className="cursor-pointer object-cover w-full h-full rounded-md"
                onClick={() => {
                  setOpen(!open);
                  setPhotoIndex(index + 1);
                }}
              />
            </div>
          );
        })}
      </div>
      <Gallery
        images={imageArray}
        open={open}
        setOpen={setOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
    </div>
  );
}

export default ImageLayout;