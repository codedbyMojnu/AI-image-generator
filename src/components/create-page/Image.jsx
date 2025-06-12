import { useDownloadImages } from "../../context/DownloadImagesContext";

import blobUrlToBase64 from "../../utils/blob-url-to-base64";
import DownloadIcon from "./../../Icons/DownloadIcon";

export default function Image({ loading, error, src, seed }) {
  const { downloadImages, setDownloadImages } = useDownloadImages();
  async function handleDownload() {
    const link = document.createElement("a");
    link.href = src;
    link.setAttribute("download", `${seed}.png`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);

    // conver blob url to base64 image
    const base64image = await blobUrlToBase64(src);
    console.log(base64image);
    const exists = downloadImages?.some((image) => image?.seed === seed);
    if (exists) {
      return;
    }
    setDownloadImages((images) => [...images, { base64image, seed }]);
  }
  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
      {src ? (
        <>
          <div
            className="absolute bottom-2 right-2 p-1"
            onClick={handleDownload}
          >
            <DownloadIcon />
          </div>
          <img src={src} alt={seed} className="w-full h-48 object-cover" />
        </>
      ) : (
        <div className="flex justify-center items-center h-48 text-white">
          {error && (
            <p className="bg-white text-lg text-red-500 p-5">
              Failed to Generted Image <br />
              {error}
            </p>
          )}
          {loading && (
            <p className="bg-white text-lg text-green-500 p-5">{loading}</p>
          )}
        </div>
      )}
    </div>
  );
}
