import { useImages } from "../../context/ImagesContext";

import Image from "./Image";

export default function DisplayImages() {
  const { images } = useImages();
  return (
    <div>
      <h3 className="text-zinc-200 mb-4 font-bold text-2xl text-center">
        Result: You can generate 9 images
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-2">
        {images?.map((image, i) => (
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
