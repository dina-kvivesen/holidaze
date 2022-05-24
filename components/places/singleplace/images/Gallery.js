import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function Gallery({ open, setOpen, photoIndex, setPhotoIndex, images }) {
  let imageUrls = [];
  images.forEach((image) => {
   //console.log(image);
   imageUrls.push(image.attributes?.url);
  });
  let imageThumbs = [];
  images.forEach((image) => {
    console.log(image.attributes?.formats.thumbnail.url);
    imageThumbs.push(image.attributes?.formats.thumbnail.url);
  });
  return (
    <>
      {open && (
        <Lightbox
          mainSrc={imageUrls[photoIndex]}
          nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
          prevSrc={
            imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]
          }
          mainSrcThumbnail={imageThumbs[photoIndex]}
          nextSrcThumbnail={imageThumbs[(photoIndex + 1) % imageUrls.length]}
          prevSrcThumbnail={
            imageThumbs[(photoIndex + imageUrls.length - 1) % imageUrls.length]
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + imageUrls.length - 1) % imageUrls.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageUrls.length)
          }
        />
      )}
    </>
  );
}

export default Gallery;