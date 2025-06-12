import { useDownloadImages } from "../../context/DownloadImagesContext";
import Image from "./../create-page/Image";

export default function DownloadImages() {
  const { downloadImages } = useDownloadImages();
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-2">
        {downloadImages?.length > 0
          ? downloadImages.map((image, i) => (
              <Image key={i} src={image?.base64image} seed={image?.seed} />
            ))
          : "No image download yet"}
      </div>
    </div>
  );
}
