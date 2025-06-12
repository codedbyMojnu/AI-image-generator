import { useImages } from "../../context/ImagesContext";

import Image from "./Image";

export default function DisplayImages() {
  const { images } = useImages();
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-2">
        {images[0]?.src &&
          images.map((image, i) => (
            <Image
              key={i}
              src={image?.src}
              seed={image?.seed}
              loading={image?.loading}
              error={image?.error}
            />
          ))}
      </div>
    </div>
  );
}
